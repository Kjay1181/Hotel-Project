var names = [];
function addName(){
  var x= document.getElementById("userInput").value.toLowerCase();
    document.getElementById("userInput").value="";
  
  if (names.length==4){
     window.alert("Room is full");
   document.getElementById("userInput").value="";
    
  }
else {

  names.push(x);
    document.getElementById("results").innerHTML=names;

  
}
}

function removeName(){
 var x= document.getElementById("userInput").value.toLowerCase();
    document.getElementById("userInput").value="";
if (names.indexOf(x)!=-1){
var a=names.indexOf(x);
  names.splice(a,1);
  document.getElementById('results').innerHTML=names;
}
  
  else{
    window.alert("Please check in");
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