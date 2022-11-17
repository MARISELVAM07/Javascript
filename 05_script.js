// TYPE CONVERSION

// 1. Number to String

let a;
a=25;
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);


a=25.25;
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);


a=true;
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);


a=new Date();
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);


a=[1,2,3,4,5];
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);


// .toString  (alternate Method)

a=25;
console.log(a, typeof a);
a=a.toString();
console.log(a, typeof a);

//---------------------------------------

// 2. String to Number


a="77"
console.log(a, typeof a);
a=Number(a);
console.log(a, typeof a);


a=true;  //1 - true, 2 - false
console.log(a, typeof a);
a=Number(a);
console.log(a, typeof a);


a=[1,2,3,4,5]; //when converting array(object) to Number it show "NAN" - "Not An Number"
console.log(a, typeof a);
a=Number(a);  
console.log(a, typeof a);


a="MARISELVAM" // SAME TO THE ALPHABET WORDS
console.log(a, typeof a);
a=Number(a);
console.log(a, typeof a);

// parseint or parsefloat - alternate method

a="77.77"
console.log(a, typeof a);
a=parseInt(a);
console.log(a, typeof a);


a="77.77"
console.log(a, typeof a);
a=parseFloat(a);
console.log(a, typeof a);

