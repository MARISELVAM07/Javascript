// MATH FUNCTIONS

let c;
// pi value
c=Math.PI;
console.log(c);
console.log(typeof c);

// e - Euler's value
c=Math.E;
console.log(c);

// Round off
c=Math.round(75.8);
console.log(c);
c=Math.round(75.3);
console.log(c);

// Floor (remove decimal)
c=Math.floor(8.7325);
console.log(c);

//trunc (remove decimal)
c=Math.trunc(2.85);
console.log(c);

//ceil (5.1 = 6, 5.00001 = 6)
c=Math.ceil(55.000001);
console.log(c);

//square root
c=Math.sqrt(110);
console.log(c);

//abs( negative to positive)
c=Math.abs(-77);
console.log(c);

//Power value
c=Math.pow(2,4);
console.log(c);

// max and min value
c=Math.min(10,20,30,40,50,60,70);
console.log(c);
c=Math.max(10,20,30,40,50,60,70);
console.log(c);

//Random Number
c=Math.random();
console.log(c);
//Random Number 1-50
c=Math.floor((Math.random()*100+1));
console.log(c);

//sign (positive = 1, Negative = -1, 0=0)
c=Math.sign(25);
console.log(c);
c=Math.sign(-25);
console.log(c);
c=Math.sign(0);
console.log(c);

// sin, cos, tan
c=Math.sin(45);
console.log(c);
c=Math.cos(45);
console.log(c);

//log value
c=Math.log(45);
console.log(c);
c=Math.log2(45);
console.log(c);
 