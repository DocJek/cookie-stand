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
    for (var i = 0; i < 14; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      var total = 0;
      total += cookie;
      console.log(total);
    }
  };
  storename.push(this);
}

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
var hourlyTotal = new CookieStore('Hourly Total', null, null, null, []);


var parentEl = document.getElementById('salmonCookies');

var table = document.createElement('table');
parentEl.appendChild(table);

var tr1 = document.createElement('tr');
table.appendChild(tr1);

var thempty = document.createElement('th');
tr1.appendChild(thempty);


// for (var storeList = 0; storeList < storename.length; storeList++) {
//   console.log(storeList);
for (var x = 0; x < storename[0].cookiesPerHour.length; x++) {
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
// for hourly totals, need each index of every cookiesPerHour array added to the corresponding index of each array


var storeTotal = document.createElement('th');
tr1.appendChild(storeTotal);
storeTotal.textContent = 'Daily Store Totals';

function render(storename) {
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = storename.name;
  for (var x = 0; x < storename.cookiesPerHour.length + 1; x++) {
    var td = document.createElement('td');
    td.textContent = storename.cookiesPerHour[x];
    tr.appendChild(td);
    if (x < 6) {
      td.textContent = storename.cookiesPerHour[x];
    } else if (x > 6) {
      td.textContent = storename.cookiesPerHour[x];
    } else if (x == 15) {
      td.textContent = storename.total[x];
    } else {
      td.textContent = storename.cookiesPerHour[x];
    }
  }
}
render(firstAndPike);
render(seaTacAirport);
render(seattleCenter);
render(capitolHill);
render(alki);
render(hourlyTotal);

// var bottomRow = document.createElement('tr');
// table.appendChild(tr);
// var hourlyTotals = document.createElement('td');
// bottomRow.appendChild(td);
// hourlyTotals.textContent = 'Total per hour';



// li = document.createElement('li');
// li.textContent = 'Total: ' + total + ' cookies';
// ul.appendChild(li);
