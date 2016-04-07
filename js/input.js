var indexID = document.getElementById('indexID');
var inputID = document.getElementById('inputID');
var addReviewButton = document.getElementById('add-review');
var wifiRadioButtons, boozeRadioButtons, coffeeRadioButtons, tableSpaceRadioButtons, hoursRadioButtons, cashMoneyRadioButtons, googleReviewsRadioButtons;
var buttonRows = [];
buttonRows.push(wifiRadioButtons = document.getElementsByName('wi-fi'));
buttonRows.push(boozeRadioButtons = document.getElementsByName('booze'));
buttonRows.push(coffeeRadioButtons = document.getElementsByName('coffee'));
buttonRows.push(tableSpaceRadioButtons = document.getElementsByName('table-space'));
buttonRows.push(hoursRadioButtons = document.getElementsByName('hours'));
buttonRows.push(cashMoneyRadioButtons = document.getElementsByName('cash-money'));
buttonRows.push(googleReviewsRadioButtons = document.getElementsByName('google-review'));

function handleReview(event){
  getInputFromLocalStorage();
  // event.preventDefault();
  var inputName = event.target.businessName.value;
  //console.log('input name = ' + inputName);
  var inputAddress = event.target.address.value;
  var inputWebsite = event.target.website.value;
  var userReviewedLocation = new HackerSpace(inputName, inputAddress, inputWebsite);
  var wifiValue = event.target.wifi.value;
  var boozeValue = event.target.booze.value;
  var coffeeValue = event.target.coffee.value;
  var tableSpaceValue = event.target.tableSpace.value;
  var hoursValue = event.target.hours.value;
  var cashMoneyValue = event.target.cashMoney.value;
  var googleReviewValue = event.target.googleReview.value;
  console.log(userReviewedLocation);
  userReviewedLocation.addRatings(boozeValue, coffeeValue, tableSpaceValue, googleReviewValue, cashMoneyValue, hoursValue, wifiValue);
  console.log(userReviewedLocation);
  saveNewInputToLocalStorage();

};
if (inputID){
  addReviewButton.addEventListener('submit',handleReview);
}

function saveNewInputToLocalStorage(){
  localStorage.setItem('updatedHackerSpaceArray', JSON.stringify(hackerSpaceArray));
}

function getInputFromLocalStorage(){
  var updatedHackerSpaceArray = JSON.parse(localStorage.getItem('updatedHackerSpaceArray'));
  if (updatedHackerSpaceArray){
    hackerSpaceArray = updatedHackerSpaceArray;
  }
}

getInputFromLocalStorage();
