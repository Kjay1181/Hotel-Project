var names = [];//empty array
function addName(){
  var x= document.getElementById("userInput").value.toLowerCase();//gets the value from the input field
    document.getElementById("userInput").value="";//clears input field
  
  if (names.length==4){
     window.alert("Room is full");// room has 4 things this displays
   document.getElementById("userInput").value="";//clears the input field
    
  }
else {

  names.push(x);// array doesn't equal 4 pushes value into array
    document.getElementById("results").innerHTML=names;//displays it

  
}
}// allows you to add your name to room 1

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
}// allows you to delete your name from room 1

function getOut(){
  names.splice(0,names.length);
  document.getElementById("results").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput").disabled=true;
  
}//removes all names from room and locks room

function unlock(){
  window.alert("Room is now clean");
document.getElementById("userInput").disabled=false;
}// unlocks room


function addName1(){
  var x= document.getElementById("userInput1").value.toLowerCase();
    document.getElementById("userInput1").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput1").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results1").innerHTML=names;

}
}// allows you to add your name to room 2

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
}// allows you to delete your name from room 2

function getOut1(){
  names.splice(0,names.length);
  document.getElementById("results").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput1").disabled=true;
  
}//removes all names from room and locks room

function unlock1(){
  window.alert("Room is now clean");
document.getElementById("userInput1").disabled=false;
}// unlocks room


function addName2(){
  var x= document.getElementById("userInput2").value.toLowerCase();
    document.getElementById("userInput2").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput2").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results2").innerHTML=names;

}
}// allows you to add your name to room 3

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
}// allows you to delete your name from room 3

function getOut2(){
  names.splice(0,names.length);
  document.getElementById("results").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput2").disabled=true;
  
}//removes all names from room and locks room

function unlock2(){
  window.alert("Room is now clean");
document.getElementById("userInput2").disabled=false;
}// unlocks room


function addName3(){
  var x= document.getElementById("userInput3").value.toLowerCase();
    document.getElementById("userInput3").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput3").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results3").innerHTML=names;

}
}// allows you to add your name to room 4

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
}// allows you to delete your name from room 4

function getOut3(){
  names.splice(0,names.length);
  document.getElementById("results3").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput3").disabled=true;
  
}//removes all names from room and locks room

function unlock3(){
  window.alert("Room is now clean");
document.getElementById("userInput3").disabled=false;
}// unlocks room


function addName4(){
  var x= document.getElementById("userInput4").value.toLowerCase();
    document.getElementById("userInput4").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput4").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results4").innerHTML=names;

}
}// allows you to add your name to room 5

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
}// allows you to delete your name from room 5

function getOut4(){
  names.splice(0,names.length);
  document.getElementById("results4").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput4").disabled=true;
  
}//removes all names from room and locks room

function unlock4(){
  window.alert("Room is now clean");
document.getElementById("userInput4").disabled=false;
}// unlocks room


function addName5(){
  var x= document.getElementById("userInput5").value.toLowerCase();
    document.getElementById("userInput5").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput5").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results5").innerHTML=names;

}
}// allows you to add your name to room 6

function removeName5()// allows you to delete your name from room 6

function getOut5(){
  names.splice(0,names.length);
  document.getElementById("results5").innerHTML=names;
  window.alert("Room is locked for cleaning");
document.getElementById("userInput5").disabled=true;
  
}//removes all names from room and locks room

function unlock5(){
  window.alert("Room is now clean");
document.getElementById("userInput5").disabled=false;
}// unlocks room


