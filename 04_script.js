// Data Types in Javascript
/*
JS Dynamic Program

Premitive Data Type
    1. Number       eg: 25, 1.25
    2. String
    2. Boolean      eg: True, False
    3. Null
    4. Undefined    
    5. Symbols  -   ES6 (New) 2015

Reference Data Type
    1. Array
    2. Object Literals
    3. Date and Time
    4. Function

*/

// PREMITIVE DATA TYPE
//----------------------------------------
var a=25;
console.log(typeof a);

a=25.5;
console.log(typeof a);

var Fname="Mariselvam";
console.log(typeof Fname);

var isMarried=true;
console.log(typeof isMarried);

var phone=null;
console.log(typeof phone); //it shows object but it is null

var b;
console.log(typeof b);

// every time we call symbol() it created unic identity
const s1=Symbol();
console.log(typeof s1);

const s2=Symbol();
console.log(typeof s2);

console.log(s1==s2); // it result false because it create unic value every time

// for Example

const n1=Number();
console.log(typeof n1);

const n2=Number();
console.log(typeof n2);

console.log(n1==n2); // it result true because it not create unic value every time

//-----------------------------------------

// REFERENCE DATA TYPE

var courses=[ 'c', 'c++', 'java'];
console.log(courses);
console.log(typeof courses);

var student={ 'name':"Mari", 'age':29};
console.log(student);
console.log(typeof student);

var d=new Date();
console.log(d);
console.log(typeof d);