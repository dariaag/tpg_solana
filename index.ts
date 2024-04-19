import { string } from "@dao-xyz/borsh";

// Import required modules
const fs = require("fs").promises;
const path = require("path");
const cp = require("node:crypto");
const { Command } = require("commander");
const prettier = require("prettier");
const borsh = require("@dao-xyz/borsh");

// Setup command-line options
const program = new Command();
program.requiredOption("-f, --file <type>", "Input JSON file path");

program.parse(process.argv);
const options = program.opts();

// Define helper function to get the discriminator
function getDiscriminator(functionName: string) {
  const hash = cp
    .createHash("sha256")
    .update("global:" + functionName)
    .digest("hex");
  let discriminator = hash.substring(0, 16);
  return `0x${discriminator}`;
}

// Main function to process the file
async function processFile(filePath: string) {
  try {
    // Read JSON ABI file
    const fullPath = path.join(__dirname, filePath);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const name = path.basename(fullPath, ".json");
    const abi = JSON.parse(fileContent);

    let insObjects = [];
    for (let ins of abi.instructions) {
      let instructionName = ins.name;
      let discriminator = getDiscriminator(instructionName);
      let accounts = ins.accounts;
      let data = ins.args;

      let accountsObj = {} as any;
      let dataObj = {} as any;
      accounts.forEach(
        (acc: { name: string | number }, idx: any) =>
          (accountsObj[acc.name] = idx)
      );
      data.forEach(
        (d: { name: string | number; type: any }) => (dataObj[d.name] = d.type)
      );

      insObjects.push({
        d8: discriminator,
        name: instructionName,
        accounts: accountsObj,
        data: dataObj,
      });
    }

    let output = `import { bool, struct, u128, u64, i32, u16, u8, publicKey } from "@subsquid/borsh";\n`;
    output += `import { instruction } from "./abi.support";\n`;
    output += `export const programId = "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc";\n`;

    for (let ins of insObjects) {
      let dataString =
        "{\n    " +
        Object.entries(ins.data)
          .map(([key, type]) => {
            if (typeof type === "object") {
              type = JSON.stringify(type);
            }

            return `${key}: ${type}`;
          })
          .join(",\n    ") +
        "\n  }";

      let accountsString = Object.entries(ins.accounts)
        .map(([key, idx]) => `${key}: ${idx}`)
        .join(", ");
      output += `export const ${ins.name} = instruction({ d8: "${ins.d8}" }, {${accountsString}}, struct(${dataString}));\n`;
    }

    const outPath = path.join(__dirname, `./abi/${name}.ts`);

    const formattedOutput = await prettier.format(output, {
      parser: "typescript",
      singleQuote: true,
      trailingComma: "all",
    });
    await fs.writeFile(outPath, formattedOutput, "utf-8");
    console.log(`File has been written and formatted at ${outPath}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

processFile(options.file);
