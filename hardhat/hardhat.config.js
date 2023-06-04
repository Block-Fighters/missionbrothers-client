require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/bjH08EtvW9vZ-qoqB4wkX_Rj1q4BNtex"
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
};
