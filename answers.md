**Answer 0.1:**

The final state of the simulation represents an equilibrium wherein the forces on the nodes and the edges part of the graph aren't applicable anymore. A force directed layout is the best option for medium sized graphs if we intend to achieve uniform edge length, uniform vertex distribution and symmetry.

**Answer 0.2:**

Maybe some of the Quantitative visual varaibles like Value, Orientation, Grain, Texture and Motion visual variables can be used as well.

**Answer 0.3:**

In the case of a force directed layout, suppose we associate the 'Value' visual variable with the node's charge, then it affects the entire simulation and it will reach a different equilibrium there by having an effect on the Orientation and Motion visual variables.

**Answer 1.1:**

The absolution position of the nodes sorted by either population or gdp doesn't convey the gulf in the associated values between a set of countries, relative positioning of the nodes on the other hand does.

**Answer 1.2:**

Quantitative data is best displayed with a Scatter Plot. On the other hand, Ordinal data is not. If we have to use an ordinal scale on an axis, then we aren't leveraging the full capabilities of the position visual variable associated with that axis.

**Answer 2.1:**

D3 layouts take data we provide and remap or otherwise transform it, thereby generating new data that is more convenient for a specific visual task. But, it's still up to us to take that new data and generate visuals from it.

The pie layout basically calculates the starting and ending angles of the wedges in radians based on the inner and outer radius of each one of them. The main purpose of the pie layout is to take our data and calculate all those messy angles for us, sparing us from ever having to think about radians.

In order to position our nodes on a circle, we would need values for 'cx' and 'cy'. These values can be obtained quite easily by using a pie layout as mentioned above.

**Answer 3.1:**

<ul>

<li>A Force directed Layout - But, it will rearrange the nodes to reduce the visual clutter.</li>
<li>Concepts used in Flow Map Layout - Geographic distortion, Edge routing, Edge merging</li>
<li>Edge Lens - It can interactively curves graph edges away from their focus of areas without changing the node positions</li>
<li>Edge Plucking - An interactive technique which allows users to temporarily pluck edges apart to clarify node-edge relationships</li>
<li>In some scenarios, 'Node clustering (Grouping etc.)' can be used as well</li>

</ul>