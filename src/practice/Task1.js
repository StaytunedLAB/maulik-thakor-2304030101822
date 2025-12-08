// ### *Q1. Simple and Compound Interest Calculator*

javascript
let p = parseFloat(prompt("Enter Principal: "));
let r = parseFloat(prompt("Enter Rate: "));
let t = parseFloat(prompt("Enter Time in years: "));

let SI = (p * r * t) / 100;
let CI = p * (Math.pow((1 + r / 100), t)) - p;

console.log("Simple Interest = " + SI);
console.log("Compound Interest = " + CI);
