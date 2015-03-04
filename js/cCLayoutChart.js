//Functions associated with updating, drawing and deleting a circular layout chart with connections

yCCLayoutTransitionFunction = function(d,i) {

  if(d.y < height/2)
    return startY;
  else
    return endY;
}

function deleteCCLayoutChart(newVizType) {

  console.log("Into Delete CCLayout Chart");        

  d3.selectAll("text")
    .transition()
    .duration(tDuration)
    .attr("y", yCCLayoutTransitionFunction);         
      
  d3.selectAll("circle")
    .transition()
    .duration(tDuration)
    .attr("cy", yCCLayoutTransitionFunction)
    .call(endall, function() {

      initSvg(newVizType);
    });

}

function drawCCLayoutChart() {

  console.log("Into Draw CCLayout Chart");                        

  gTexts
    .selectAll("text")
    .data(linkedGraph.nodes)
    .enter()
    .append("text")
    .text( function(d) { return d.name })
    .attr("x", function(d) { return (d.x+textHeight/2) })  
    .attr("y", yCCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("y", function(d) { return d.y });

  gCircles
    .selectAll("circle")
    .data(linkedGraph.nodes)
    .enter()
    .append("circle")
    .attr("r", textHeight/2)          
    .attr("cx", function(d) { return d.x })
    .attr("cy", yCCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("cy", function(d) { return (d.y-textHeight/2) });

  console.log(linkedGraph.nodes);

}