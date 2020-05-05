const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const crtlC = '\u0003';

const beep = () => process.stdout.write('\x07');

const setTimer = (key) => {
  process.stdout.write(`setting timer for ${key} seconds \n`); 
  setTimeout(() => beep(), Number(key)*1000)
};

const exit = () => {
  process.stdout.write("Thanks for using me, ciao! \n");
  process.exit();
};

stdin.on('data', (key) => {
  if (key === crtlC) {
    exit();
  } else if (key === 'b') {
    beep();
  } else if (!isNaN(Number(key))){
    setTimer(key);
  }
});