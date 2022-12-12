// Declare the necessary variables
let previousBlockHash = 'abc123';
let currentBlockData = [{
amount: 100,
sender: 'John',
recipient: 'Jane'
}, {
amount: 50,
sender: 'Alice',
recipient: 'Bob'
}];
let nonce = 0;

// Calculate the hash of the current block
let currentBlockHash = calculateHash(previousBlockHash, currentBlockData, nonce);

// Check if the hash satisfies the proof of work requirement
while (!hashMatchesDifficulty(currentBlockHash)) {
// If not, increment the nonce and try again
nonce++;
currentBlockHash = calculateHash(previousBlockHash, currentBlockData, nonce);
}

console.log(`Block mined: ${currentBlockHash}`);

// Function to calculate the hash of a block
function calculateHash(previousBlockHash, currentBlockData, nonce) {
// Concatenate the previous block hash, current block data, and nonce
let dataAsString = previousBlockHash + JSON.stringify(currentBlockData) + nonce;

// Return the SHA-256 hash of the concatenated string
return sha256(dataAsString);
}

// Function to check if the hash satisfies the proof of work requirement
function hashMatchesDifficulty(hash) {
// Convert the hash to a hexadecimal string
let hashInHex = hash.toString(16);

// Check if the first few characters of the hash are zeroes (difficulty level)
return hashInHex.substring(0, DIFFICULTY_LEVEL) === '0'.repeat(DIFFICULTY_LEVEL);
}

// Include the sha256 library
const sha256 = require('sha256');



