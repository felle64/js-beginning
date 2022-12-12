// First, we need to define the Block class, which represents a single block in the blockchain
const SHA256 = require("crypto-js/sha256");

class Block {
    // The constructor function takes in three arguments: the data for the block, the previous block's hash, and the current timestamp
    constructor(data, previousHash, timestamp) {
      this.data = data;
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.hash = this.calculateHash();
      this.nonce = 0;
    }
  
    // This method calculates the hash of the block by concatenating the data, previous hash, and timestamp, and then hashing the result using SHA256
    calculateHash() {
      return SHA256(this.data + this.previousHash + this.timestamp + this.nonce).toString();
    }
  
    // This method performs the proof-of-work by repeatedly hashing the block until the resulting hash meets the specified difficulty criteria
    doProofOfWork(difficulty) {
      while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
    }
  }
  module.exports = Block;