//Functions associated with updating, drawing and deleting a circular layout chart 

yCLayoutTransitionFunction = function(d,i) {

  if(d.y < height/2)
    return startY;
  else
    return endY;
}

function deleteCLayoutChart(newVizType) {

  console.log("Into Delete CLayout Chart");        

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

  console.log("Into Update CLayout Chart");

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

  console.log(graph.nodes);    
}

function drawCLayoutChart() {

  console.log("Into Draw CLayout Chart");                        

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

  console.log(graph.nodes);    

}