const fs = require('fs');
const path = require('path');
const readline = require('readline');


const FILEPATH = path.resolve('./data.txt');
const fileStream = fs.createReadStream(FILEPATH);
const readLine = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNumber = 0;
let unionFindItems = 0;
let unionFindStorage = [];

function checkHelper(p, q) {
  if (!unionFind.connected(p, q)) {
    unionFind.union(p, q);

    console.log(`united: ${p} + ${q}`);
  }
}

readLine.on('line', (line) => {
  if (lineNumber === 0) {
    console.log('First line says how many items we have');
    
    unionFindStorage = Array.from({ length: Number(line) }, (_, i) => i + 1);
  }

  if (line.length !== 0) {
    const [left, rightEntry] = line.split(' ');

    checkHelper(Number(left), Number(rightEntry));
  }

  lineNumber++;
});

readLine.on('close', () => {
  console.log('Initiated storage', unionFindStorage);
  console.log('Finished file reading');
});





