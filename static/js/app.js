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
    console.log("Array of IDs")
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

  //console.log('Filter:')
  
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#selDataset");
  var inputValue = inputElement.property("value");
  console.log(`Filter: ${inputValue}`);
  console.log('--------')

  //RUN SOME SORT OF FUNCTION WITH THE INPUT VALUE
}

function bararrys() {

  d3.json(url).then(function(data) {
    //create array of sample_values
    var samplelist = data.samples;
    console.log("ANOTHER Isolating 'samples' array")
    console.log(samplelist)

    //Need to pick one object in Samples array
    // if (samplelist[0].id === '940') {
    //   console.log(samplelist[0])
    //   return(samplelist[0]);
    // }
    // else(
    //   console.log('Not equal')
    //)
    
    //get first ten values of sample value
    //get first ten values of otu_ids
    //get first ten values ofotu_labels
    if (samplelist[0].id === '940') {
      var idnumber = samplelist[0].id;
      console.log(`ID number: ${idnumber}`);

      var otuids = samplelist[0].otu_ids;
      console.log('OTU IDs');
      console.log(otuids);

      var samplevalues = samplelist[0].sample_values;
      console.log('Sample Values');
      console.log(samplevalues);

      var otulables = samplelist[0].otu_labels;
      console.log('OTU LABELS');
      console.log(otulables);
      //return(samplelist[0]);
    }
    else{
      console.log('Not equal');
    }

    otuidsten = otuids.slice(0,10)
    console.log('OTU Ids Top Ten')
    console.log(otuidsten)

    samplevaluesten = samplevalues.slice(0,10)
    console.log('Sample Values Top Ten')
    console.log(samplevaluesten)

    otulablesten = otulables.slice(0,10)
    console.log('OTU Labels Top Ten')
    console.log(otulablesten)

    // var samplevaluelist = []
    // samplelist.forEach(function(user) {samplevaluelist.push(user.sample_values);});
    // console.log("Array of all sample values")
    // console.log(samplevaluelist)

    // //pick one array
    // One

    
    
    
    
    // samplevalueten = samplevaluelist.slice(0,10);
    // console.log("Top ten sample values")
    // console.log(samplevalueten)



   
  });
} 
bararrys()

  
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

