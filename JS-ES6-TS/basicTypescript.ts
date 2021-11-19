const message = "Hello World!";
const myName: string = 'Timmo';

// console.log(`${message} My name is ${myName.toUpperCase()}`);

function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Timmo', new Date());

// --- Array
var myStringArray: string[] = ['Timmo', 'Nguyen']; // string array
// console.log(myStringArray);

var myNumberArray: Number[] = [1, 2, 3, 4]; // Number array
// console.log(myNumberArray);

// --- Any
var obj: any = {name: 'Timmo', age: 20};
// console.log(`My name is ${obj.name}, I'm ${obj.age} year old!`);
obj = 100;
// console.log(obj);

// -- Return Type Annotations
function sum(a, b): Number{
    return a + b;
}

// console.log(sum(1, 2));

const names: string[] = ['Timmo', 'Alice', 'Bob', 'Eve'];
// names.forEach(item => console.log(item));

// -- Object Types
function printCoord(pt: {x: number; y: number}) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

var objCoord = {x: 3, y: 7};
// printCoord(objCoord);

// -- Optional Properties
function printName(obj: {firstName: string, lastName?: string}){
    console.log(`Full Name: ${obj.firstName} ${obj.lastName}`);
}

// printName({firstName: 'Timmo'});
// printName({firstName: 'Timmo', lastName: 'Nguyen'});

// -- Union Types
function printId(id: number | string) {
    if (typeof id === "string") {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
}

// printId('Timmo');
// printId(100);

function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        console.log(`Hello, ${x.join(' and ')}`);
    }
    else{
        console.log('Welcome lone travel ' + x);
    }
}

// welcomePeople(['Timmo', 'Alice']);
// welcomePeople('HCM city');

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

// console.log(getFirstThree([1, 2, 3, 4, 5]));
// console.log(getFirstThree('Timmo Nguyen'));

// -- Type Aliases
type Point = {
    x: number;
    y: number;
};

function printCoord2(pt: Point){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

// printCoord({ x: 100, y: 100 });

type ID = number | string;
var id1: ID = 1;
var id2: ID = '01';

// console.log('ID is number: ' + id1);
// console.log('ID is string: ' + id2);


// -- Interfaces
interface POINT {
    x: number;
    y: number;
};

function printCoord3(pt: POINT){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord3({x: 100, y: 100});

interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean;
}

class Dog implements Animal {
    name = 'Dog';
}

var dog = new Dog();
// console.log(dog.name);