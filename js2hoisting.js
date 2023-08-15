 
 
 var x = 7;
function getName(){
    console.log("Hello JavaScript");
}

console.log(x);      // 7
getName();           //Hello JavaScript
console.log(getName);//Whole function block

// doing some modifications

console.log(a);   //OP Undefined
getName2();       //hello Name 2

var a = 20;
function getName() {
    console.log("Hello Name 2");
}

// doing more modifications

console.log(b);  //Error Thrown Because b is not defined
getName3();

function getName3(){
    console.log("hello Name 3")
}