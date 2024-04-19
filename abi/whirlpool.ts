import { bool, struct, u128, u64, i32, u16, u8, publicKey } from "@subsquid/borsh";
import { instruction } from "./abi.support";
export const programId = "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc";
export const initializeConfig = instruction({ d8: "0x69c9523ad8155ca3" }, {config: 0, funder: 1, systemProgram: 2}, struct({
    feeAuthority: publicKey,
    collectProtocolFeesAuthority: publicKey,
    rewardEmissionsSuperAuthority: publicKey,
    defaultProtocolFeeRate: u16
  }));
export const initializePool = instruction({ d8: "0x5f4d179a1629512c" }, {whirlpoolsConfig: 0, tokenMintA: 1, tokenMintB: 2, funder: 3, whirlpool: 4, tokenVaultA: 5, tokenVaultB: 6, feeTier: 7, tokenProgram: 8, systemProgram: 9, rent: 10}, struct({
    bumps: {"defined":"WhirlpoolBumps"},
    tickSpacing: u16,
    initialSqrtPrice: u128
  }));
export const initializeTickArray = instruction({ d8: "0x0cffd4ca0ede0015" }, {whirlpool: 0, funder: 1, tickArray: 2, systemProgram: 3}, struct({
    startTickIndex: i32
  }));
export const initializeFeeTier = instruction({ d8: "0x7c353bd2d4068803" }, {config: 0, feeTier: 1, funder: 2, feeAuthority: 3, systemProgram: 4}, struct({
    tickSpacing: u16,
    defaultFeeRate: u16
  }));
export const initializeReward = instruction({ d8: "0x5655831b80c5def8" }, {rewardAuthority: 0, funder: 1, whirlpool: 2, rewardMint: 3, rewardVault: 4, tokenProgram: 5, systemProgram: 6, rent: 7}, struct({
    rewardIndex: u8
  }));
export const setRewardEmissions = instruction({ d8: "0x1fdae27bb13d9fb0" }, {whirlpool: 0, rewardAuthority: 1, rewardVault: 2}, struct({
    rewardIndex: u8,
    emissionsPerSecondX64: u128
  }));
export const openPosition = instruction({ d8: "0x300a646a3066a254" }, {funder: 0, owner: 1, position: 2, positionMint: 3, positionTokenAccount: 4, whirlpool: 5, tokenProgram: 6, systemProgram: 7, rent: 8, associatedTokenProgram: 9}, struct({
    bumps: {"defined":"OpenPositionBumps"},
    tickLowerIndex: i32,
    tickUpperIndex: i32
  }));
export const openPositionWithMetadata = instruction({ d8: "0xce17e8bfcfe6c825" }, {funder: 0, owner: 1, position: 2, positionMint: 3, positionMetadataAccount: 4, positionTokenAccount: 5, whirlpool: 6, tokenProgram: 7, systemProgram: 8, rent: 9, associatedTokenProgram: 10, metadataProgram: 11, metadataUpdateAuth: 12}, struct({
    bumps: {"defined":"OpenPositionWithMetadataBumps"},
    tickLowerIndex: i32,
    tickUpperIndex: i32
  }));
export const increaseLiquidity = instruction({ d8: "0x07fd4e278db4d5f4" }, {whirlpool: 0, tokenProgram: 1, positionAuthority: 2, position: 3, positionTokenAccount: 4, tokenOwnerAccountA: 5, tokenOwnerAccountB: 6, tokenVaultA: 7, tokenVaultB: 8, tickArrayLower: 9, tickArrayUpper: 10}, struct({
    liquidityAmount: u128,
    tokenMaxA: u64,
    tokenMaxB: u64
  }));
export const decreaseLiquidity = instruction({ d8: "0xb179ad7e886ca3f0" }, {whirlpool: 0, tokenProgram: 1, positionAuthority: 2, position: 3, positionTokenAccount: 4, tokenOwnerAccountA: 5, tokenOwnerAccountB: 6, tokenVaultA: 7, tokenVaultB: 8, tickArrayLower: 9, tickArrayUpper: 10}, struct({
    liquidityAmount: u128,
    tokenMinA: u64,
    tokenMinB: u64
  }));
export const updateFeesAndRewards = instruction({ d8: "0x6d78939d04b4a448" }, {whirlpool: 0, position: 1, tickArrayLower: 2, tickArrayUpper: 3}, struct({
    
  }));
export const collectFees = instruction({ d8: "0x5593bd967c83fff3" }, {whirlpool: 0, positionAuthority: 1, position: 2, positionTokenAccount: 3, tokenOwnerAccountA: 4, tokenVaultA: 5, tokenOwnerAccountB: 6, tokenVaultB: 7, tokenProgram: 8}, struct({
    
  }));
export const collectReward = instruction({ d8: "0x326927366bb27bfe" }, {whirlpool: 0, positionAuthority: 1, position: 2, positionTokenAccount: 3, rewardOwnerAccount: 4, rewardVault: 5, tokenProgram: 6}, struct({
    rewardIndex: u8
  }));
export const collectProtocolFees = instruction({ d8: "0xfdf1886cf89709de" }, {whirlpoolsConfig: 0, whirlpool: 1, collectProtocolFeesAuthority: 2, tokenVaultA: 3, tokenVaultB: 4, tokenDestinationA: 5, tokenDestinationB: 6, tokenProgram: 7}, struct({
    
  }));
export const swap = instruction({ d8: "0xf8c69e91e17587c8" }, {tokenProgram: 0, tokenAuthority: 1, whirlpool: 2, tokenOwnerAccountA: 3, tokenVaultA: 4, tokenOwnerAccountB: 5, tokenVaultB: 6, tickArray0: 7, tickArray1: 8, tickArray2: 9, oracle: 10}, struct({
    amount: u64,
    otherAmountThreshold: u64,
    sqrtPriceLimit: u128,
    amountSpecifiedIsInput: bool,
    aToB: bool
  }));
export const closePosition = instruction({ d8: "0x873e91a6bf3809fa" }, {positionAuthority: 0, receiver: 1, position: 2, positionMint: 3, positionTokenAccount: 4, tokenProgram: 5}, struct({
    
  }));
export const setDefaultFeeRate = instruction({ d8: "0xe27c374c56ca9dd3" }, {whirlpoolsConfig: 0, feeTier: 1, feeAuthority: 2}, struct({
    defaultFeeRate: u16
  }));
export const setDefaultProtocolFeeRate = instruction({ d8: "0x12ec959abce59a54" }, {whirlpoolsConfig: 0, feeAuthority: 1}, struct({
    defaultProtocolFeeRate: u16
  }));
export const setFeeRate = instruction({ d8: "0x1b9aa9ffca2733ef" }, {whirlpoolsConfig: 0, whirlpool: 1, feeAuthority: 2}, struct({
    feeRate: u16
  }));
export const setProtocolFeeRate = instruction({ d8: "0x9922766e37e15b98" }, {whirlpoolsConfig: 0, whirlpool: 1, feeAuthority: 2}, struct({
    protocolFeeRate: u16
  }));
export const setFeeAuthority = instruction({ d8: "0x161a3e1db843c9f0" }, {whirlpoolsConfig: 0, feeAuthority: 1, newFeeAuthority: 2}, struct({
    
  }));
export const setCollectProtocolFeesAuthority = instruction({ d8: "0xbe1c0042f78d6c52" }, {whirlpoolsConfig: 0, collectProtocolFeesAuthority: 1, newCollectProtocolFeesAuthority: 2}, struct({
    
  }));
export const setRewardAuthority = instruction({ d8: "0x686949090cbce5ce" }, {whirlpool: 0, rewardAuthority: 1, newRewardAuthority: 2}, struct({
    rewardIndex: u8
  }));
export const setRewardAuthorityBySuperAuthority = instruction({ d8: "0x094071adbcfe47f6" }, {whirlpoolsConfig: 0, whirlpool: 1, rewardEmissionsSuperAuthority: 2, newRewardAuthority: 3}, struct({
    rewardIndex: u8
  }));
export const setRewardEmissionsSuperAuthority = instruction({ d8: "0xbbd3afacc1585e86" }, {whirlpoolsConfig: 0, rewardEmissionsSuperAuthority: 1, newRewardEmissionsSuperAuthority: 2}, struct({
    
  }));
export const twoHopSwap = instruction({ d8: "0x932c3599334f3c1a" }, {tokenProgram: 0, tokenAuthority: 1, whirlpoolOne: 2, whirlpoolTwo: 3, tokenOwnerAccountOneA: 4, tokenVaultOneA: 5, tokenOwnerAccountOneB: 6, tokenVaultOneB: 7, tokenOwnerAccountTwoA: 8, tokenVaultTwoA: 9, tokenOwnerAccountTwoB: 10, tokenVaultTwoB: 11, tickArrayOne0: 12, tickArrayOne1: 13, tickArrayOne2: 14, tickArrayTwo0: 15, tickArrayTwo1: 16, tickArrayTwo2: 17, oracleOne: 18, oracleTwo: 19}, struct({
    amount: u64,
    otherAmountThreshold: u64,
    amountSpecifiedIsInput: bool,
    aToBOne: bool,
    aToBTwo: bool,
    sqrtPriceLimitOne: u128,
    sqrtPriceLimitTwo: u128
  }));
export const initializePositionBundle = instruction({ d8: "0xf3441ab38f8af962" }, {positionBundle: 0, positionBundleMint: 1, positionBundleTokenAccount: 2, positionBundleOwner: 3, funder: 4, tokenProgram: 5, systemProgram: 6, rent: 7, associatedTokenProgram: 8}, struct({
    
  }));
export const initializePositionBundleWithMetadata = instruction({ d8: "0x4a16917c6deb7d02" }, {positionBundle: 0, positionBundleMint: 1, positionBundleMetadata: 2, positionBundleTokenAccount: 3, positionBundleOwner: 4, funder: 5, metadataUpdateAuth: 6, tokenProgram: 7, systemProgram: 8, rent: 9, associatedTokenProgram: 10, metadataProgram: 11}, struct({
    
  }));
export const deletePositionBundle = instruction({ d8: "0x9ee0385d6b97d18d" }, {positionBundle: 0, positionBundleMint: 1, positionBundleTokenAccount: 2, positionBundleOwner: 3, receiver: 4, tokenProgram: 5}, struct({
    
  }));
export const openBundledPosition = instruction({ d8: "0x06ebbce642d7d1bd" }, {bundledPosition: 0, positionBundle: 1, positionBundleTokenAccount: 2, positionBundleAuthority: 3, whirlpool: 4, funder: 5, systemProgram: 6, rent: 7}, struct({
    bundleIndex: u16,
    tickLowerIndex: i32,
    tickUpperIndex: i32
  }));
export const closeBundledPosition = instruction({ d8: "0xed10b7bce4529f1e" }, {bundledPosition: 0, positionBundle: 1, positionBundleTokenAccount: 2, positionBundleAuthority: 3, receiver: 4}, struct({
    bundleIndex: u16
  }));
