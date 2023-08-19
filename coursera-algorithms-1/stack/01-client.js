const fs = require('fs');
const path = require('path');
const readline = require('readline');

const StackOfStrings = require('./01-stack.js');

const FILEPATH = path.resolve('./data.txt');
const fileStream = fs.createReadStream(FILEPATH);
const readLine = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNumber = 0;

const stackOfStrings = new StackOfStrings();

readLine.on('line', (line) => {
  if (line.length !== 0) {
    if (line === '-') {
      console.log(stackOfStrings.pop());
    } else {
      stackOfStrings.push(line);
    }
  }

  lineNumber++;
});

readLine.on('close', () => {
  console.log('Finished file reading');
});

