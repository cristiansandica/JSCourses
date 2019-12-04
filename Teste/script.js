/* var myObj1 = new Object();
myObj1.Car = "Ford";
myObj1.Year = 2010;
myObj1.Model= "Mustang";
myObj1.Cost = 50000;
//console.log(myObj1);


var myObj2 = {Car: "Toyota", Year:"2019", Model:"Camry", Cost:"20000"};
//console.log(myObj2);

var myObj3 = new myFun("Toyota", 2015, "Corolla", 4000);
function myFun(a,b,c,d){
    this.Car = a;
    this.Year = b;
    this.Model = c;
    this.Cost = d;
}
//console.log(myObj3);
//console.log(myObj1["Car"]);
//console.log(myObj1.Car);
///////////////////////////////////////////////////////////////////////////////////
var a = 5;
function myFunction(argA, argB){
    var myReturn = argA + " " + argB + " " + a;

    return("Hello World" + myReturn);
}
console.log(myFunction("Hello",1));
console.log(a);
///////////////////////////////////////////////////////////////////////////////////

var myOutput = document.getElementById("output");
console.dir(myOutput);
myOutput.innerHTML = "New Content";
var myBtn = document.getElementsByClassName("btn");
myBtn[1].innerText = "New Button";
console.dir(myBtn[1]);
document.getElementById("btn1").addEventListener("click", function(){
    window.alert("hello again again");
});
////////////////////////////////////////////////////////////////////////////////////
var myBtn2 = document.getElementById("btn2");
var myOutput = document.getElementById("output");
//myBtn2.onclick = myFun;
myBtn2.addEventListener("click", myFun);
function myFun(){
    myOutput.innerHTML = "You clicked it";
    myOutput.style.backgroundColor = "blue";
}*/
////////////////////////////////////////////////////////////////////////////////////
// var myEle = document.createElement("h1");
// var myContent = document.createTextNode("New Element");
// var myOutput = document.getElementById("output");
//
// myEle.appendChild(myContent);
// myOutput.appendChild(myEle);
//
// var myNodes = document.getElementById("wrapper").childNodes;
// console.log(myNodes);
////////////////////////////////////////////////////////////////////////////////////
//
// var a = 5;
// var b = 5;
// var c = b + a;
// var output = document.getElementById("output");
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// btn1.onclick = function() {
//
//     a++;
//     output.innerHTML = b+a;
// }
// btn2.onclick = function() {
//
//     a--;
//     output.innerHTML = c+a;
// }
//////////////////////////////////////////////////////////////////////////////////////
var output = document.getElementById("output");
var a = "1";
document.getElementById("btn1").onclick = function(){
    var myVal = document.getElementById("numA").value;
    if(myVal == "red" && a == 1 ){
        myVal = "Wow its red or equal to the value of a";

    }else if (myVal == "blue"){
        myVal = "Wow its BLUE :)";
    } else {
        myVal = "not red or blue " + myVal;
    }
    output.innerHTML = myVal;

};

































