'use strict';

var total = 0;

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],
  getCookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      console.log(cookie);
      total += cookie;
    }
  }
};
firstAndPike.getCookiesPerHour();
// render(firstAndPike);
//
// function render(CookieStore) {
var parentEl = document.getElementById('firstPike');

var article = document.createElement('article');
parentEl.appendChild(article);

var h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = firstAndPike.name;

var ul = document.createElement('ul');
article.appendChild(ul);

for (var x = 0; x < firstAndPike.cookiesPerHour.length; x++) {
  var li = document.createElement('li');
  li.textContent = firstAndPike.cookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + firstAndPike.cookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + firstAndPike.cookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + firstAndPike.cookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + ' cookies';
ul.appendChild(li);
// }

total = 0;

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  cookiesPerHour: [],
  getCookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      console.log(cookie);
      total += cookie;
    }
  }
};

seaTacAirport.getCookiesPerHour();

parentEl = document.getElementById('seaTac');

article = document.createElement('article');
parentEl.appendChild(article);

h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = seaTacAirport.name;

ul = document.createElement('ul');
article.appendChild(ul);

for (x = 0; x < seaTacAirport.cookiesPerHour.length; x++) {
  li = document.createElement('li');
  li.textContent = seaTacAirport.cookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + seaTacAirport.cookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + seaTacAirport.cookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + seaTacAirport.cookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + ' cookies';
ul.appendChild(li);

total = 0;

var seattleCenter = {
  name: 'Seattle Center',
  minCust:11, //fix min and max to match the store name
  maxCust: 38,
  avgCookieSales: 3.7,
  cookiesPerHour: [],
  getCookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      console.log(cookie);
      total += cookie;
    }
  }
};

seattleCenter.getCookiesPerHour();
// correct the rest of this code with the proper parameters for store name and details

// function buildArray1() {

parentEl = document.getElementById('seattleCenter');

article = document.createElement('article');
parentEl.appendChild(article);

h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = seattleCenter.name;

ul = document.createElement('ul');
article.appendChild(ul);

for (x = 0; x < seattleCenter.cookiesPerHour.length; x++) {
  li = document.createElement('li');
  li.textContent = seattleCenter.cookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + seattleCenter.cookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + seattleCenter.cookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + seattleCenter.cookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + ' cookies';
ul.appendChild(li);


total = 0;

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20, //fix min and max to match the store name
  maxCust: 38,
  avgCookieSales: 2.3,
  cookiesPerHour: [],
  getCookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      console.log(cookie);
      total += cookie;
    }
  }
};

capitolHill.getCookiesPerHour();
// correct the rest of this code with the proper parameters for store name and details

// function buildArray1() {

parentEl = document.getElementById('capitolHill');

article = document.createElement('article');
parentEl.appendChild(article);

h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = capitolHill.name;

ul = document.createElement('ul');
article.appendChild(ul);

for (x = 0; x < capitolHill.cookiesPerHour.length; x++) {
  li = document.createElement('li');
  li.textContent = capitolHill.cookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + capitolHill.cookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + capitolHill.cookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + capitolHill.cookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + ' cookies';
ul.appendChild(li);

total = 0;

var alki = {
  name: 'Alki',
  minCust: 2, //fix min and max to match the store name
  maxCust: 16,
  avgCookieSales: 4.6,
  cookiesPerHour: [],
  getCookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHour.push(cookie);
      console.log(cookie);
      total += cookie;
    }
  }
};

alki.getCookiesPerHour();
// correct the rest of this code with the proper parameters for store name and details

// function buildArray1() {

parentEl = document.getElementById('alki');

article = document.createElement('article');
parentEl.appendChild(article);

h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = alki.name;

ul = document.createElement('ul');
article.appendChild(ul);

for (x = 0; x < alki.cookiesPerHour.length; x++) {
  li = document.createElement('li');
  li.textContent = seattleCenter.cookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + alki.cookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + alki.cookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + alki.cookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + ' cookies';
ul.appendChild(li);





// function CookieStore (name, minCust, maxCust, avgCookieSales, custAndCookiesPerHour) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSales = avgCookieSales;
//   this.custAndCookiesPerHour = custAndCookiesPerHour;
//   this.getCookiesPerHour = function() {
//     for (var i = 0; i < 16; i++) {
//       var cookie = Math.floor(randNum(this.minCust, this.maxCust) * this.avgCookieSales);
//       this.cookiesPerHour.push(cookie);
//       console.log(cookie);
//       total += cookie;
// }
//
// var kent = new CookieStore('Kent', 12, 56, 4.5, [1,2,3]);
// console.log(kent);
