const { expect, assert } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle, artifacts } = require("hardhat");
const hre = require("hardhat");

const { DAI, DAI_WHALE, POOL_ADDRESS_PROVIDER } = require("../config");


async function main() {
  const flashLoan = await ethers.getContractFactory(
    "FlashLoan"
  );

  const _flashLoan = await flashLoan.deploy(
    // Address of the PoolAddressProvider: you can find it here: https://docs.aave.com/developers/deployed-contracts/v3-mainnet/polygon
    POOL_ADDRESS_PROVIDER
  );
  await _flashLoan.deployed();

  console.log("Flash loan contract deployed to", _flashLoan.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
