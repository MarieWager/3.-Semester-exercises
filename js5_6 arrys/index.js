const people = ["Harry", "Hermione", "Ron"];

let result;

result = people.push("Draco");
result = people.pop();
result = people.splice(0, 3);
result = people.splice(1, 0, "Luna");
people[1] = "Ginny";

///
/*
console.log(greeting);

function greeting(firstName) {
  return `Hello ${firstName}`;
}
*/

///
/*
const sayHi = greeting;
sayHi("Harry"); //ville også kunne kaldes som: greeting("Harry");

function conGreet(firstName) {
  console.log`Hello ${firstName}`;
}
setTimeout(conGreet, 1000, "Ron");
conGreet("Ron");
*/

///
//console.log(fireOrHire);

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

const person3 = { firstName: "Harry", lastName: "Potter", hired: false };
const person4 = { firstName: "Fred", lastName: "Weasly", hired: false };

function fireOrHire(action, person) {
  action(person);
}

console.log(person4);
fireOrHire(hire, person4);
console.log(person4);

//fireOrHire(fire, person3);
