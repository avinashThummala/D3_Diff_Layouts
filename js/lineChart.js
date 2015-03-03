//Functions associated with updating, drawing and deleting a line chart 

function modifyLineNodeValues() {

  graph.nodes.map(function(d,i){

    d.x = getDocWidth()/2;

    if(lineNonE)
      d.y = yScale(d[lineNonEParam]);
    else
      d.y = textSpacing*(i+1)+textHeight*i;    
  })

}

yLineTransitionFunction = function(d,i) { 

  if(i < (graph.nodes.length/2))
    return startY;
  else
    return endY;
}

function deleteLineChart(newVizType) {

  console.log("Into Delete Line Chart");          

  d3.selectAll("text")
    .transition()
    .delay(function (d, i) { 

      if( i<(graph.nodes.length/2) )
        return i*nTime*100 
      else
        return (graph.nodes.length-i)*nTime*100
    })                         
    .attr("y", function(d,i) { 

      if(i < (graph.nodes.length/2))
      {
        d.y = startY;
        return startY;
      }
      else
      {
        d.y = endY;
        return endY;
      }

    });
      
  d3.selectAll("circle")
    .transition()
    .delay(function (d, i) { 

      if( i<(graph.nodes.length/2) )
        return i*nTime*100 
      else
        return (graph.nodes.length-i)*nTime*100
    })
    .attr("cy", function(d,i) { 

      if(i < (graph.nodes.length/2))
      {
        d.y = startY;
        return startY;
      }
      else
      {
        d.y = endY;
        return endY;
      }

    })
    .call(endall, function() {

      initSvg(newVizType);
    });

}

function updateLineChart() {

  console.log("Into Update Line Chart");

  modifyLineNodeValues();
  updateChart();    

  console.log(graph.nodes);
}

function drawLineChart() {

  console.log("Into Draw Line Chart");

  modifyLineNodeValues();
  drawChartWithTransitionDelay(yLineTransitionFunction)

  console.log(graph.nodes);
}