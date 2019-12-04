/*
// - window
   // - document -- property of window object

//window.document.write("<br> Document object is property of window object. <br>");


// access elements and attributes

var hElement = document.getElementById("my-heading");

//alert(hElement);


// get DOM object value
//alert(hElement.innerHTML);

// get DOM object attribute value
//alert(hElement.getAttribute("id"));

// get tag name
//alert(hElement.tagName);


//access elements using class attribute

var pElements = document.getElementsByClassName("my-paragraph"); // NodeList

//alert(pElements);

//alert(pElements[0]);

//alert(pElements[0].innerHTML);

//loop through all paragraphs

for ( var i=0; i < pElements.length; i++){

 //   alert(pElements[i].innerHTML);
}

// access elements using tag name

var ulElements = document.getElementsByTagName("ul");

//alert(ulElements);

//alert(ulElements[1].innerHTML);

var liElements = ulElements[1].getElementsByTagName("li");

//alert(liElements[0].innerHTML);

// access elements using name attribute

var naElements = document.getElementsByName("user-name");

//alert(naElements[0].tagName);

// access element using css query

var pElement = document.querySelector("p");
//alert(pElement.innerHTML);

var hElement = document.querySelector("#my-heading");
//alert(hElement.innerHTML);

var pElelemnts = document.querySelectorAll("p");
//alert(pElements[1].innerHTML);

var pElements = document.querySelectorAll("div p");
alert(pElements[1].innerHTML);


///////////// Navigation between Elements

var ulElements = document.getElementsByTagName("ul")[0];

//alert("Node name: " + ulElements.nodeName);
//alert("Node type: " + ulElements.nodeType);

//get child nodes
//alert("Node child nodes: " + ulElements.childNodes);

//get parent nodes
//alert("Node Parent: " + ulElements.parentNode.nodeName);
//alert("Node child nodes: " + ulElements.childNodes.length);

var ulChildNodes = ulElements.childNodes;

for(var i = 0; i< ulChildNodes.length; i++){

    if (ulChildNodes[i].nodeType ==1){

        //alert(ulChildNodes[i].innerHTML);
    }
}

//get first child of a node

// var liFirstChild = ulElements.firstChild.firstChild.nodeValue;
alert(ulElements.firstElementChild.innerText);
alert(liFirstChild);                              /////// Forma corecta

var liLastChild = ulElements.lastChild.firstChild.nodeValue;
//alert(liLastChild);


//get previous sibling - frate

//alert(ulElements.previousSibling.innerHTML);

/////////////////////////////////////////////Creating Elements & Attributes

var ulElement = document.getElementById("my-list");

//create list item node

var newLiElement = document.createElement("li");

// create text node for li

var newLiText = document.createTextNode("This is new list item");

//append text node to new list item as child

// newLiElement.appendChild(newLiText);

//append list item to unordered list as child
// ulElement.appendChild(newLiElement);


//alternate way of adding a new element/node using parent node
// get list item using id
 var liElement = document.getElementById("list-item-01");
//liElement.parentNode.appendChild(newLiElement);

//add new element using insertBefor
// liElement.parentNode.insertBefore(newLiElement, liElement);

//replace element using replaceChild
// liElement.parentNode.replaceChild(newLiElement, liElement);

var hElement = document.getElementById("my-heading");
//add attribute to element
// hElement.setAttribute("align","center");

//get anchor
var aElement = document.getElementsByTagName("a")[0];

// aElement.setAttribute("id","my-link");
aElement.id = "my-link";


//////////////////////////////////Changing element content & Attributes Value

//get h1 by its id
var hElement = document.getElementById("my-heading");

//get node value
//alert(hElement.nodeValue); // returns Null;

//get text node
//alert(hElement.childNodes[0].nodeValue);

//get text node
//alert(hElement.firstChild.nodeValue);

//hElement.firstChild.nodeValue = "Heading text just changed";

//set content using textContent
hElement.textContent = "Heading text changed using textContent";

//set content using innerHTML

// hElement.innerHTML ="<em>Heading text changed using innerHTML</em>";

// hElement.outerHTML = "<h2><em>Heading text just changed</em></h2>";

//////// get image by its tag name

var imgElement = document.getElementsByTagName("img")[0];
//imgElement.setAttribute("src","js-2.png"); // change source attribute value with a new one

imgElement.src = "js-2.png";
//ge anchor by its tag name
var aElement = document.getElementsByTagName("a")[0];
aElement.href = "https://www.google.com";




/////////////////////////////////////// MODIFYNG ELEMENTS STYLE

//get heading element/node

var hElement = document.getElementById("my-heading");

//hElement.style.color = "white";
//hElement.style.border = "3px solid black";
//hElement.style.backgroundColor = "blue";
//hElement.style.padding = "12px";
//hElement.style.width = "35.4%";

// Class Name

//hElement.className = "heading-css heading-01-css";

//remove all css classes
//hElement.className ="";

hElement.setAttribute("class","heading-css heading-01-css");



//////////////////////////////// REMOVING ELEMENTS & ATTRIBUTES

// get unordered list
var ulElement = document.getElementById("my-list");
ulElement.removeChild(ulElement.childNodes[1]);

// remove attribute using removeattribute method
ulElement.removeAttribute("id");

//remove id attribute of heading

var hElement = document.getElementById("my-heading");
hElement.removeAttribute("id");



//////////////////////////////////////DOCUMENT ELEMENT ANIMATION
///animate an image
(function(){
    var imgElement = document.getElementById("my-img");
    var imgTopPosition = 0;
    var imgLeftPosition = 450;

setInterval(moveImage, 10);

function moveImage(){
    //move down
    if(imgTopPosition < 270 && imgLeftPosition == 450 ){
        imgTopPosition++;
        imgElement.style.top = imgTopPosition + "px";
    } else if(imgLeftPosition < 720 && imgTopPosition == 270){ // imgTop trebuie sa ramana la pozitia 270

        imgLeftPosition++;
        imgElement.style.left = imgLeftPosition + "px";
    }
    else if (imgTopPosition > 0)
    {
        imgTopPosition--;
        imgElement.style.top = imgTopPosition + "px";
    }
    else if (imgLeftPosition > 450){
        imgLeftPosition -- ;
        imgElement.style.left = imgLeftPosition + "px";
    }

}

})();


///////////// JavaScript Events
//////////////Adding / REMOVE EVENT HANDLERS

function doSomething(){

    //alert("You just clicked me!");
}

var btnElement = document.getElementById("btn");

btnElement.onclick = function(){


    alert("You just clicked me231 !")
}

window.onload = function(){

 alert("This page just finished loading")
}


//get heading element by its id
var hElement = document.getElementById("my-heading");

hElement.onmouseover = function(){
    if(this.className == "h-normal"){
        this.className = "h-changed";
    } else{
        this.className = "h-normal";

    }

}

// hElement.onmouseover = function(){ alert("It just overwrite the previous event handler.");}



//get button by its id
var bt2Element = document.getElementById("btn2");

function changeBtnFontSize(){
    this.style.fontSize = "45px";

}
bt2Element.addEventListener("click", changeBtnFontSize);
bt2Element.addEventListener("click", function(){alert("This will not overwrite previous event handler")});

// remove event handler
bt2Element.removeEventListener("click", changeBtnFontSize);



//////////////////////////////////////////////// EVENT OBJECT

var btn2Element = document.getElementById("btn2");
function changeBtnFontSize(event){
    //this.style.fontSize = "40px";
    event.target.style.fontSize = "40px";
    alert(event.type);
    alert(event.target);
}

btn2Element.addEventListener("click", changeBtnFontSize);

// get element by its id
var aElement = document.getElementById("click-me");

function clickMe(event){

    alert("You just clicked me! ");
    event.preventDefault();

}
aElement.addEventListener("click", clickMe);

*/







liElement.parentNode.insertBefore(newLiElement, liElement);
bt2Element.removeEventListener("click", changeBtnFontSize);

var p = document.getElementById(parent);
var c = document.getElementById(child);
p.removeChild(c);


















