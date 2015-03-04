//Functions associated with updating, drawing and deleting a circular layout chart 

yCLayoutTransitionFunction = function(d,i) {

  if(d.y < height/2)
    return startY;
  else
    return endY;
}

function deleteCLayoutChart(newVizType) {

  d3.selectAll("text")
    .transition()
    .duration(tDuration)
    .attr("y", yCLayoutTransitionFunction);         
      
  d3.selectAll("circle")
    .transition()
    .duration(tDuration)
    .attr("cy", yCLayoutTransitionFunction)
    .call(endall, function() {

      initSvg(newVizType);
    });

}

function updateCLayoutChart() {

  gTexts.selectAll("text")
    .transition()
    .duration(tDuration)
    .attr("x", function(d) { return (d.x+textHeight/2) })      
    .attr("y", function(d) { return d.y });

  
  gCircles.selectAll("circle")
    .transition()
    .duration(tDuration)
    .attr("cx", function(d) { return d.x })    
    .attr("cy", function(d) { return (d.y-textHeight/2) });
}

function drawCLayoutChart() {

  gTexts
    .selectAll("text")
    .data(graph.nodes)
    .enter()
    .append("text")
    .text( function(d) { return d.name })
    .attr("x", function(d) { return (d.x+textHeight/2) })  
    .attr("y", yCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("y", function(d) { return d.y });

  gCircles
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", textHeight/2)          
    .attr("cx", function(d) { return d.x })
    .attr("cy", yCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("cy", function(d) { return (d.y-textHeight/2) });
}