//Functions associated with updating, drawing and deleting a Force Layout 

Force = function(nodes, links) {

  return d3.layout.force()
    .nodes(nodes)
    .links(links)
    .gravity(0)
    .size([width, height])
    .linkDistance(0)
    .linkStrength(0.09)
    .friction(0.9)
    .charge(function(d, i){ return d.charge })
}

Links = function(nodes, foci) {
  return nodes.map(function(node) {
    return { source : node, target : foci }
  })
}

Foci = function(x, y, name) {
    return { x : x, y : y, charge : 0, fixed : true, continent : name }
} 

function deleteFLayoutChart(newVizType) {
  deleteSPlotChart(newVizType);
}

function updateFLayoutChart() {

  updateChart();
  force.start();  
}

function drawFLayoutChart() {

  drawChartWithoutTransition();
  force.start()
}