require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    monadTestnet: {
      url: process.env.MONAD_TESTNET_RPC_URL || "https://testnet-rpc.monad.xyz",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 10143, // Updated to correct Chain ID
    },
    monadMainnet: {
      url: "https://mainnet-rpc.monad.xyz", // Coming soon
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1, // TBD - will be updated when mainnet launches
    },
  },
  etherscan: {
    apiKey: {
      monadTestnet: "your-api-key-here", // If block explorer supports verification
    },
    customChains: [
      {
        network: "monadTestnet",
        chainId: 10143, // Updated Chain ID
        urls: {
          apiURL: "https://testnet.monadexplorer.com/api",
          browserURL: "https://testnet.monadexplorer.com",
        },
      },
    ],
  },
}
