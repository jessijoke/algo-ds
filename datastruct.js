const strings = ["a", "b", "c", "d"];

console.log(strings[2]);

strings.push('e'); //O(1)
strings.pop();//O(1)
strings.pop();

strings.unshift('x'); //O(n)

strings.splice(2, 0, "alien"); //O(n)

console.log(strings);
