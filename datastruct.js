/*

-------Building an Array from Scratch-----------


//building an array from scratch
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get (index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    } 
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);

*/

/*

----------Array Basics-----------------


const strings = ["a", "b", "c", "d"];

console.log(strings[2]);

strings.push('e'); //O(1)
strings.pop();//O(1)
strings.pop();

strings.unshift('x'); //O(n)

strings.splice(2, 0, "alien"); //O(n)

console.log(strings);
*/