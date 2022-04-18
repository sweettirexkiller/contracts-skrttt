const path = require("path");
const fs = require("fs");
const solc = require('solc');

const filePath = path.resolve(__dirname,'contracts','SimpleStorage.sol');
const source = fs.readFileSync(filePath, {encoding: "utf8"});


module.exports = solc.compile(source, 1).contracts[':SimpleStorage'];
