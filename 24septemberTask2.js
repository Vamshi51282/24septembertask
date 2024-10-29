var a="vamshi"
 var r= a.slice(2,5)
var b=console.log(a.slice(2,5));
console.log(r.toUpperCase());

// 2
var c="srinivas"
console.log(c.toUpperCase());
console.log(c.length);

//3
var d="vamshi"
console.log(d.charCodeAt(5));

// 4
var a="    vamshi"
var b="singireddy   "
var c= a.trimStart();
var d= b.trimEnd();
var result= c.concat( " ",d)
console.log(result);

// 5
var a="VAMSHI"
var b="REDDY"
var c=b.toLocaleLowerCase()
var result1=a.concat(c)
console.log(result1);


// 6
var a="    vamshi"
var b= a.trimStart();
console.log(b.toLocaleUpperCase());

//7
var a="sathish"
var b= a.charAt(4)
console.log(b);
console.log(b.toLocaleUpperCase());

//8
var j=""


//9
var input="     hello world      "
var a=input.trimStart()
var b=input.trimEnd()   //doubt
var result2=a.concat(b)
console.log(result2);

//10
var string1="HELLO"
var string2="WORLD"
var l1= string1.toLocaleLowerCase()
var l2= string2.toLocaleLowerCase()
// console.log(l1,l2);
var result3= l1.concat(" ",l2)
console.log(result3);
 var i=result3.charAt(2)
 console.log(i);