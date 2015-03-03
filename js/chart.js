function updateChart()  
{
  d3.selectAll("text")          
    .transition()
    .duration(tDuration)
    .attr("x", function(d){return d.x} )
    .attr("y", function(d){return d.y} );

  d3.selectAll("circle")
    .transition()
    .duration(tDuration)          
    .attr("r", textHeight/2)          
    .attr("cx", function(d){return d.x-textHeight/2} )
    .attr("cy", function(d){return d.y-textHeight/2} );
}

function drawChartWithoutTransition()
{
  gTexts
    .selectAll("text")
    .data(graph.nodes)
    .enter()
    .append("text")
    .text( function(d) { return d.name })
    .attr("x", function(d){ return d.x })
    .attr("y", function(d) { return d.y });

  gCircles
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", textHeight/2)          
    .attr("cx", function(d){ return d.x-textHeight/2 })
    .attr("cy", function(d) { return d.y-textHeight/2 });
}

function drawChartWithTransitionDuration(yTransitionFunction)
{
  gTexts
    .selectAll("text")
    .data(graph.nodes)
    .enter()
    .append("text")
    .text( function(d) { return d.name })
    .attr("x", function(d){ return d.x })
    .attr("y", yTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("y", function(d) { return d.y });

  gCircles
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", textHeight/2)          
    .attr("cx", function(d){ return d.x-textHeight/2 })
    .attr("cy", yTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("cy", function(d) { return d.y-textHeight/2 });
}

function drawChartWithTransitionDelay(yTransitionFunction)
{
  gTexts
    .selectAll("text")
    .data(graph.nodes)
    .enter()
    .append("text")
    .text( function(d) { return d.name })
    .attr("x", function(d){ return d.x })
    .attr("y", yTransitionFunction)
    .transition()
    .delay(function (d, i) { return Math.abs(graph.nodes.length/2-i)*nTime*100;} )                         
    .attr("y", function(d) { return d.y });

  gCircles
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", textHeight/2)          
    .attr("cx", function(d){ return d.x-textHeight/2 })
    .attr("cy", yTransitionFunction)
    .transition()
    .delay(function (d, i) { return Math.abs(graph.nodes.length/2-i)*nTime*100;} )                         
    .attr("cy", function(d) { return d.y-textHeight/2 });
}    