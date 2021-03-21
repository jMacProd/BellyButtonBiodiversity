// Use the D3 library to read in `samples.json`.
var url = 'data/samples.json'

d3.json(url).then(function(data) {
  console.log("Full Data")
  console.log(data)
});

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */

// function unpack(rows, index) {
//   return rows.map(function(row) {
//   return row[index];
//   });
// }




//create drop down
//create array of ids for drop down

function idarray() {
  d3.json(url).then(function(data) {
    //create array of ids for drop down 
    var samplelist = data.samples;
    console.log("Isolating 'samples' array")
    console.log(samplelist)
    var idlist = []
    samplelist.forEach(function(user) {idlist.push(user.id);});
    console.log("Array if IDs")
    console.log(idlist)

    //Create options for dropdown list
    d3.select('#selDataset').append('option').attr('value', "").text('Select');
    idlist.forEach((item) => {
      d3.select('#selDataset')
          .append("option")
          //.attr("id", `${idlist}`)
          .attr("value", item)
          .text(item);
    });
   
  });
} 
idarray()

//////////////////////////////////Listening event

//Reference the button id
//var button = d3.select("#filter-btn");
//var resetbutton = button.text("Reset Table");

//Reference the input field id
var form = d3.select("#selDataset");
//<select id="selDataset" onchange="optionChanged(this.value)"></select>

// Create event handlers for clicking the button or pressing the enter key
//button.on("click", runEnter);
form.on("change",runEnter);
//button.on("click", reset);



////////////////////////////////////////////
//Collect drop down value
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  console.log('Filters:')
  console.log('--------')
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#selDataset");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
}
  
//Create a horizontal bar chart with a dropdown menu to display
//the top 10 OTUs found in that individual.


// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.




  // just for testing
//getMonthlyData ()




// Create a bubble chart that displays each sample.

// * Use `otu_ids` for the x values.

// * Use `sample_values` for the y values.

// * Use `sample_values` for the marker size.

// * Use `otu_ids` for the marker colors.

// * Use `otu_labels` for the text values.





//Display the sample metadata, i.e., an individual's demographic information.



// Display each key-value pair from the metadata JSON object somewhere on the page.




// Update all of the plots any time that a new sample is selected.


//ADvanced
// Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

// * You will need to modify the example gauge code to account for values ranging from 0 through 9.

// * Update the chart whenever a new sample is selected.

