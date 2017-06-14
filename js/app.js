'use strict';

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var storename = [];
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
      console.log(cookie);
      total += cookie;
      console.log(total);
    }
    this.cookiesPerHour.push(total);
  };
  storename.push(this);
}

var parentEl = document.getElementById('salmonCookies');
var table = document.createElement('table');
var tr1 = document.createElement('tr');
var thempty = document.createElement('th');

tr1.appendChild(thempty);
table.appendChild(tr1);
parentEl.appendChild(table);


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
// for hourly totals, need each index of every cookiesPerHour array added to the corresponding index of each array

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

function tableFooter() {
  var tfoot = document.createElement('tfoot');
  tfoot.id = 'hourlyTotals';
  table.appendChild(tfoot);
  var td1 = document.createElement('td');
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.appendChild(td1);
  td1.textContent = 'Hourly Totals';
  for (var x = 0; x < 14 + 1; x++) {
    var td = document.createElement('td');
    tr.appendChild(td);
  }
}

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

tableHeader();
render(firstAndPike);
render(seaTacAirport);
render(seattleCenter);
render(capitolHill);
render(alki);
tableFooter();

var storeTotal = document.createElement('th');
tr1.appendChild(storeTotal);
storeTotal.textContent = 'Daily Store Totals';
