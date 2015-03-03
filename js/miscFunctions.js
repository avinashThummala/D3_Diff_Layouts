//Misc functions

function endall(transition, callback) 
{ 
  var n = 0; 
  transition 
      .each(function() { ++n; }) 
      .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
}                     

function deleteElements()
{
  var myNode = document.getElementById("svgArea");
  myNode.innerHTML = '';
}      

function getDocWidth() 
{
  return window.innerWidth;
}

function getDocHeight() 
{
  return window.innerHeight
}                

function getStrWidth(str)
{
  var test = document.getElementById("Test");
  test.innerHTML=str;

  return (test.clientWidth + 1);
}  