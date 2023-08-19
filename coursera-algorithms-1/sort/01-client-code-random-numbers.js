const { argv } = require('node:process');

function createRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomItemsList(storage, length) {
  for (let i = 0; i < length; i++) {
    storage[i] = createRandomNumber(length, 1);
  }
}

function displayList(storage) {
  for (let i = 0; i < storage.length; i++) {
    console.log('-->', storage[i]);
  }
}

function main() {
  const numberOfItems = Number(argv[2]);

  if (!numberOfItems) {
    throw new Error('[Error] Number of items was not provided');
  }

  const randomValuesStorage = Array.from({ length: numberOfItems }, () => null);
  generateRandomItemsList(randomValuesStorage, numberOfItems);
  // Insertion sort should be here on storage
  displayList(randomValuesStorage);
}

main();

