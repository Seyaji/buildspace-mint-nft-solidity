import { ethers } from "hardhat"

async function deploy() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
    const myNFT = await MyNFT.deploy()
    await myNFT.deployed()
    console.log("Deployed successfully to: ", myNFT.address)

    let txn = await myNFT.makeNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")

    txn = await myNFT.makeNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")
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