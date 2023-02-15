'use strict';
// ********** GLOBALS **************

let hourlyTotals = document.getElementById('hourly-totals');

let cookieList = []; //store all cookie info

//  ********** CONSTRUCTOR FUNCTION *********
function Cookierun(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.custEachHour = [];
  this.totalCookies = 0;

}

function generateCustomers (min, max)
// got this from MDN docs
{
  return( Math.floor(Math.random() * (max - min + 1) + min));

}



let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// ********** HELPER FUNCTIONS/UTILITES *********
Cookierun.prototype.generateCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    // const customerNumber = this.generateCustomers();
    let numberOfCookies = Math.round(this.generateCust() * this.avgCookieBought);
    this.cookiesBought.push(numberOfCookies);
    console.log();
    this.totalCookies += numberOfCookies;
  }
},


Cookierun.prototype.generateCust = function (){
  return generateCustomers(this.minCust,this.maxCust);


};


function tableheader(){
  let theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let row1 = document.createElement('tr');
  theadElem.appendChild(row1);

  let tdElement = document.createElement('td');
  tdElement.textContent = '';
  row1.appendChild(tdElement);

  for (let i = 0; i < hours.length; i++){
    let locationHours = document.createElement('th');
    locationHours.textContent = hours[i];
    row1.appendChild(locationHours);
  }
  let locationTotals = document.createElement('th');
  locationTotals.textContent = 'Daily Location Total';
  row1.appendChild(locationTotals);

}


function tablefooter(){
  let tfootElem = document.createElement('tfoot');
  table.appendChild(tfootElem);

  let hoursTotal = document.createElement('td');
  hoursTotal.textContent = 'Total';
  tfootElem.appendChild(hoursTotal);
  let totalofTotals=0;

  for (let i = 0; i < hours.length; i++){

    let Total=0;
    for(let j=0; j < cookieList.length; j++){
      Total+=cookieList[j].cookiesBought[i];
      totalofTotals+=cookieList[j].cookiesBought[i];

    }
    console.log(cookieList);
    let tfootElem2 = document.createElement('td');
    tfootElem2.textContent = Total;
    tfootElem.appendChild(tfootElem2);
  }
  let tfootElem2 = document.createElement('td');
  tfootElem2.textContent = totalofTotals;
  tfootElem.appendChild(tfootElem2);

}



//******** PROTOTYPE METHODS **********
let table = document.getElementById('tablelm');
let tablebody = document.createElement('tbody');
table.appendChild(tablebody);

Cookierun.prototype.render = function () {
  this.generateCookies();
  
  
  // **** TABLE RENDERING ****** table, rows, table cells

  
  let row1 = document.createElement('tr');
  tablebody.appendChild(row1);
  
  let locationName = document.createElement('td');
  locationName.textContent = this.name;
  row1.appendChild(locationName);

  
  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesBought[i];
    row1.appendChild(tdElem);


  }

  let locationTotals = document.createElement('td');
  locationTotals.textContent = this.totalCookies;
  row1.appendChild(locationTotals);
};



// ********** EXECUTABLE CODE **********
let seattle = new Cookierun('Seattle', 23, 65, 6.3);
let tokyo = new Cookierun('Tokyo', 3, 24, 1.2);
let dubai = new Cookierun('Dubai', 11, 38, 3.7);
let paris = new Cookierun('Paris', 20 , 38, 2.3);
let lima = new Cookierun('Lima', 2,16,4.6);

cookieList.push(seattle,tokyo,dubai,paris,lima);


console.log(cookieList);

function renderAll(){{
  for(let i=0; i < cookieList.length; i++){
    cookieList[i].generateCookies();
    cookieList[i].render();

  }

}
}
tableheader();
renderAll();
tablefooter();
// ********** OBJECT LITERALS **********
// let articleElem = document.createElement('article')
// hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//      h2Elem.textContent = this.name;
//      articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   totalCookies: 0,
//   liItems: 'cookies',

//   generateCookies: function (){
//     for(let i=0; i < hours.length; i++){
//       const customerNumber = this.generateCustomers();
//       let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
//       this.cookiesBought.push(numberOfCookies);
//       this.totalCookies += numberOfCookies;
//    }
//   },

//   generateCustomers: function (){
//     // got this from MDN docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   // ***** DOM MANIPULATION *****

//   render: function(){

//     let articleElem = document.createElement('article');
//     hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     ulElem.appendChild(liElem);
//   }
// };

// seattle.generateCookies();
// seattle.render();


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   totalCookies: 0,

//   generateCookies: function (){
//     for(let i=0; i < hours.length; i++){
//       const customerNumber = this.generateCustomers();
//       let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
//       this.cookiesBought.push(numberOfCookies);
//       this.totalCookies += numberOfCookies;
//     }

//   },

//   generateCustomers: function (){
//     // got this from MDN docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render: function(){

//     let articleElem = document.createElement('article');
//     hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     ulElem.appendChild(liElem);
//   }


// };

// tokyo.generateCookies();
// tokyo.render();
// // console.log(tokyo);


// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   totalCookies: 0,

//   generateCookies: function (){
//     for(let i=0; i < hours.length; i++){
//       const customerNumber = this.generateCustomers();
//       let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
//       this.cookiesBought.push(numberOfCookies);
//       this.totalCookies += numberOfCookies;
//     }

//   },

//   generateCustomers: function (){
//     // got this from MDN docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },


//   render: function(){

//     let articleElem = document.createElement('article');
//     hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     ulElem.appendChild(liElem);
//   }



// };
// dubai.generateCookies();
// dubai.render();

// let paris = {

//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   totalCookies: 0,

//   generateCookies: function (){
//     for(let i=0; i < hours.length; i++){
//       const customerNumber = this.generateCustomers();
//       let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
//       this.cookiesBought.push(numberOfCookies);
//       this.totalCookies += numberOfCookies;
//     }

//   },

//   generateCustomers: function (){
//     // got this from MDN docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render: function(){

//     let articleElem = document.createElement('article');
//     hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     ulElem.appendChild(liElem);
//   }



// };

// paris.generateCookies();
// paris.render();


// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   totalCookies: 0,


//   generateCookies: function (){
//     for(let i=0; i < hours.length; i++){
//       const customerNumber = this.generateCustomers();
//       let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
//       this.cookiesBought.push(numberOfCookies);
//       this.totalCookies += numberOfCookies;
//     }

//   },

//   generateCustomers: function (){
//     // got this from MDN docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render: function(){

//     let articleElem = document.createElement('article');
//     hourlyTotals.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     ulElem.appendChild(liElem);
//   }


// };

// lima.generateCookies();
// lima.render();