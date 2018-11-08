var names = [];// array
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
