const prompt = require('prompt-sync')()

let guess = prompt("password:")

while(guess !== "SE!!"){
   guess = prompt("Try again")
}

let compotencies = ["if/else","while", "for","functions","objects"]

for (let i = 1; i <=5; i++){
  console.log(i)
} 