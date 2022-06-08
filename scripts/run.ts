import { ethers } from "hardhat"

async function deploy() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
    const myNFT = await MyNFT.deploy()
    await myNFT.deployed()

    let txn = await myNFT.makeNFT()
    await txn.wait()
    console.log("Deployed successfully to: ", myNFT.address)
}

(async () => {
    try { 
        await deploy() 
        process.exit(0)
    }
    catch(Error) {
        console.log(Error)
        process.exit(1)
    }
})()