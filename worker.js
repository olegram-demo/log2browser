fs = require('fs');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

module.exports.run = async () => {
  let progress = 0;
  const log = fs.createWriteStream('log');
  log.write(`${progress.toFixed(2)}\n`);
  do {
    await sleep(400 + getRandomFloat(-300, 300));
    progress += getRandomFloat(0.01, 0.08);
    if (progress > 100) {
      progress = 100;
    }
    log.write(`${progress.toFixed(2)}\n`);
  } while (progress < 100);
  log.close();
};
