var hackerSpaceArray = [];

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
new HackerSpace('Starbucks Denny Triangle', '521 Wall St, Seatt,e WA 98121', 'starbucks.com').addRatings(0, 4.2, 4, 4.2, 4.5, 3.9, 4.8);

var dropdown1 = document.getElementById('hangounts-dropdown-1');
var dropdown2 = document.getElementById('hangounts-dropdown-2');

function addToDropDown(){
  var addedOption ;
  for (var i = 0; i < hackerSpaceArray.length; i++){
    addedOption = document.createElement('option');
    addedOption.setAttribute('value', hackerSpaceArray[i].website.slice(0,-4));
    addedOption.textContent = hackerSpaceArray[i].name;
    dropdown1.appendChild(addedOption);
  }
  for (var i = 0; i < hackerSpaceArray.length; i++){
    addedOption = document.createElement('option');
    addedOption.setAttribute('value', hackerSpaceArray[i].website.slice(0,-4));
    addedOption.textContent = hackerSpaceArray[i].name;
    dropdown2.appendChild(addedOption);
  }
};

addToDropDown();
