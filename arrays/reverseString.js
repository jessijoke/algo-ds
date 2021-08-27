const myString = "This is my string."

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

function reverseStringLoop(string) {
  let newString = "";
  for (var i = string.length-1; i > 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseStringLoop(myString));
//console.log(reverseString(myString));