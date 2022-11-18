require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require ("@openzeppelin/hardhat-upgrades");
//require ("hardhat-typechain");


//npm install --save-dev hardhat-typechain
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100000
          }
        }
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.7.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      }
    ],
  },

  etherscan: {
    //apiKey: `QVDVP85WK5D2UT77DWYEZPHGWZ2U5JFU3K` // ETH Mainnet
    apiKey: `UMHGM6QP7MVI1NUVHBW4N3NZHTPJPAFG6J` // BSC
  //  apiKey:`RYV3NV4F6F8G4DY8EWG9CABP97ND3IVFBY` //heco
  },

//  defaultNetwork: "development",
//   development: {
//     host: "127.0.0.1",     // Localhost (default: none)
//     port: 7545,            // Standard Ethereum port (default: none)
//     gas: 9000000,
//     gasPrice: 20,
//     network_id: "5777",       // Any network (default: none)
//   },


  networks: {

    ropsten: {
      url: `https://ropsten.infura.io/v3/85c51263825545bf8496006327bd98d1`,
      accounts: [mnemonic],
      chainId: 3,
      gasPrice: 20000000000,
      gasMultiplier: 1.2
    },
    bsc_mainnet: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [mnemonic],
      chainId: 56,
      gas: "auto",
      gasPrice: 15000000000,
      gasMultiplier: 1.2
    },

//     https://data-seed-prebsc-1-s1.binance.org:8545/
//     https://data-seed-prebsc-2-s1.binance.org:8545/
// https://data-seed-prebsc-1-s2.binance.org:8545/
//     https://data-seed-prebsc-2-s2.binance.org:8545/
//         https://data-seed-prebsc-1-s3.binance.org:8545/
//             https://data-seed-prebsc-2-s3.binance.org:8545/
    bsc_test: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [mnemonic],
      chainId: 97,
      gas: 10000000,
      gasPrice: "auto",
      gasMultiplier: 1.2
    },
//https://data-seed-prebsc-1-s1.binance.org:8545/
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/85c51263825545bf8496006327bd98d1`,
      accounts: [mnemonic],
      chainId: 4,
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1.2
    },

    heco_test: {
      //provider: () => new HDWalletProvider(mnemonic, `https://http-testnet.hecochain.com`),
      url:`https://http-testnet.hecochain.com`,
      accounts: [mnemonic],
      network_id: 256,       // Rinkeby's id
      gas: 'auto',        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }

  },
};

