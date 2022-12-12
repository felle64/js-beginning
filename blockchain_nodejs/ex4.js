const crypto = require('crypto');

class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, '0', Date.now(), 'Genesis block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = this.calculateHash(newBlock);
    this.chain.push(newBlock);
  }

  calculateHash(block) {
    return crypto.createHash('sha256')
      .update(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data))
      .digest('hex');
  }

  proofOfWork(block, difficulty) {
    while (block.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      block.nonce++;
      block.hash = this.calculateHash(block);
    }

    return block.hash;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== this.calculateHash(currentBlock)) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

const myChain = new Blockchain();

// Add some blocks to the chain
myChain.addBlock(new Block(1, '0', Date.now(), { amount: 5 }));
myChain.addBlock(new Block(2, '0', Date.now(), { amount: 10 }));
myChain.addBlock(new Block(3, '0', Date.now(), { amount: 15 }));
myChain.addBlock(new Block(4, '0', Date.now(), { amount: 11 }));

// Print the current state of the chain
console.log(myChain.chain);
