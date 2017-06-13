'use strict';

var total = 0;

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
      storename.push(this.name);
      console.log(cookie);
      total += cookie;
    }
  };
}

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3, []);
firstAndPike.getCookiesPerHour();
// total = 0;
// var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, []);
// seaTacAirport.getCookiesPerHour();
// render(seaTacAirport);
// total = 0;
// var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7, []);
// seattleCenter.getCookiesPerHour();
// render(seattleCenter);
// total = 0;
// var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3, []);
// capitolHill.getCookiesPerHour();
// render(capitolHill);
// total = 0;
// var alki = new CookieStore('Alki', 2, 16, 4.6, []);
// alki.getCookiesPerHour();
// render(alki);

var parentEl = document.getElementById('salmonCookies');

var table = document.createElement('table');
parentEl.appendChild(table);

var tr1 = document.createElement('tr');
table.appendChild(tr1);

var thempty = document.createElement('th');
tr1.appendChild(thempty);

for (var x = 0; x < cookiesPerHour.length; x++) {
  var th = document.createElement('th');
  th.textContent = storename[x];
  tr1.appendChild(th);
  if (x < 6) {
    th.textContent = x + 6 + ':00am';
  } else if (x > 6) {
    th.textContent = x - 6 + ':00pm';
  } else if (x == 16) {
    th.textContent = 'Daily Location Total';
  } else {
    th.textContent = x + 6 + ':00pm';
  }
}

// function render(storename) {
//
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//
//   var td1 = document.createElement('td');
//   td1.textContent = storename.name;
//
//   for (var x = 0; x < storename.cookiesPerHour.length; x++) {
//     var td = document.createElement('td');
//     td.textContent = storename.cookiesPerHour[x];
//     table.appendChild(td);
//     if (x < 6) {
//       td.textContent = storename.cookiesPerHour[x] + ' cookies';
//     } else if (x > 6) {
//       td.textContent = storename.cookiesPerHour[x] + ' cookies';
//     } else {
//       td.textContent = storename.cookiesPerHour[x] + ' cookies';
//     }
//   }
//   render(firstAndPike);
//
//
//
//   li = document.createElement('li');
//   li.textContent = 'Total: ' + total + ' cookies';
//   ul.appendChild(li);
// }
