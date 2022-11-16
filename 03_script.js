/*
    var
    let
    const
------------------------------------------
    1. scope 
        var - it can work inside and outside of the scope

        let & Const - It can work only inside the scope
*/

if (true)
{
    var msg="Welcome to Js";
    let alert="mariselvam";
    const text="mari";
    console.log(msg);
    console.log(alert);
    console.log(text);

}
console.log(msg);
console.log(alert)
// console.log(text);

//--------------------------------------
/*  2. Variable Redeclaration

        var - it can redeclare the value

        let, const - it can't redeclare the value

*/

var a=25;
console.log(a);

var a=35;
console.log(a);

let b=25;
console.log(b);

// let b=35;
// console.log(b);

const c=25;
console.log(c);

// const c=35;
// console.log(c);

// ------------------------------------------
/*  3. Value Assignment
        var , let - value can be reassign

        const - value can't reassign but object can reassign

*/

var d=25;
console.log(d);
d=35;
console.log(d);

let e=25;
console.log(e);
e=35;
console.log(e);

const f=25;
console.log(f);
// f=35;
// console.log(f);

const student={'name':"Mari", 'age':28};
console.log(student);

console.table(student);

console.log(student.name);

student.name="Selvam";
console.log(student);
console.table(student);