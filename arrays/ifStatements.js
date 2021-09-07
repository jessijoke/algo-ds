//ES6 variable declaration
let simple = true;

//Multiline if statement - good for complex statements that check for multiple conditions and/or have multiple tasks per condition
if (simple) {
  console.log("Simple")
} else {
  console.log("Not simple")
}

//Ternary Conditional, good for simple if statements with 2 outcomes
simple ? console.log("Simple") : console.log("Not simple")

//Ternary conditional that calls a function to do multiple tasks
simple ? console.log("Simple") : doThisIfFalse();

//ES6 arrow function
const doThisIfFalse = () => {
  console.log("If it's false, it can perform")
  console.log("Multiple Tasks using this function")
}

//Single line if, when you only need to check for one outcome
if (simple) console.log("Simple")
