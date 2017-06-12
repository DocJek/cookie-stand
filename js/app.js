'use strict';

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  custAndCookiesPerHour: [],
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

for (var i = 0; i < 15; i++) {
  var cookie = firstAndPike.getCookiesPerHour();
  firstAndPike.custAndCookiesPerHour.push(cookie[i]);
}

console.log(firstAndPike.custAndCookiesPerHour);
