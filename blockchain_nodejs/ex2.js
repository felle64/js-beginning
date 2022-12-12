const crypto = require('crypto');

// Block class
class Block {
  constructor(data, previousHash) {
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  // Method for calculating the block's hash
  calculateHash() {
    return crypto.createHash('sha256').update(this.data + this.previousHash).digest('hex');
  }
}

// Blockchain class
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  // Method for creating the first block in the chain (the "genesis block")
  createGenesisBlock() {
    return new Block('Genesis block', '0');
  }

  // Method for getting the latest block in the chain
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Method for adding a new block to the chain
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  // Method for verifying the integrity of the chain
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Check if the current block's hash is correct
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      // Check if the previous block's hash is correct
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

  // Method for implementing the proof of work algorithm
  proofOfWork(newBlock) {
    // Perform some work to find a valid hash for the new block
    // ...

    // Add the new block to the chain
    this.addBlock(newBlock);
  }
}

// Create a new instance of the Blockchain class
const myChain = new Blockchain();

// Add some blocks to the chain
myChain.proofOfWork(new Block('First block'));
myChain.proofOfWork(new Block('Second block'));
myChain.proofOfWork(new Block('Third block'));
