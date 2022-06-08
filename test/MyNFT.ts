import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers";

import { expect } from "chai";
import { ethers } from "hardhat";


import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { deployContract } from "ethereum-waffle";

import MyNFTArtifact from "../artifacts/contracts/MyNFT.sol/MyNFT.json";
import { MyNFT } from "../src/types/index";

describe("MyNFT Tests", function() {

    it("should be able to deploy", async function() {
        const [ owner ] = await ethers.getSigners()
        const myNFT = await (deployContract(owner, MyNFTArtifact)) as MyNFT;
    })

})
