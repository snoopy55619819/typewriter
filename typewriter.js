const sentence = "hello there from lighthouse labs";

let timeout = 50;

for (const char in sentence) {
  setTimeout(() => {
    if (sentence.length - 1  === parseInt(char, 10)){
      process.stdout.write(sentence[char] + "\n"); 
    } else {
      process.stdout.write(sentence[char]);
    }
  }, timeout);
  timeout += 50;
};

