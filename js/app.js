var hackerSpaceArray = [];
var reviewCriteriaArray = ['booze', 'coffee', 'space', 'reviews', 'affordability', 'hours', 'wifi'];
var indexID = document.getElementById('indexID');
var inputID = document.getElementById('inputID');

var mapID = document.getElementById('iframe-map');
var mapDivID = document.getElementById('iframe-container');

var googleHider = document.getElementsByClassName('google-hider')[0];
var mapTip = document.getElementsByClassName('click-to-interact')[0];

function killMapScroll(){
  mapID.classList.add('kill-scroll');
};

function removeKillScroll(){
  mapID.classList.remove('kill-scroll');
  googleHider.classList.add('google-hider-be-gone');
  mapTip.classList.add('map-tip-be-gone');
};

function returnKillScroll(){
  googleHider.classList.remove('google-hider-be-gone');
  mapTip.classList.remove('map-tip-be-gone');
  killMapScroll();
};

function hideMapTip(){
  mapTip.classList.add('map-tip-be-gone');
  mapID.classList.remove('kill-scroll');
  googleHider.classList.add('google-hider-be-gone');
}

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

new HackerSpace('Code Fellows', '2901 3rd Ave, Seattle, WA 98121', 'http://www.codefellows.org/').addRatings(3, 2.9, 5, 4.4, 4.5, 3.8, 3.2);
new HackerSpace('Uptown Expresso', '2504 4th Ave, Seattle, WA 98121', 'http://www.velvetfoam.com/').addRatings(0, 4.7, 4.8, 4.3, 2.8, 4.0, 4.7);
new HackerSpace('Street Bean Coffee', '2711 3rd Ave, Seattle, WA 98121', 'http://streetbeanespresso.org/').addRatings(0, 4.8, 2.5, 4.7, 4.1, 3.3, 4.0);
new HackerSpace('Buckleys', '232 1st Ave W, Seattle, WA 98119',	'http://www.buckleyspubs.com/home-qa.html').addRatings(4.4, 1, 2.7, 4.2, 4.4, 3.9, 3.3);
new HackerSpace('The 5 Point Cafe', '415 Cedar Street, Seattle, WA 98121', 'http://the5pointcafe.com/').addRatings(4.3, 1.2, 2.1, 3.9, 4.8, 5.0, 4.0);
new HackerSpace('Holy Cannoli', '2720 3rd Ave, Seattle, WA 98121', 'http://www.holycannoliseattle.com/').addRatings(0, 5.0, 1.0, 4.5, 4.1, 2.8, 3.4);
new HackerSpace('Tilikum Place Cafe', 'Tilikum Place Cafe', 'http://www.tilikumplacecafe.com/').addRatings(4.6, 4.4, 1.9, 4.3, 3.7, 3.5, 1.0);
new HackerSpace('Cherry Street Coffee House', '2719 1st Ave, Seattle, WA 98121', 'http://cherryst.com/').addRatings(0, 4.3, 3.0, 4.0, 4.5, 3.6, 4.2);
new HackerSpace('Drip City', '2929 1st Ave, Seattle, WA 98121', 'http://dripcitycoffee.com/').addRatings(3.5, 4.8, 4.5, 4.8, 4.4, 3.8, 4.8);
new HackerSpace('Starbucks Denny Triangle', '521 Wall St, Seatt,e WA 98121', 'http://www.starbucks.com/store/114075/us/city-university/521-wall-st-seattle-wa-98121').addRatings(0, 4.2, 4, 4.2, 4.5, 3.9, 4.8);

new HackerSpace('Honor Coffee & Tea', '100 4th Ave N Seattle, WA 98109', 'http://www.honorcoffee.com/').addRatings(0, 4.4, 3.9, 4.4, 4.2, 3.8, 4.7);
new HackerSpace('Artisan Coffee', '2523 5th Ave Seattle, WA 98121', 'http://www.artisancafeonvine.com/').addRatings(0, 4.3, 4.0, 4.4, 4.4, 3.5, 4.5);
new HackerSpace('Bedlam Coffee', '2231 2nd Ave. Seattle, WA 98121', 'http://www.bedlamcoffee.com/').addRatings(0, 4.4, 4.5, 4.3, 4.3, 4.0, 4.4);
new HackerSpace('Caffee Zingaro', '127 Mercer St. Seattle, WA 98109',	'https://www.yelp.com/biz/caffe-zingaro-seattle-3').addRatings(0, 4.5, 4.3, 4.4, 4.4, 3.7, 4.5);
new HackerSpace('Mamnoon Street', '2020 6th Ave, Seattle, WA 98121', 'http://www.mamnoonstreet.com').addRatings(4.5, 4.3, 4.3, 4.5, 3.9, 3.4, 4.2);
new HackerSpace('Espresso Elegance', '122 Elliott Ave W. Seattle, WA 98119', 'http://www.espressoelegance.com').addRatings(0, 4.2, 4.4, 4.3, 4.4, 3.4, 4.3);
new HackerSpace('Just Crepes', '2502 5th Ave. Seattle, WA 98121', 'https://www.yelp.com/biz/just-crepes-seattle').addRatings(0, 4.2, 3.9, 3.7, 4.5, 3.7, 4.2);
new HackerSpace('The Seattle Grind', '516 Harrison St. Seattle, WA 98109', 'http://www.theseattlegrind.com/').addRatings(0, 4.3, 3.8, 4.0, 4.5, 3.6, 3.9);
new HackerSpace('Some Random Bar', '2604 1st Ave Seatt,e WA 98121', 'http://www.somerandombar.com').addRatings(4.6, 3.9, 3.6, 4.7, 4.5, 3.7, 3.8);
new HackerSpace('Olympic Sculpture Park', '2901 Western Ave. Seattle, WA 98121', 'http://www.seattleartmuseum.org/visit/olympic-sculpture-park').addRatings(0, 0, 3.5, 4.8, 0, 3.8, 4.2);

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

getInputFromLocalStorage();

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
  var scoreHackZone1 = 0;
  var scoreHackZone2 = 0;
  for (i = 0; i < reviewCriteriaArray.length; i++) {
    scoreHackZone1 += dropDownName1[reviewCriteriaArray[i]];
    scoreHackZone2 += dropDownName2[reviewCriteriaArray[i]];
  }

  if (scoreHackZone1 >= scoreHackZone2) {
    var winner = dropDownName1;
  } else {
    winner = dropDownName2;
  }

  var elWinnerStatement = document.createElement('p');
  var winnerStatement = 'The winner is: ' + winner.name + ' with the top score! ';
  elWinnerStatement.textContent = winnerStatement;
  elChartDiv.appendChild(elWinnerStatement);
  var elWinnerLink = document.createElement('a');
  elWinnerLink.setAttribute('href', winner.website);
  elWinnerLink.textContent = 'Get More Info!';
  elChartDiv.appendChild(elWinnerLink);
  console.log('elWinnerStatement ', elWinnerStatement);

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
<<<<<<< HEAD
  var myRadarChart = new Chart(ctx).Radar(data);
=======

  var myRadarChart = new Chart(ctx).Radar(data, options);

  console.log(hackerSpaceArray, ' arrayed data');
  console.log(localArray, ' local array');
>>>>>>> 4d1b53294d01229e17278cd793d42c884f1f73cf

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

<<<<<<< HEAD
=======
mapDivID.addEventListener('click', removeKillScroll);
mapDivID.addEventListener('mouseleave', returnKillScroll);
mapTip.addEventListener('click', hideMapTip);

>>>>>>> 4d1b53294d01229e17278cd793d42c884f1f73cf
function getInputFromLocalStorage(){
  var updatedHackerSpaceArray = JSON.parse(localStorage.getItem('updatedHackerSpaceArray'));
  if (updatedHackerSpaceArray){
    hackerSpaceArray = updatedHackerSpaceArray;
  }
}
