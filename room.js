var roomOne = [];
var roomTwo=[];
var roomThree=[];
var roomFour=[];
var roomFive=[];
var roomSix=[];
function addName(){
  var x= document.getElementById("userInput").value.toLowerCase();//gets the value from the input field
    document.getElementById("userInput").value="";//clears input field
  
  if (roomOne.length==4){
     window.alert("Room is full");// room has 4 things this displays
   document.getElementById("userInput").value="";//clears the input field
    
  }
else {

  roomOne.unshift(x);// array doesn't equal 4 pushes value into array
    document.getElementById("results").innerHTML=roomOne;//displays it

  
}
}

function removeName(){
 var x= document.getElementById("userInput").value.toLowerCase();// get value
    document.getElementById("userInput").value="";//Clears input field
if (roomOne.indexOf(x)!=-1){
var a=roomOne.indexOf(x);//gets index position
  roomOne.splice(a,1);//removes inputted name
  document.getElementById('results').innerHTML=roomOne;//displays value
}
  
  else{
    window.alert("Please check in");// when array is empty this will popup
      }
}

function getOut(){
  roomOne.splice(0,roomOne.length);
  document.getElementById("results").innerHTML=roomOne;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput").disabled=true;
  
}

function unlock(){
  window.alert("Room is now clean");
document.getElementById("userInput").disabled=false;
}


function addName1(){
  var x= document.getElementById("userInput1").value.toLowerCase();
    document.getElementById("userInput1").value="";
  
  if (roomTwo.length==4){
     window.alert("Room is full");
   document.getElementById("userInput1").value="";
    
  }
else {

  roomTwo.unshift(x);
    document.getElementById("results1").innerHTML=roomTwo;

}
}

function removeName1(){
 var x= document.getElementById("userInput1").value.toLowerCase();
    document.getElementById("userInput1").value="";
if (roomTwo.indexOf(x)!=-1){
var a=roomTwo.indexOf(x);
  roomTwo.splice(a,1);
  document.getElementById('results1').innerHTML=roomTwo;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut1(){
  roomTwo.splice(0,roomTwo.length);
  document.getElementById("results1").innerHTML=roomTwo;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput1").disabled=true;
  
}

function unlock1(){
  window.alert("Room is now clean");
document.getElementById("userInput1").disabled=false;
}


function addName2(){
  var x= document.getElementById("userInput2").value.toLowerCase();
    document.getElementById("userInput2").value="";
  
  if (roomThree.length==4){
     window.alert("Room is full");
   document.getElementById("userInput2").value="";
    
  }
else {

  roomThree.unshift(x);
    document.getElementById("results2").innerHTML=roomThree;

}
}

function removeName2(){
 var x= document.getElementById("userInput2").value.toLowerCase();
    document.getElementById("userInput2").value="";
if (roomThree.indexOf(x)!=-1){
var a=roomThree.indexOf(x);
  roomThree.splice(a,1);
  document.getElementById('results2').innerHTML=roomThree;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut2(){
  roomThree.splice(0,roomThree.length);
  document.getElementById("results2").innerHTML=roomThree;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput2").disabled=true;
  
}

function unlock2(){
  window.alert("Room is now clean");
document.getElementById("userInput2").disabled=false;
}

function addName3(){
  var x= document.getElementById("userInput3").value.toLowerCase();
    document.getElementById("userInput3").value="";
  
  if (roomFour.length==4){
     window.alert("Room is full");
   document.getElementById("userInput3").value="";
    
  }
else {

  roomFour.unshift(x);
    document.getElementById("results3").innerHTML=roomFour;

}
}

function removeName3(){
 var x= document.getElementById("userInput3").value.toLowerCase();
    document.getElementById("userInput3").value="";
if (roomFour.indexOf(x)!=-1){
var a=roomFour.indexOf(x);
  roomFour.splice(a,1);
  document.getElementById('results3').innerHTML=roomFour;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut3(){
  roomFour.splice(0,roomFour.length);
  document.getElementById("results3").innerHTML=roomFour;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput3").disabled=true;
  
}

function unlock3(){
  window.alert("Room is now clean");
document.getElementById("userInput3").disabled=false;
}


function addName4(){
  var x= document.getElementById("userInput4").value.toLowerCase();
    document.getElementById("userInput4").value="";
  
  if (roomFive.length==4){
     window.alert("Room is full");
   document.getElementById("userInput4").value="";
    
  }
else {

  roomFive.unshift(x);
    document.getElementById("results4").innerHTML=roomFive;

}
}

function removeName4(){
 var x= document.getElementById("userInput4").value.toLowerCase();
    document.getElementById("userInput4").value="";
if (roomFive.indexOf(x)!=-1){
var a=roomFive.indexOf(x);
  roomFive.splice(a,1);
  document.getElementById('results4').innerHTML=roomFive;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut4(){
  roomFive.splice(0,roomFive.length);
  document.getElementById("results4").innerHTML=roomFive;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput4").disabled=true;
  
}

function unlock4(){
  window.alert("Room is now clean");
document.getElementById("userInput4").disabled=false;
}


function addName5(){
  var x= document.getElementById("userInput5").value.toLowerCase();
    document.getElementById("userInput5").value="";
  
  if (roomSix.length==4){
     window.alert("Room is full");
   document.getElementById("userInput5").value="";
    
  }
else {

  roomSix.unshift(x);
    document.getElementById("results5").innerHTML=roomSix;

}
}

function removeName5(){
 var x= document.getElementById("userInput5").value.toLowerCase();
    document.getElementById("userInput5").value="";
if (roomSix.indexOf(x)!=-1){
var a=roomSix.indexOf(x);
  roomSix.splice(a,1);
  document.getElementById('results5').innerHTML=roomSix;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut5(){
  roomSix.splice(0,roomSix.length);
  document.getElementById("results5").innerHTML=roomSix;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput5").disabled=true;
  
}

function unlock5(){
  window.alert("Room is now clean");
document.getElementById("userInput5").disabled=false;
}
