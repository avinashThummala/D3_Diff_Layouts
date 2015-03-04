//Functions associated with updating, drawing and deleting a circular layout chart with connections

function mouseAwayFromNode(node) {

  d3.selectAll("line")    
    .attr("class", "halfOLine");

  d3.selectAll("circle")
    .attr("class", "targetCircle");

  d3.selectAll("text")
    .attr("class", "fullOText");    

}

function mouseOnNode(node) {

  var sourceId=node.country_id, targetIds=linkedGraphIntDict[sourceId];

  d3.selectAll("line")    
    .attr("class", function(d){

      if(d.source.country_id == sourceId)
        return "fullOLine";
      else
        return "halfOLine";
    });    

  d3.selectAll("circle")
    .attr("class", function(d){

      if(d.country_id==sourceId)
        return "sourceCircle";
      
      else if(targetIds.indexOf(d.country_id)>=0)
        return "targetCircle";

      else
        return "otherCircle";
    })

  d3.selectAll("text")
    .attr("class", function(d){

      if(d.country_id==sourceId)
        return "fullOText";
      
      else if(targetIds.indexOf(d.country_id)>=0)
        return "fullOText";

      else
        return "halfOText";
    })    

}

function deleteCCLayoutChart(newVizType) {

  console.log("Into Delete CCLayout Chart");

  d3.selectAll("line")
    .remove();

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

function addLines() {

  console.log("Into add lines");

  gLines
    .selectAll("line")
    .data(linkedGraph.links)
    .enter()
    .append("line")
    .attr("class", "halfOLine")
    .attr("x1", function(d){ return d.source.x } )
    .attr("y1", function(d){ return (d.source.y-textHeight/2) } )
    .attr("x2", function(d){ return d.target.x } )
    .attr("y2", function(d){ return (d.target.y-textHeight/2) } )
}

function drawCCLayoutChart() {

  console.log("Into Draw CCLayout Chart");                        

  gTexts
    .selectAll("text")
    .data(linkedGraph.nodes)
    .enter()
    .append("text")
    .attr("class", "fullOText")
    .on("mouseover", mouseOnNode)
    .on("mouseout", mouseAwayFromNode)     
    .text( function(d) { return d.name })     
    .attr("x", function(d) { return (d.x+textHeight/2) })  
    .attr("y", yCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("y", function(d) { return d.y })  
    .call(endall, function() {

      addLines();
    });

  gCircles
    .selectAll("circle")
    .data(linkedGraph.nodes)
    .enter()
    .append("circle")
    .attr("class", "targetCircle")
    .on("mouseover", mouseOnNode)
    .on("mouseout", mouseAwayFromNode)    
    .attr("r", textHeight/2)          
    .attr("cx", function(d) { return d.x })
    .attr("cy", yCLayoutTransitionFunction)
    .transition()
    .duration(tDuration)
    .attr("cy", function(d) { return (d.y-textHeight/2) });    

  console.log(linkedGraph.nodes);

}