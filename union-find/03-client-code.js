const fs = require('fs');
const path = require('path');
const readline = require('readline');

const UnionFindWeighted = require('./03-quick-union-improvement.js');

const FILEPATH = path.resolve('./data.txt');
const fileStream = fs.createReadStream(FILEPATH);
const readLine = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNumber = 0;
let unionFind;

function checkHelper(p, q) {
  if (!unionFind.connected(p, q)) {
    unionFind.union(p, q);

    console.log(`united: ${p} + ${q}`);
  }
}

readLine.on('line', (line) => {
  if (lineNumber === 0) {
    console.log('First line says how many items we have');
    console.log('Create Union Find with specific number of items: ', line);

    unionFind = new UnionFindWeighted(Number(line));
  }

  if (line.length !== 0) {
    const [left, rightEntry] = line.split(' ');

    checkHelper(Number(left), Number(rightEntry));
    unionFind.showState();
  }

  lineNumber++;
});

readLine.on('close', () => {
  console.log('Finished file reading');
});





