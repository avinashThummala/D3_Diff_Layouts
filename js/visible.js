//Visibility related functions

function setFLayoutVisibility() {

  document.getElementById('vGLayoutDiv').style.display="block";

  document.getElementById('vCLayoutDiv').style.display="none";
  document.getElementById('vLineDiv').style.display = 'none';
  document.getElementById('vSPlotDiv').style.display="none";      
  document.getElementById('vCCLayoutDiv').style.display="none";
}      

function setCLayoutVisibility() {

  document.getElementById('vCLayoutDiv').style.display="block";

  document.getElementById('vLineDiv').style.display = 'none';
  document.getElementById('vSPlotDiv').style.display="none";      
  document.getElementById('vGLayoutDiv').style.display="none";
  document.getElementById('vCCLayoutDiv').style.display="none";
}      

function setSPlotVisibility() {

  document.getElementById('vSPlotDiv').style.display = 'block';

  document.getElementById('vLineDiv').style.display="none";
  document.getElementById('vCLayoutDiv').style.display="none";
  document.getElementById('vGLayoutDiv').style.display="none";
  document.getElementById('vCCLayoutDiv').style.display="none";

}

function setLineVisibility() {

  document.getElementById('vLineDiv').style.display = 'block';

  document.getElementById('vSPlotDiv').style.display="none";
  document.getElementById('vCLayoutDiv').style.display="none";
  document.getElementById('vGLayoutDiv').style.display="none";
  document.getElementById('vCCLayoutDiv').style.display="none";
}