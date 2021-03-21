////////////////////////////////////////////////////
//Use the D3 library to read in `samples.json`.

var url = 'data/samples.json'

d3.json(url).then(function(data) {
  console.log("Full Data")
  console.log(data)
});

//Create a horizontal bar chart with a dropdown menu to display
//the top 10 OTUs found in that individual.


// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.

////////////////////////////////////////////////////
//Create initial bar chart
function initbar() {

  d3.json(url).then(function(data) {

    var samplelist = data.samples;
    //console.log("ANOTHER Isolating 'samples' array")
    //console.log(samplelist)

    var idnumber = samplelist[0].id; //console.log(`ID number: ${idnumber}`);
    var otuids = samplelist[0].otu_ids;// console.log('OTU IDs');// console.log(otuids);
    var samplevalues = samplelist[0].sample_values;// console.log('Sample Values');// console.log(samplevalues);
    var otulables = samplelist[0].otu_labels;// console.log('OTU LABELS');// console.log(otulables);

    otuidsten = otuids.slice(0,10) //console.log('OTU Ids Top Ten') console.log(otuidsten)
    var otuidstenRev = otuidsten.reverse();
    otuidstenstring = []
    otuidstenRev.forEach(function(item) {otuidstenstring.push(`OTU ${item}`);});
    samplevaluesten = samplevalues.slice(0,10)// console.log('Sample Values Top Ten')// console.log(samplevaluesten)
    var samplevaluestenRev = samplevaluesten.reverse();
    otulablesten = otulables.slice(0,10)// console.log('OTU Labels Top Ten')// console.log(otulablesten)
    var otulablestenRev = otulablesten.reverse();

    var trace1 = {
      x: samplevaluestenRev,
      y: otuidstenstring,
      type: "bar",
      orientation: 'h',
      text: otulablestenRev,

      //text = otulablestenRev,
      //hoverinfo: 'otulablestenRev'
    };

    var bardata = [trace1];

    var layout = {
      //title: "'Bar' Chart",
      //xaxis: { title: "Drinks"},
      //yaxis: { title: "% of Drinks Ordered"}
      };

    Plotly.newPlot("bar", bardata);
  });
}
initbar()

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



////////////////////////////////////////////////////
//create drop down

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
    i = 0;
    j = 0;
    idlist.forEach((item) => {
      d3.select('#selDataset')
          .append("option")
          //.attr("id", `${idlist}`)
          .attr("id", j++)
          .attr("value", i++)
          .text(item);


    });
   
  });
} 
idarray()

////////////////////////////////////////////////////
//Listening event

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



////////////////////////////////////////////////////
//Collect drop down value
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //console.log('Filter:')
    
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#selDataset");
  var inputValue = inputElement.property("value");
  //var inputtext = inputElement.select("#property("text"); - not working
  console.log(`Filter: (${inputValue})`);
  console.log('--------')

  //Run fucntion to update bar chart
  updatebar(inputValue)
  //Run function to update bubble chart
  updatebubble(inputValue)
  //Run function to update metadata
  updatemeta(inputValue)
  //Run function to update guage
  updategauge (inputValue)
}

////////////////////////////////////////////////////
//Update bar based on filter value
function updatebar(indexnumber) {
  d3.json(url).then(function(data) {
    var samplelist = data.samples;
    
    //Isolate arrays
    var idnumber = samplelist[indexnumber].id; //console.log(`ID number: ${idnumber}`);
    var otuids = samplelist[indexnumber].otu_ids;// console.log('OTU IDs');// console.log(otuids);
    var samplevalues = samplelist[indexnumber].sample_values;// console.log('Sample Values');// console.log(samplevalues);
    var otulables = samplelist[indexnumber].otu_labels;// console.log('OTU LABELS');// console.log(otulables);

    //Isolate top ten and reverse
    otuidsten = otuids.slice(0,10)
    var otuidstenRev = otuidsten.reverse();
    otuidstenstring = []
    otuidstenRev.forEach(function(item) {otuidstenstring.push(`OTU ${item}`);});
    console.log('New OTU Ids Top Ten')
    console.log(otuidstenstring)

    samplevaluesten = samplevalues.slice(0,10)
    var samplevaluestenRev = samplevaluesten.reverse();
    console.log('New Sample Values Top Ten')
    console.log(samplevaluestenRev)

    otulablesten = otulables.slice(0,10)
    var otulablestenRev = otulablesten.reverse();
    console.log('New OTU Labels Top Ten')
    console.log(otulablestenRev)

    var trace1 = {
      x: samplevaluestenRev,
      y: otuidstenstring,
      type: "bar",
      orientation: 'h',
      text: otulablestenRev
    };

    var bardata = [trace1];

    var layout = {
      //title: "'Bar' Chart",
      //xaxis: { title: "Drinks"},
      //yaxis: { title: "% of Drinks Ordered"}
      };

    Plotly.newPlot("bar", bardata);
    //Plotly.restyle("plots", "x", [x]);
  });

}

//THIS WAS TESTING - NO NEED TO KEEP
function bararrys() {

  d3.json(url).then(function(data) {
    //create array of sample_values
    var samplelist = data.samples;
    console.log("ANOTHER Isolating 'samples' array")
    console.log(samplelist)

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

    otuidsten = otuids.slice(0,10);
    otuidstenstr = []
    otuidsten.forEach(function(item) {otuidstenstr.push(`OTU ${item}`);});
    console.log('OTU Ids Top Ten');
    console.log(otuidstenstr);

    samplevaluesten = samplevalues.slice(0,10);
    var samplevaluestenRev = samplevaluesten.reverse();
    console.log('Sample Values Top Ten');
    console.log(samplevaluestenRev);

    otulablesten = otulables.slice(0,10);
    console.log('OTU Labels Top Ten');
    console.log(otulablesten);
   
  });
} 
bararrys()





// Create a bubble chart that displays each sample.

// * Use `otu_ids` for the x values.

// * Use `sample_values` for the y values.

// * Use `sample_values` for the marker size.

// * Use `otu_ids` for the marker colors.

// * Use `otu_labels` for the text values.

////////////////////////////////////////////////////
//Create initial BUBBLE chart
function initbubble() {

  d3.json(url).then(function(data) {

    var samplelist = data.samples;

    var idnumber = samplelist[0].id; //console.log(`ID number: ${idnumber}`);
    var otuids = samplelist[0].otu_ids;// console.log('OTU IDs');// console.log(otuids);
    var samplevalues = samplelist[0].sample_values;// console.log('Sample Values');// console.log(samplevalues);
    var otulables = samplelist[0].otu_labels;// console.log('OTU LABELS');// console.log(otulables);

    var traceA = {
      type: "scatter",
      mode: "markers",
      x: otuids,
      y: samplevalues,
      marker: {
        size: samplevalues,
        sizemode: 'diameter',
        color: otuids,
        colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']]
      },
      text: otulables
    };
     
    var data = [traceA];
     
    var layout = {
      //title: "A Bubble Chart in Plotly"
    };
     
    Plotly.newPlot('bubble', data, layout); 
    
    
 
  });
}
initbubble()

////////////////////////////////////////////////////
//Update Bubble chart
function updatebubble(indexnumber) {

  d3.json(url).then(function(data) {

    var samplelist = data.samples;

    //Isolate arrays
    var idnumber = samplelist[indexnumber].id; //console.log(`ID number: ${idnumber}`);
    var otuids = samplelist[indexnumber].otu_ids;// console.log('OTU IDs');// console.log(otuids);
    var samplevalues = samplelist[indexnumber].sample_values;// console.log('Sample Values');// console.log(samplevalues);
    var otulables = samplelist[indexnumber].otu_labels;// console.log('OTU LABELS');// console.log(otulables);
    
    // var idnumber = samplelist[0].id; //console.log(`ID number: ${idnumber}`);
    // var otuids = samplelist[0].otu_ids;// console.log('OTU IDs');// console.log(otuids);
    // var samplevalues = samplelist[0].sample_values;// console.log('Sample Values');// console.log(samplevalues);
    // var otulables = samplelist[0].otu_labels;// console.log('OTU LABELS');// console.log(otulables);

    var traceA = {
      type: "scatter",
      mode: "markers",
      x: otuids,
      y: samplevalues,
      marker: {
        size: samplevalues,
        sizemode: 'diameter',
        color: otuids,
        colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']]
      },
      text: otulables
    };
     
    var data = [traceA];
     
    var layout = {
      //title: "A Bubble Chart in Plotly"
    };
     
    Plotly.newPlot('bubble', data, layout);
    
    
 
  });
}






////////////////////////////////////////////////////
//Display the sample metadata, i.e., an individual's demographic information.

//div for metadata<div id="sample-metadata" class="panel-body"></div>

// Display each key-value pair from the metadata JSON object somewhere on the page.


function initialmeta () {
  d3.json(url).then(function(data) {

    var metadatalist = data.metadata;
    console.log("Isolating 'metadata' array");
    console.log(metadatalist);

    // var fullindex = Object.entries(metadatalist);
    // console.log(fullindex)

    // var singleobject = Object.entries(metadatalist[0]);
    // console.log(singleobject);

    // var singleindex = Object.entries(metadatalist[0].id);
    // console.log(singleindex);

    var userid = metadatalist[0].id;
    console.log(`id: ${userid}`);

    var usereth = metadatalist[0].ethnicity;
    console.log(`ethnicity: ${usereth}`);

    var usergen = metadatalist[0].gender;
    console.log(`gender: ${usergen}`);

    var userage = metadatalist[0].age;
    console.log(`age: ${userage}`);

    var userloc = metadatalist[0].location;
    console.log(`location: ${userloc}`);

    var useribb = metadatalist[0].bbtype;
    console.log(`bbtype: ${useribb}`);

    var userwf = metadatalist[0].wfreq;
    console.log(`wfreq: ${userwf}`);

    selectmatadata = d3.select('#sample-metadata');
    selectmatadata.append("p").attr("id", "userid").text(`id: ${userid}`);
    selectmatadata.append("p").attr("id", "usereth").text(`ethnicity: ${usereth}`);
    selectmatadata.append("p").attr("id", "usergen").text(`gender: ${usergen}`);
    selectmatadata.append("p").attr("id", "userage").text(`age: ${userage}`);
    selectmatadata.append("p").attr("id", "userloc").text(`location: ${userloc}`);
    selectmatadata.append("p").attr("id", "useribb").text(`bbtype: ${useribb}`);
    selectmatadata.append("p").attr("id", "userwf").text(`wfreq: ${userwf}`)

  }
  );
}



initialmeta()

////////////////////////////////////////////////////
// Update all of the plots any time that a new sample is selected.
function updatemeta(indexnumber) {

  d3.json(url).then(function(data) {

    var metadatalist = data.metadata;
    console.log("Isolating 'metadata' array");
    console.log(metadatalist);

    var userid = metadatalist[indexnumber].id;
    console.log(`id: ${userid}`);

    var usereth = metadatalist[indexnumber].ethnicity;
    console.log(`ethnicity: ${usereth}`);

    var usergen = metadatalist[indexnumber].gender;
    console.log(`gender: ${usergen}`);

    var userage = metadatalist[indexnumber].age;
    console.log(`age: ${userage}`);

    var userloc = metadatalist[indexnumber].location;
    console.log(`location: ${userloc}`);

    var useribb = metadatalist[indexnumber].bbtype;
    console.log(`bbtype: ${useribb}`);

    var userwf = metadatalist[indexnumber].wfreq;
    console.log(`wfreq: ${userwf}`);

    selectmatadata = d3.select('#sample-metadata')
    selectmatadata.select("#userid").text(`id: ${userid}`)
    selectmatadata.select("#usereth").text(`ethnicity: ${usereth}`)
    selectmatadata.select("#usergen").text(`gender: ${usergen}`)
    selectmatadata.select("#userage").text(`age: ${userage}`)
    selectmatadata.select("#userloc").text(`location: ${userloc}`)
    selectmatadata.select("#useribb").text(`bbtype: ${useribb}`)
    selectmatadata.select("#userwf").text(`wfreq: ${userwf}`)

  }
  );

}








//ADvanced
// Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

// * You will need to modify the example gauge code to account for values ranging from 0 through 9.


function initgauge () {

  d3.json(url).then(function(data) {

    var metadatalist = data.metadata;

    var userid = metadatalist[0].id;

    var userwf = metadatalist[0].wfreq;

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: userwf,
        title: { text: "Belly Button Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {
            range: [0,9]
          }
        }

        // gauge: {
        //   "axis": {
        //     "range": [0, 500],
        //     "tickwidth": 1,
        //     "tickcolor": "white"
        //   },
        //   "bgcolor": "rgba(255, 255, 255, 0.25)",
        //   "borderwidth": 2,
        //   "bordercolor": "rgba(255, 255, 255, 0.5)",
        //   "steps": [{
        //     "range": [0, 250],
        //     "color": "rgba(255, 255, 0, 0.5)"
        //   }, {
        //     "range": [250, 400],
        //     "color": "rgba(0, 0, 255, 0.75)"
        //   }],
        //   "threshold": {
        //     "line": {
        //       "color": "rgba(255, 0, 0, 1)",
        //       "width": 4
        //     },
        //     "thickness": 0.75,
        //     "value": 490
        //   }
 
      }
    ];
    
    //var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data);
   

  }
  );

}
initgauge ()


// * Update the chart whenever a new sample is selected.
function updategauge (indexnumber) {

  d3.json(url).then(function(data) {

    var metadatalist = data.metadata;

    var userid = metadatalist[indexnumber].id;

    var userwf = metadatalist[indexnumber].wfreq;

    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: userwf,
        title: { text: "Belly Button Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {
            range: [0,9]
          }
        }
      }
    ];
    
    //var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data);
   

  }
  );

}


