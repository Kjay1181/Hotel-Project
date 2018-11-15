var roomOne = [];
var roomTwo=[];
var roomThree=[];
var roomFour=[];
var roomFive=[];
function addName(){
  var x= document.getElementById("userInput").value.toLowerCase();//gets the value from the input field
    document.getElementById("userInput").value="";//clears input field
  
  if (roomOne.length==4){
     window.alert("Room is full");// room has 4 things this displays
   document.getElementById("userInput").value="";//clears the input field
    
  }
else {

  names.unshift(x);// array doesn't equal 4 pushes value into array
    document.getElementById("results").innerHTML=names;//displays it

  
}
}

function removeName(){
 var x= document.getElementById("userInput").value.toLowerCase();// get value
    document.getElementById("userInput").value="";//Clears input field
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);//gets index position
  names.splice(a,1);//removes inputted name
  document.getElementById('results').innerHTML=names;//displays value
}
  
  else{
    window.alert("Please check in");// when array is empty this will popup
      }
}

function getOut(){
  names.splice(0,names.length);
  document.getElementById("results").innerHTML=names;
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
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput1").value="";
    
  }
else {

  names.unshift(x);
    document.getElementById("results1").innerHTML=names;

}
}

function removeName1(){
 var x= document.getElementById("userInput1").value.toLowerCase();
    document.getElementById("userInput1").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results1').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut1(){
  names.splice(0,names.length);
  document.getElementById("results1").innerHTML=names;
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
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput2").value="";
    
  }
else {

  names.unshift(x);
    document.getElementById("results2").innerHTML=names;

}
}

function removeName2(){
 var x= document.getElementById("userInput2").value.toLowerCase();
    document.getElementById("userInput2").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results2').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut2(){
  names.splice(0,names.length);
  document.getElementById("results2").innerHTML=names;
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
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput3").value="";
    
  }
else {

  names.unshift(x);
    document.getElementById("results3").innerHTML=names;

}
}

function removeName3(){
 var x= document.getElementById("userInput3").value.toLowerCase();
    document.getElementById("userInput3").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results3').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut3(){
  names.splice(0,names.length);
  document.getElementById("results3").innerHTML=names;
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
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput4").value="";
    
  }
else {

  names.unshift(x);
    document.getElementById("results4").innerHTML=names;

}
}

function removeName4(){
 var x= document.getElementById("userInput4").value.toLowerCase();
    document.getElementById("userInput4").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results4').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut4(){
  names.splice(0,names.length);
  document.getElementById("results4").innerHTML=names;
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
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput5").value="";
    
  }
else {

  names.unshift(x);
    document.getElementById("results5").innerHTML=names;

}
}

function removeName5(){
 var x= document.getElementById("userInput5").value.toLowerCase();
    document.getElementById("userInput5").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results5').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
      }
}

function getOut5(){
  names.splice(0,names.length);
  document.getElementById("results5").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput5").disabled=true;
  
}

function unlock5(){
  window.alert("Room is now clean");
document.getElementById("userInput5").disabled=false;
}


