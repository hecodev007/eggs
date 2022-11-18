// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

//npx hardhat run --network bsc_test scripts/nft.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
    //  string memory name, string memory symbol, uint256 maxNftSupply, uint256 saleStart
    // We get the contract to deploy
    // const Greeter = await hre.ethers.getContractFactory("QBIT");
    // const greeter = await Greeter.deploy("QIU","QBIT","10000000000000000000000","60");
    //
    // await greeter.deployed();
    //
    // console.log("Greeter deployed to:", greeter.address);
    accounts = await web3.eth.getAccounts();
    const DSGToken = await hre.ethers.getContractFactory("DSGToken");
    const Token = await DSGToken.deploy(accounts[0]);
    await Token.deployed();


    name_ = "ERA"
    symbol_ = "ERA"
    feeToken = Token.address
    feeWallet_ = accounts[0]
    _canUpgrade = false
    baseURI_ = "www.baidu.com"

    const DsgNft = await hre.ethers.getContractFactory("DsgNft");
    // const instCake = await upgrades.deployProxy(DsgNft, [name_, symbol_, feeToken, feeWallet_, _canUpgrade, baseURI_]);
    // await instCake.deployed();
    // console.log("DsgNft deployed to:", instCake.address);

    const dsgNft = await DsgNft.deploy(name_, symbol_);
    await dsgNft.deployed();
    console.log("DsgNft deployed to:", dsgNft.address);

    //await dsgNft.initialize(name_, symbol_, feeToken, feeWallet_, _canUpgrade, baseURI_);
    //npx hardhat verify --network bsc_test 0x7Aa1914E21A837396cEf9c6Df03DC625404bD3A6 "ERA" "ERA" "10000000000000000000000" "60"
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
