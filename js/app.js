'use strict';

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiesPerHour: function() {
    return Math.floor(this.getCustPerHour() * this.avgCookieSales);
  }
};

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var custAndCookiesPerHour = [];
var total = 0;

for (var i = 0; i < 16; i++) {
  var cookie = firstAndPike.getCookiesPerHour();
  custAndCookiesPerHour.push(cookie)[i];
  total += custAndCookiesPerHour[i];
}

var parentEl = document.getElementById('firstPike');

var article = document.createElement('article');
parentEl.appendChild(article);

var h2 = document.createElement('h2');
article.appendChild(h2);
h2.textContent = firstAndPike.name;

var ul = document.createElement('ul');
article.appendChild(ul);

for (var x = 0; x < custAndCookiesPerHour.length; x++) {
  var li = document.createElement('li');
  li.textContent = custAndCookiesPerHour[x];
  ul.appendChild(li);
  if (x < 6) {
    li.textContent = x + 6 + 'am: ' + custAndCookiesPerHour[x] + ' cookies';
  } else if (x > 6) {
    li.textContent = x - 6 + 'pm: ' + custAndCookiesPerHour[x] + ' cookies';
  } else {
    li.textContent = x + 6 + 'pm: ' + custAndCookiesPerHour[x] + ' cookies';
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total;
ul.appendChild(li);
