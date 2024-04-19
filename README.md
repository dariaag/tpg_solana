
# TypeScript ABI Type Generator for Beta Testing

## Installation

Clone this repository or download the source code. Navigate to the project directory and install the dependencies:

```bash
npm install
```

## Usage

To run the script, use the following command from the root of your project directory:

```bash
npm run gen path/to/your/input.json
```

## Example

Assuming you have an ABI file named `example.json` in the `abi` directory, you can process this file by running:

```bash
npm run gen ./abi/example.json
```

This will read the `example.json` file, process its contents, and generate a TypeScript file in the `abi` directory with the same base name as the input file.

## Output

The script generates TypeScript files that include:

- Imported types from `@subsquid/borsh`
- Custom TypeScript code structured according to the data from the ABI JSON file
- A pre-defined `programId` which is set in the output file

The output file will be named according to the input JSON file and saved in the `./abi/` directory.

## Error Handling

The script includes basic error handling for file I/O operations and JSON parsing. Errors are logged to the console.

## Contributing

Contributions to this project are welcome. Please ensure that your code adheres to the existing style and that all changes are well-documented.
