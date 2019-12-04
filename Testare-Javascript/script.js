
/*
                                             //function with parameters

function functionWithParameters(p1, p2){

    var z = p1 * p2;

    document.write("p1 * p2 = " + z + "<br>")
}



                                       //function call with argument
functionWithParameters(10,20);

//accept function as value
function parameterAsFunction(func){
    func();
}

parameterAsFunction(helloWorld);


function helloWorld() {
    alert("Hello world");
}

                                      // function with return statement

function returnSum(x,y) {
    var z = x+y;
    return z;
}

// var result = returnSum(10,20);

document.write("Returned value: " + returnSum(10,20));


                                     // self executing anonymous function

(function(){

    alert("auto show message. ");
}) ();

//o alta alternativa

(function(){

    alert("Auto show up message 2. ");
}());

(function(x,y){
    alert("Sum of x & y: " + (x+y));

})(10, 20);


                                  //self executing function with return

var sum = (function(x,y){
    return(x+y);

})(10,50);
alert("Returned value: " + sum);


// Javascript Function & Scope
//global scope

var x = 20;
function myFunction1() {
    alert("x= " + x + " accessed inside of a funcion.");
}
myFunction1();
alert("x = " + x + " accessed outside of a function.");

//local scope
//function scope
document.write("<br");
function myFunction2(){
    //local scope variable
    var y = 50;
    document.write("y= " + y + " accessed inside of a function.");

}
myFunction2();
//document.write("y= " + y + " accessed outside of a function.");



function myFunction3(){
    //automatically global - just by initialization
    z = 100;
    document.write("z= " + z + " accessed inside of a function.<br>");

}
myFunction3();
document.write("z= " + z + " accessed outside of a function.");



                                 //nested function "cuibarit"

function outerFunction(){

    function innerFunction(){

        //document.write("Code execution inside inner/nested function");

    }

    innerFunction();

}

outerFunction();

                                   //scoping rules
function outerFunction2(x,y){

    var d = 20;
    function innerFunction2() {

        var g = 20;

        document.write("g= " + g + "<br>");
        document.write("d= " + d + "<br>");
        document.write("x= " + x + "<br>");
        document.write("y= " + y + "<br>");

    }

    innerFunction2();
}

outerFunction2(30,40);




                                         //Dialog boxes

alert("Welcome to this website.");

                                       // confirm function

var v = confirm("Do you want us to sent you daily news?");

if(v){
    document.write("Ok, we will send you daily news. <br>");
} else{
    document.write("Ok, we will not send you daily news. <br>");
}

                                         //prompt function

var visitorAge = prompt("Enter your age:");
if (visitorAge >= 18){
    document.write("You are good to go. <br>");
} else {
    document.write("You are NOT good to go. <br>");
    document.write(visitorAge);
}



                               ////// DATA TYPES & OBJECTS
//String
var a = "hello";
alert(typeof a);
//Object
var a = new String("hello");
alert(typeof a);
//Boolean
var b = true;
alert(typeof b);
//Number
var c = 4;
alert(typeof c);




                          ///// Object

var person = new Object();
person.firstName = "Cristian";
person.lastName = "Sandica";
person.age = 22;
person.height = 5.9;
person.fullName = function(){
    return (person.firstName+ " " + person.lastName);
}
alert(person.fullName());
alert(person.age);



//create an object using an object constructor

function Person(fName, lName, age, hg){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.height = hg;
    this.fullName = function(){
        return(this.firstName + " " + this.lastName);
    }
}
var myBrother = new Person("Bobo", "Nazeebo", 25, 5.6);
var mySister = new Person("Marie", "Johnson", 20, 3.5);

alert(myBrother.fullName());
alert(myBrother.age);

alert(mySister.fullName());
alert(mySister.age);



///////////////////////////////////////create an object using an object literal

var person = {
  firstName: "Johnson" ,
  lastName: "Michael",
  age:25,
  height:5.6,
  fullName: function(){
      return(this.firstName + " " + this.lastName);
  }
};
alert(person.fullName());
alert(person.age);

////////////////////// Objects are changeable
var x = person;

x.firstName = "Johan";
alert(x.firstName);

alert(person.firstName);


delete person.age;
alert(person.age);



var myCar = {
    name: "BMW",
    year:2016,
    color:"Black"
};

var v = "";
for(var k in myCar){
    v = v +myCar[k] + " ";

}
alert(v);


//nested objects

var user = {
    name: "Cristian",
    age:25,
    size: {
        top:90,
        middle: 60,
        bottom: 90
}
};

alert(user.name);
alert(user.size.top);


           ////////////////////////// DATE & MATH OBJECTS
var rightNow = new Date();
alert(rightNow);


//milliseconds
var dt = new Date(3123123);
alert(dt); // show date in milliseconds from 01 Jan, 1970

// date string

dt = new Date("September 15, 2016");
alert(dt);

//date with year, month, day, hour, minute, second and milliseconds

dt = new Date(2003, 5, 25,6,40,30,30);
alert(dt);

// Date object with methods
var dtm = new Date();


//get Date
document.write("Date: " + dtm.getDate() + "<br>");
//get Day
document.write("Day: "+ dtm.getDay() + "<br>");
//get Month
document.write("Month: " + dtm.getMonth() + "<br>");
//get the year
document.write("Full Year: " + dtm.getFullYear() + "<br>");

// Math object handles mathematical operation

var sqr = Math.sqrt(20);
document.write("Square root: " + sqr + "<br>");

//look for minimum number;
var min = Math.min(10,20,3,15,7);
document.write("Minimum: " + min + "<br>");
//look for maximum number;
var max = Math.max(10,20,3,15,7);
document.write("Maximum: " + max + "<br>");

//random number

var rdm = Math.random();
document.write("Random: " + rdm + "<br>");

//round number
var rnd = Math.round(99.5);
document.write("Rounded: " + rnd + "<br>");

var pi = Math.PI;
document.write("PI: " + pi + "<br>");


/////////////////////////////////////////////ARRAY
// create an array using keyword

var myColors = new Array("Red", "Green", "Blue");
document.write(myColors[1] + "<br>");


// alternate syntax;
var myColors = ["Red", "Green", "Blue"];
document.write(myColors[0] +"<br>");

//modify array element
myColors[1] = "Yellow";
document.write(myColors[1] + "<br>");

// access all elements to an array
document.write(myColors + "<br>");
// find lenght of an array
document.write(myColors.length + "<br>");
// sort method

document.write(myColors.sort() + "<br>");
//reverse an array
document.write(myColors.reverse() + "<br>");

//add element using push
myColors.push("Pink");
document.write(myColors + "<br>");

//remove an element using pop
myColors.pop("Pink");
document.write(myColors + "<br>");


//join two or more arrays
var listOfNumber1 = [1,2,3];
var listOfNumber2 = [4,5,6];

var allNumbers = listOfNumber1.concat(listOfNumber2);
document.write(allNumbers + "<br>");

//loop through array elements

var myCars = ["BMW", "Honda", "Toyota"];

for(var i = 0; i< myCars.length; i++) {

    document.write(myCars[i] + "<br>");
}


// array objects
var myCars = [
    {model: "BMW", year:2016},
    {model: "Honda", year:2007},
    {model: "Toyota", year: 2017}

];

for(var k = 0; k < myCars.length; k++) {
    var myCar = "";
    for (var cp in myCars[k]) {
        myCar = myCar + myCars[k][cp];

    }
    document.write(myCar + "<br>");


/////////// Regular Expression & Function Objects

var regExp1 = new RegExp("abcd");
//alternate syntax;
var regExp2 = /abcd/;

var strToSearch = "This abcd is a bank name";

var matchFound = regExp2.test(strToSearch);
alert(matchFound);

//Function Object

var functionAsObject = new Function("a", "b", "return a+b ");
var x = functionAsObject(10,25);
alert(x);

var y = function(a,b){return (a + b)};
alert(y(25,20));

}


////////////////////String

var ss = new String("This is America");
document.write(ss + "<br>");

var s = "This is USA";


document.write(s + "<br>");


////////////////////////////////////////////COOKIES
/// create cookies


document.cookie = "userFirstName=Cristi; expires = Thu, 22 ian 2020 12:00:00 UTC";

document.cookie = "userLastName=Doru; expires = Thu, 22 ian 2020 12:00:00 UTC";

// read cookies

alert(document.cookie);

//delete cookies

document.cookie = "userLastName=Doru; expires = Thu, 22 ian 2010 12:00:00 UTC";

*/
////////////////////////////// DOCUMENT OBJECT MODEL (DOM)






















