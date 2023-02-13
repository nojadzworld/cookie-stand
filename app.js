'use strict';
// ********** GLOBALS **************

let hourlyTotals = document.getElementById('hourly-totals');

let timeList = document.getElementById('timeList');



let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// ********** HELPER FUNCTIONS/UTILITES *********

// ********** OBJECT LITERALS **********
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  totalCookies: 0,
  liItems: 'cookies',

  generateCookies: function (){
    for(let i=0; i < hours.length; i++){
      const customerNumber = this.generateCustomers();
      let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
      this.cookiesBought.push(numberOfCookies);
      this.totalCookies += numberOfCookies;
    }
  },

  generateCustomers: function (){
    // got this from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  // ***** DOM MANIPULATION *****

  render: function(){

    let articleElem = document.createElement('article');
    hourlyTotals.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBought.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
  }
};

seattle.generateCookies();
seattle.render();


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  totalCookies: 0,

  generateCookies: function (){
    for(let i=0; i < hours.length; i++){
      const customerNumber = this.generateCustomers();
      let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
      this.cookiesBought.push(numberOfCookies);
      this.totalCookies += numberOfCookies;
    }

  },

  generateCustomers: function (){
    // got this from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render: function(){

    let articleElem = document.createElement('article');
    hourlyTotals.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBought.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
  }


};

tokyo.generateCookies();
tokyo.render();
// console.log(tokyo);


let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  totalCookies: 0,

  generateCookies: function (){
    for(let i=0; i < hours.length; i++){
      const customerNumber = this.generateCustomers();
      let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
      this.cookiesBought.push(numberOfCookies);
      this.totalCookies += numberOfCookies;
    }

  },

  generateCustomers: function (){
    // got this from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },


  render: function(){

    let articleElem = document.createElement('article');
    hourlyTotals.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBought.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
  }



};
dubai.generateCookies();
dubai.render();

let paris = {

  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  totalCookies: 0,

  generateCookies: function (){
    for(let i=0; i < hours.length; i++){
      const customerNumber = this.generateCustomers();
      let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
      this.cookiesBought.push(numberOfCookies);
      this.totalCookies += numberOfCookies;
    }

  },

  generateCustomers: function (){
    // got this from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render: function(){

    let articleElem = document.createElement('article');
    hourlyTotals.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBought.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
  }



};

paris.generateCookies();
paris.render();


let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  totalCookies: 0,


  generateCookies: function (){
    for(let i=0; i < hours.length; i++){
      const customerNumber = this.generateCustomers();
      let numberOfCookies = Math.round(customerNumber * this.avgCookieBought);
      this.cookiesBought.push(numberOfCookies);
      this.totalCookies += numberOfCookies;
    }

  },

  generateCustomers: function (){
    // got this from MDN docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render: function(){

    let articleElem = document.createElement('article');
    hourlyTotals.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBought.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] +': ' + this.cookiesBought[i] + ' cookies';
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem);
  }


};

lima.generateCookies();
lima.render();











