
const { ethers } = require("hardhat");
const fs = require("fs");

function saveAbiFileToAbiFolder(name, contract){
  // eslint-disable-next-line n/no-path-concat
  const contractsDir = `${__dirname}/../../src/abi`;

  if (!fs.existsSync(contractsDir)){
    fs.mkdirSync(contractsDir)
  }
  const data = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format("json")),
  };

  fs.writeFileSync(
    // eslint-disable-next-line n/no-path-concat
    `${__dirname}/../../src/abi/${name}.json`,
    JSON.stringify(data),
  )

}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the acount : ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account balance : ${balance.toString()}`);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  console.log(`Token address : ${token.address}`);

  const MissionBro = await ethers.getContractFactory("MissionContract");
  const missionBro = await MissionBro.deploy(
    token.address,
  );
  console.log(`MissionBro address : ${missionBro.address}`);

  saveAbiFileToAbiFolder("token", token);
  saveAbiFileToAbiFolder("missionBro", missionBro);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
