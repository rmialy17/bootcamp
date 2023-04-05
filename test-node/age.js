const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est votre âge ? ', (age) => {
    if (age > 0 && age < 99 && age){
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - parseInt(age);
  console.log(`Vous êtes né(e) en ${birthYear}.`);}
  rl.close();
});
