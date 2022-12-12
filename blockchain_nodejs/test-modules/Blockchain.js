// Part 1: Define the blockchain class and its properties
// Next, we need to define the Blockchain class, which represents the entire blockchain
const Block = require("./Block");
class Blockchain {
    // The constructor function initializes the chain with the genesis block
    constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 2;
    }
  
    // This method creates the genesis block, which is the first block in the chain
    createGenesisBlock() {
      return new Block("Genesis block", "0", Date.now());
    }
  
    // This method returns the latest block in the chain
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
  
    // This method adds a new block to the chain by calling the doProofOfWork method and then pushing the block to the chain array
    addBlock(newBlock) {
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.doProofOfWork(this.difficulty);
      this.chain.push(newBlock);
    }
  
    // This method checks the validity of the chain by comparing the hashes of each block and ensuring that they are correct
    isChainValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
  
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
  
      return true;
    }
  }
  module.exports = Blockchain;