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
console.log("charAt: "+c)

//charCodeAt - #key value
c=first_name.charCodeAt(1);
console.log("charCodeAt: "+c);

