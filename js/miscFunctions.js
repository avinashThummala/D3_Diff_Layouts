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

function calculateMinMaxYears(obj)
{
  var pYear;

  for(index in obj.years)
  {
    pYear=obj.years[index].year;

    if(pYear<minYear) 
      minYear=pYear;

    if(pYear>maxYear)
      maxYear=pYear;
  }

}

function modifyLabels()
{
  document.getElementById('minLabel').innerHTML=minYear;
  document.getElementById('maxLabel').innerHTML=maxYear;

  document.getElementById('tSlider').setAttribute("min", minYear);
  document.getElementById('tSlider').setAttribute("max", maxYear);
}

function fillList() {

  var mList = document.getElementById('mList');

  fullCNameList.map(function(cName, index){

    var opt = document.createElement('option');

    opt.selected = true;
    opt.value = selectedIds[index];
    opt.name = cName;
    opt.innerHTML = cName;

    mList.appendChild(opt);

  })

}