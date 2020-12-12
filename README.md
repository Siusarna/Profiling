# Profiling
# Профайлинг коду
## Дано початковий код:
```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function firstFunction() {
  for(let i = 0; i < 10000; i++) {
    //process
    await setTimeout(() => {}, 1);
  }
}

async function secondFunction() {
  for(let i = 0; i < 10000; i++) {
    //process
    await setTimeout(() => {}, 1);
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

```
## Результати профайлінгу знаходяться в файлі `processed1.txt`

## Код після оптимізації можна побачити в файлі `main.js`, а результат профайлінгу знаходиться в файлі `processed2.txt`.
### Оптимізація була здійснена за допомогою видалення виклику функції `sleep` в кожній ітерації циклу
