// LOOPS
// a loop is a programming construct that repeats a block of code

// # for Loop
// for our initial value as long as the condition is true perform an increment and execute our code
// for (initial value; condition; increment/decrement) {

// }

let value = 1;

// ++value // i = i + 1

// value++ // i = i + 1

// calculate the sum of numbers from 1 to 10
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 1 + 2 = 3;
// 3 + 3 = 6;
// 6 + 4 = 10

// for (let i = 1; i <= 1000; i++) {
//     // iteration
//     console.log({iteration: i, beforeCalc: value})
//     value += i
//     console.log({afterCalc: value})
// }

// # while loop
// while my condition is true,  execute our code

// while (condition) {
// our code here
// }

// let myMoney = 1000;
// let yourMoney = 10000;

// while (yourMoney > myMoney) {
//   // infinite loop
//   console.log({ myMoney, yourMoney });
//   console.log("Grind Hard!!!!!");
//   myMoney += 10;
// }

// # do while loop
// before our loop, do the initial step, then run the while loop

let myMoney = 1000;
let yourMoney = 10000;
let result = 1;

do {
  // do the initial iteration
  console.log({ myMoney });
  console.log("Grind Hard!!!!! from do while loop");
  myMoney += 1000;
} while (yourMoney > myMoney);

console.log({ myMoney });

while (yourMoney > myMoney) {
  console.log({ myMoney });
  console.log("Grind hard from while loop");
  myMoney += 10;
  
}

// uppercase A

// lowercase a

let wrongpasswordforadmin = 1;


  // PascalCase
  let WRONG_PASSWORD_FORADMIN = "eutjrshdjs";

  // camelCase
  let wrongPasswordForAdmin = true ||  false

  // null
  let absence = null

  // undefined
  let nothing = {
  };

  const me = {
    firstName: "Maroof",
    age: 69,
    troubles: nothing
  }
                  // 0
  const meToo = ["Maroof"]


  me.firstName // Maroof

  meToo[0] // Maroof

function workout () {
  const breaks = 15

  console.log(breaks)
}

const console = {
  log: function() {}
}




  
























