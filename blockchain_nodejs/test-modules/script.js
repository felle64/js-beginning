// Now, we can create a new instance of the Blockchain class and add some blocks to the chain
const Blockchain = require("./Blockchain");
const Block = require("./Block");

let myCoin = new Blockchain();
console.log("Mining block 1...");
myCoin.addBlock(new Block("This is the first block", "0", Date.now()));
console.log("Mining block 2...");
myCoin.addBlock(new Block("This is the second block", "0", Date.now()));
console.log("Mining block 3...");
myCoin.addBlock(new Block("This is the third block", "0", Date.now()));

// Finally, we can check the validity of the chain
console.log("Is the blockchain valid? " + myCoin.isChainValid());
