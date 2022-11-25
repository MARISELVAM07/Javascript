//STRING METHODS

let first_name="Mari";
let last_name="SelvaM";

//Concatenation - joining of 2 strings
let c=first_name+" "+last_name;
console.log("Concatenation: "+c);

//concat
c=first_name.concat(" ",last_name);
console.log("concat: "+c);  

//append
c="Mari ";
c+="Selvam"
console.log("Append: "+c);

//Escaping (\)
c='She Can\'t run';
console.log(c);

//Length
c=first_name.length;
console.log("length: " +c);

//Upper case and Lower case
c=first_name.toUpperCase();
console.log("Upper Case: "+c);

c=first_name.toLowerCase();
console.log("Lower Case: "+c);

//find the index of 
c=first_name.indexOf('a');
console.log("indexOf a: "+c);

c=first_name.indexOf('i');
console.log("indexOf i: "+c);

c=first_name+last_name;
c=c.indexOf('S');
console.log("indexOf S: "+c);

//last index of
c=first_name+last_name;
c=c.lastIndexOf('M');
console.log("lastIndexOf M: "+c);

// charecter of
c=first_name.charAt(1);
console.log("charAt: "+c);

//charCodeAt - #key value
c=first_name.charCodeAt(1);
console.log("charCodeAt: "+c);

//substring
/*************************************** */

c=first_name.substring(0,1);//0-M,1-a,2-r,3-i
console.log("substring(0,1): "+c);

c=first_name.substring(1);//0-M,1-a,2-r,3-i
console.log("substring(1): "+c);

c=first_name.substring(1,0);//it take smaller value first and larger next
console.log("substring(1,0): "+c);

c=first_name.substring(7);// the value of array is only 4. so, it doesn't give any result
console.log("substring(7): "+c);

c=first_name.substring(-2);//if we give negative value it take from 0.
console.log("substring(-2): "+c);

/*************************************** */

//slice
/************************************** */

c=first_name.slice(0,1);//0-M,1-a,2-r,3-i
console.log("slice(1,0): "+c);

c=first_name.slice(1);//0-M,1-a,2-r,3-i
console.log("slice(1): "+c);

c=first_name.slice(1,0);//only smaller value first and biggest value sencond
console.log("slice(1,0): "+c);

c=first_name.slice(7);// the value of array is only 4. so, it doesn't give any result
console.log("slice(7): "+c);

c=first_name.slice(-2);//if we give negative value it take from last in same order
console.log("slice(-2): "+c);

/************************************** */
