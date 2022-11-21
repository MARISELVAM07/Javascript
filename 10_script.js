// COMPARISON OPERATORS
 

// Double == operator (checks only value)
let a=10;
let b=20;
console.log(a==b); // diff. value so false

a=10;
b=10;
console.log(a==b); // same value so true

a=10;
b="10";
console.log(a==b); // Diff type but same value so true

/*---------------------------------------*/

// Triple === Operator (checks value and type)

a="10";
b="10";
console.log(a===b); // same type same value so true

a="10";
b="20";
console.log(a===b);// same type but diff. value so false

a=10;
b="10";
console.log(a===b); // diff. type but same value so false


/*---------------------------------------*/

// Not equal to (!=)

a=10;
b=10;
console.log(a!=b); // (a) & (b) are same value we said (a) & (b) are not equal so False.