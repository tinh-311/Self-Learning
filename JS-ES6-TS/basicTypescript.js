var message = "Hello World!";
var myName = 'Timmo';
// console.log(`${message} My name is ${myName.toUpperCase()}`);
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Timmo', new Date());
// --- Array
var myStringArray = ['Timmo', 'Nguyen']; // string array
// console.log(myStringArray);
var myNumberArray = [1, 2, 3, 4]; // Number array
// console.log(myNumberArray);
// --- Any
var obj = { name: 'Timmo', age: 20 };
// console.log(`My name is ${obj.name}, I'm ${obj.age} year old!`);
obj = 100;
// console.log(obj);
// -- Return Type Annotations
function sum(a, b) {
    return a + b;
}
// console.log(sum(1, 2));
var names = ['Timmo', 'Alice', 'Bob', 'Eve'];
// names.forEach(item => console.log(item));
// -- Object Types
function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
var objCoord = { x: 3, y: 7 };
// printCoord(objCoord);
// -- Optional Properties
function printName(obj) {
    console.log("Full Name: ".concat(obj.firstName, " ").concat(obj.lastName));
}
// printName({firstName: 'Timmo'});
// printName({firstName: 'Timmo', lastName: 'Nguyen'});
// -- Union Types
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// printId('Timmo');
// printId(100);
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, ".concat(x.join(' and ')));
    }
    else {
        console.log('Welcome lone travel ' + x);
    }
}
// welcomePeople(['Timmo', 'Alice']);
// welcomePeople('HCM city');
function getFirstThree(x) {
    return x.slice(0, 3);
}
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
var id1 = 1;
var id2 = '01';
;
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 100, y: 100 });
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'Dog';
    }
    return Dog;
}());
var dog = new Dog();
console.log(dog.name);
