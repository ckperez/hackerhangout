var hackerSpaceArray = [];
var reviewCriteriaArray = ['booze', 'coffee', 'space', 'reviews', 'affordability', 'hours', 'wifi'];
var indexID = document.getElementById('indexID');
var inputID = document.getElementById('inputID');


function HackerSpace(name, address, website){
  this.name = name;
  this.address = address;
  this.website = website;
}

HackerSpace.prototype.addRatings = function(booze, coffee, space, reviews, affordability, hours, wifi){
  this.booze = booze;
  this.coffee = coffee;
  this.space = space;
  this.reviews = reviews;
  this.affordability = affordability;
  this.hours = hours;
  this.wifi = wifi;
  hackerSpaceArray.push(this);
};

new HackerSpace('Code Fellows', '2901 3rd Ave, Seattle, WA 98121', 'codefellows.org').addRatings(3, 2.9, 5, 4.4, 4.5, 3.8, 3.2);
new HackerSpace('Uptown Expresso', '2504 4th Ave, Seattle, WA 98121', 'uptownespresso.net').addRatings(0, 4.7, 4.8, 4.3, 2.8, 4.0, 4.7);
new HackerSpace('Street Bean Coffee', '2711 3rd Ave, Seattle, WA 98121', 'streebean.org').addRatings(0, 4.8, 2.5, 4.7, 4.1, 3.3, 4.0);
new HackerSpace('Buckleys', '232 1st Ave W, Seattle, WA 98119',	'buckelyspubs.com').addRatings(4.4, 1, 2.7, 4.2, 4.4, 3.9, 3.3);
new HackerSpace('The 5 Point Cafe', '415 Cedar Street, Seattle, WA 98121', 'the5pointcafe.com').addRatings(4.3, 1.2, 2.1, 3.9, 4.8, 5.0, 4.0);
new HackerSpace('Holy Cannoli', '2720 3rd Ave, Seattle, WA 98121', 'holycannoliseattle.com').addRatings(0, 5.0, 1.0, 4.5, 4.1, 2.8, 3.4);
new HackerSpace('Tilikum Place Cafe', 'Tilikum Place Cafe', 'tilikumplacecafe.com').addRatings(4.6, 4.4, 1.9, 4.3, 3.7, 3.5, 1.0);
new HackerSpace('Cherry Street Coffee House', '2719 1st Ave, Seattle, WA 98121', 'cherryst.com').addRatings(0, 4.3, 3.0, 4.0, 4.5, 3.6, 4.2);
new HackerSpace('Drip City', '2929 1st Ave, Seattle, WA 98121', 'dripcitycoffee.com').addRatings(3.5, 4.8, 4.5, 4.8, 4.4, 3.8, 4.8);
new HackerSpace('Starbucks Denny Triangle', '521 Wall St, Seattle WA 98121', 'starbucks.com').addRatings(0, 4.2, 4, 4.2, 4.5, 3.9, 4.8);
console.log('hackerSpaceArray ', hackerSpaceArray);

var dropdown1 = document.getElementById('hangouts-dropdown-1');
var dropdown2 = document.getElementById('hangouts-dropdown-2');

function addToDropDown(){
  var addedOption ;
  for (var i = 0; i < hackerSpaceArray.length; i++){
    addedOption = document.createElement('option');
    addedOption.setAttribute('value', hackerSpaceArray[i].name);
    addedOption.textContent = hackerSpaceArray[i].name;
    dropdown1.appendChild(addedOption);
  }
  for (var i = 0; i < hackerSpaceArray.length; i++){
    addedOption = document.createElement('option');
    addedOption.setAttribute('value', hackerSpaceArray[i].name);
    addedOption.textContent = hackerSpaceArray[i].name;
    dropdown2.appendChild(addedOption);
  }
};
if (indexID) {
  addToDropDown();
}

function clearBox(elementID) {
  document.getElementById(elementID).textContent = '';
}

function collectComparisonForm(event){
  event.preventDefault();

  clearBox('chart-div');
  var elChartDiv = document.getElementById('chart-div');
  var elCanvas = document.createElement('canvas');
  elCanvas.setAttribute('height', '400');
  elCanvas.setAttribute('width', '400');
  elCanvas.setAttribute('id', 'canvas');
  elChartDiv.appendChild(elCanvas);

  var dropDownName1 = event.target.hangouts.value;
  var dropDownName2 = event.target.hangouts2.value;

  var positivePref = event.target.positivePreference.value;
  var negativePref = event.target.negativePreference.value;

  for (i = 0; i < hackerSpaceArray.length; i++){
    if(dropDownName1 == hackerSpaceArray[i].name){
      dropDownName1 = hackerSpaceArray[i];
      dropDownName1[positivePref] *= 2;
      dropDownName1[negativePref] *= 0.5;
    }
    if(dropDownName2 == hackerSpaceArray[i].name){
      dropDownName2 = hackerSpaceArray[i];
      dropDownName2[positivePref] *= 2;
      dropDownName2[negativePref] *= 0.5;
      console.log(dropDownName2, ' is dropdown name 2');
    }
  }

  var hackerZone1 = new RadarChartData(dropDownName1.name, 'rgba(220, 220, 220, 1)', 'rgba(220, 220, 220, 0.2)');
  hackerZone1.setData(dropDownName1);
  console.log(hackerZone1, ' is hackerZone1');
  var hackerZone2 = new RadarChartData(dropDownName2.name, 'rgba(151, 187, 205, 1)', 'rgba(151, 187, 205, 0.2)');
  hackerZone2.setData(dropDownName2);
  console.log(hackerZone2, 'is hackerZone2');

  // var options = {
  //   legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  // };

  var data = {
    labels: reviewCriteriaArray,
    datasets: [hackerZone1, hackerZone2]
  };
  var ctx = document.getElementById('canvas').getContext('2d');
  var myRadarChart = new Chart(ctx).Radar(data);
  dropDownName1[positivePref] /= 2;
  dropDownName1[negativePref] /= 0.5;
  dropDownName2[positivePref] /= 2;
  dropDownName2[negativePref] /= 0.5;
};

function RadarChartData(labelName, color, colorFill){
  this.label = labelName;
  this.fillColor = colorFill;
  this.strokeColor = color;
  this.pointColor = color;
  this.pointStrokeColor = '#fff';
  this.pointHighlightFill = '#fff';
  this.pointHighlightStroke = color;
  this.data = [];
};

RadarChartData.prototype.setData = function(inputObject){
  for (var i = 0; i < reviewCriteriaArray.length; i++) {
    this.data.push(inputObject[reviewCriteriaArray[i]]);
  }
};

var submitComparisonForm = document.getElementById('chart-form');
if (indexID){
  submitComparisonForm.addEventListener('submit', collectComparisonForm);
}
function getInputFromLocalStorage(){
  var updatedHackerSpaceArray = JSON.parse(localStorage.getItem('updatedHackerSpaceArray'));
  if (updatedHackerSpaceArray){
    hackerSpaceArray = updatedHackerSpaceArray;
  }
}

getInputFromLocalStorage();
