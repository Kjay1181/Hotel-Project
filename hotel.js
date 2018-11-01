
function addName(){

  var x =document.getElementById("userInput").value;// gets the value of the user
document.getElementById("userInput").value=""; // clears the text box name
var li = document.createElement('li');// creates a list
    var newText=document.createTextNode(x);
    li.appendChild(newText);
   var olTag = document.getElementById("kj");
    olTag.appendChild(li);

  
}

function removeName(){

  
}

