const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function firstFunction() {
  for(let i = 0; i < 10000; i++) {
    //process
  }
}

async function secondFunction() {
  for(let i = 0; i < 10000; i++) {
    //process
  }
}
rl.question("Enter 'first' or 'seconde' ? ", async function(numOfFunc) {
  let i = 0;

  for(;i<0xffffff;i++);
  switch(numOfFunc){
    case "first":
      await firstFunction();
      break;
    case "second":
      await secondFunction();
      break;
  }

  rl.close();
});


