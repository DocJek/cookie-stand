'use strict';

// Random number generator for creating.
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial empty array to contain cookie store objects
var storename = [];

// Cookie store object constructor
function CookieStore (name, minCust, maxCust, avgCookieSales, cookiesPerHour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.cookiesPerHour = cookiesPerHour;
  this.getCookiesPerHour = function() {
    var total = 0;
    for (var i = 0; i < 14; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      total += cookie;
    }
    this.cookiesPerHour.push(total);
  };
  storename.push(this);
}

// Initial table build.
var parentEl = document.getElementById('salmonCookies');
var table = document.createElement('table');
var tr1 = document.createElement('tr');
var thempty = document.createElement('th');
tr1.appendChild(thempty);
table.appendChild(tr1);
parentEl.appendChild(table);

// First five cookie stores to be preloaded on sales page upon opening.
var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3, []);
firstAndPike.getCookiesPerHour();
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, []);
seaTacAirport.getCookiesPerHour();
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7, []);
seattleCenter.getCookiesPerHour();
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3, []);
capitolHill.getCookiesPerHour();
var alki = new CookieStore('Alki', 2, 16, 4.6, []);
alki.getCookiesPerHour();

// Builds table header with hours of operation.
function tableHeader () {
  for (var x = 0; x < storename[0].cookiesPerHour.length - 1; x++) {
    var th = document.createElement('th');
    tr1.appendChild(th);
    if (x < 6) {
      th.textContent = x + 6 + ':00am';
    } else if (x > 6) {
      th.textContent = x - 6 + ':00pm';
    } else {
      th.textContent = x + 6 + ':00pm';
    }
  }
}

// Builds table footer with hourly totals for all stores combined.
function tableFooter() {
  var tfoot = document.createElement('tfoot');
  tfoot.id = 'hourlyTotals';
  table.appendChild(tfoot);
  var td1 = document.createElement('td');
  var tr = document.createElement('tr');
  tr.setAttribute('id', 'hourFooter');
  tfoot.appendChild(tr);
  tr.appendChild(td1);
  td1.textContent = 'Hourly Totals';
  for (var x = 0; x < 14; x++) {
    var td = document.createElement('td');
    tr.appendChild(td);
    var hourlyTotals = 0;
    for (var h = 0; h < storename.length; h++) {
      hourlyTotals += storename[h].cookiesPerHour[x];
      td.textContent = hourlyTotals;
    }
  }
}

// Renders each cookie store and sales numbers based on random numbers given in objects.
function render(storename) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = storename.name;
  for (var x = 0; x < storename.cookiesPerHour.length; x++) {
    var td = document.createElement('td');
    td.textContent = storename.cookiesPerHour[x];
    tr.appendChild(td);
    if (x < 6) {
      td.textContent = storename.cookiesPerHour[x];
    } else if (x > 6) {
      td.textContent = storename.cookiesPerHour[x];
    } else {
      td.textContent = storename.cookiesPerHour[x];
    }
  }
}

// Set up of initial table on first load of page.
tableHeader();
render(firstAndPike);
render(seaTacAirport);
render(seattleCenter);
render(capitolHill);
render(alki);
tableFooter();

// Last Daily Total column build.
var storeTotal = document.createElement('th');
tr1.appendChild(storeTotal);
storeTotal.textContent = 'Daily Store Totals';

// When adding new stores, this handler will remove the previous hourly totals row and replace it with an updated version including the new stores sales totals.
var cookieInput = document.getElementById('cookieInput');
cookieInput.addEventListener('submit',
  function (event) {
    event.preventDefault();
    var foot = document.getElementById('hourFooter');
    var name = event.target.name.value;
    if (!isValidName(name)) {
      return null;
    };
    var minCust = parseInt(event.target.minCust.value);
    var maxCust = parseInt(event.target.maxCust.value);
    var avgCookieSales = parseFloat(event.target.avgCookieSales.value);
    var newStore = new CookieStore(name, minCust, maxCust, avgCookieSales, []);
    if (minCust > maxCust) {
      alert('Error: Min cannot be more than Max');
      return;
    }
    foot.parentNode.removeChild(foot);
    newStore.getCookiesPerHour();
    render(newStore);
    tableFooter();
  }
);

// Creates the function to check if name is in existing table and compares both names in lowercase.
storename.contains = function (name) {
  for (var each in storename) {
    var store = storename[each].name;
    if (name.toLowerCase() === store.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// Checks if name already exists within current table as shown on screen at any given time.
function isValidName(name) {
  if (storename.contains(name)) {
    alert('Error: That name already exists. Please enter a NEW store name.');
    return;
  } else if (name == '') {
    alert('Please enter a store name.');
    return;
  }
  return true;
}
