//Scatter plot draw related functions

function modifySPlotNodeValues() {

  graph.nodes.map(function(d,i){

    d.x = xScale(d[xParam]);
    d.y = yScale(d[yParam]);

  })

}

ySPlotTransitionFunction = function(d,i) { 

  if(d.y < (height/2))
    return startY;
  else
    return endY;
}

function deleteSPlotChart(newVizType) {

  d3.selectAll("text")
    .transition()
    .duration(tDuration)
    .attr("y", ySPlotTransitionFunction);         
      
  d3.selectAll("circle")
    .transition()
    .duration(tDuration)
    .attr("cy", ySPlotTransitionFunction)
    .call(endall, function() {

      initSvg(newVizType);
    });

}

function updateSPlotChart() {

  modifySPlotNodeValues();
  updateChart();
}

function drawSPlotChart() {

  modifySPlotNodeValues();
  drawChartWithTransitionDuration(ySPlotTransitionFunction);    
}