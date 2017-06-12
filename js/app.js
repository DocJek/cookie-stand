'use strict';

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiePerHour: function() {
    return Math.floor(this.getCustPerHour * this.avgCookieSales);
  }
};

function randNum(min, max) {
  return Math.floor(Math.random() * ((max - min + 1) + min));
}

console.log(firstAndPike.getCustPerHour);
