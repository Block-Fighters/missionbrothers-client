
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the acount : ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account balance : ${balance.toString()}`);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  console.log(`Token address : ${token.address}`);

  const MissionBro = await ethers.getContractFactory("MissionContract");
  const missionBro = await MissionBro.deploy();
  console.log(`MissionBro address : ${missionBro.address}`);

  const data = {
    address : token.address,
    abi : JSON.parse(token.interface.format("json")),
  };

  const missionData = {
    address : missionBro.address,
    abi : JSON.parse(missionBro.interface.format("json")),
  }

  fs.writeFileSync(
    // eslint-disable-next-line n/no-path-concat
    `${__dirname}/../../src/abi/Token.json`,
    JSON.stringify(data)
  );
  fs.writeFileSync(
    // eslint-disable-next-line n/no-path-concat
    `${__dirname}/../../src/abi/MissionBro.json`,
    JSON.stringify(missionData)
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
