
const a = [1,2,3,4,5];
const [first, second] = a;

//---- Arrow Functions
const name = 'Timmo'
const myFunction = () => {
  console.log(`My name is ${name}`);
}

myFunction();

const funcion2 = () => ({value: 'test'}) // return object
console.log(funcion2().value);

// Class
class Person {
  constructor(name) {
    this._name = name
  }
  
  hello() {
    return 'Hello, I am ' + this._name + '.'
  }

  get name() {
      return this._name
  }

  set name(value) {
      this._name = value
  }
}

const timmo = new Person('Timmo')
// console.log(timmo.hello());

class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}

const timmonguyen = new Programmer('Timmo Nguyen')
// console.log(timmonguyen.hello());

class Hero{
  constructor(name, level){
    this._name = name;
    this._level = level;
  }

  getNameHero() { return this._name; }

  setName(value = 'Timmo'){
    this._name = value;
  }

  getLevelHero() { return this._level; }

  setLevel(value = 0) {
    this._level = value;
  }

  introduce() {
    return `Hello! My name is ${this._name}. I'm a level ${this._level} Hero`;
  }
}

var hero1 = new Hero('Timmo', 10);

console.log(hero1.introduce())

// Destructuring assignments
const student = {
  firstName: 'Timmo',
  lastName: 'Nguyen',
  age: 20
}

const {firstName: fName, lastName, age} = student;

console.log(`${fName} ${lastName}, Age: ${age}`);

// Prototype
const anObject = { y: 'y', test: () => 'zoo' }
const x = {
  __proto__: anObject,
  test() {
    return super.test() + 'x'
  }
}

// console.log(x.test());

// Dynamic properties
const k = {
  ['a' + '_' + 'b']: 'z'
}
// console.log(k.a_b);

// For-of loop
// for (const i of ['a', 'b', 'c']) {
//   console.log(i);
// }

for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(`${i}: ${v}`);
}

// promise
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

// repeat()
console.log('Timmo '.repeat(10));

// Rest properties
const { f, s, ...others } = {
  f: 1,
  s: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}

console.log(others);

// set
const s1 = new Set();
// s1.add('one')
// s1.add('two')

// console.log(s1.has('one'));
// console.log(s1.has('three'))

// s1.delete('one')

// console.log(s1.has('one'));
// s1.clear()
// console.log('Size of s1: ' + s1.size);

s1.add('one');
s1.add('two');
s1.add('three');

// for (const k of s1.keys()) {
//   console.log(k)
// }

// for (const k of s1.values()) {
//   console.log(k)
// }

// for (const k of s1) {
//   console.log(k)
// }

s1.forEach(v => console.log(v));

// Map
const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])
m.set('name', 'Timmo');

m.delete('age');

console.log('Color is ' + m.get('color'));

m.clear();