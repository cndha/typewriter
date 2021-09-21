const sentence = "hello there from lighthouse labs";

//loop through each letter, printing it 50ms after previous letter
let delay = 50; 

for (const char of sentence) {
  setTimeout( () => {
    process.stdout.write(char)
  }, delay)
  delay += 50;
}

setTimeout( () => {
  process.stdout.write('\n')
}, delay);
