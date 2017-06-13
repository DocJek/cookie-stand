'use strict';


function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    for (var i = 0; i < 16; i++) {
      var cookie = firstPike.getCookiesPerHour();
      custAndCookiesPerHour.push(cookie)[i];
      total += custAndCookiesPerHour[i];
    }
  }
};

buildArray1();
var total = 0;

function buildArray1() {

  var parentEl = document.getElementById('firstPike');

  var article = document.createElement('article');
  parentEl.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = firstAndPike.name;

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var x = 0; x < firstAndPike.custAndCookiesPerHour.length; x++) {
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
  li.textContent = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  custAndCookiesPerHour: [],
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiesPerHour: function() {
    return Math.floor(this.getCustPerHour() * this.avgCookieSales);
    for (var i = 0; i < 16; i++) {
      var cookie = this.getCookiesPerHour();
      custAndCookiesPerHour.push(cookie)[i];
      total += custAndCookiesPerHour[i];
    }
  }
};

buildArray2();
total = 0;

function buildArray2() {

  var parentEl = document.getElementById('seaTac');

  var article = document.createElement('article');
  parentEl.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = seaTacAirport.name;

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var x = 0; x < seaTacAirport.custAndCookiesPerHour.length; x++) {
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
  li.textContent = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 3.7,
  custAndCookiesPerHour: [],
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiesPerHour: function() {
    return Math.floor(this.getCustPerHour() * this.avgCookieSales);
    for (var i = 0; i < 16; i++) {
      var cookie = this.getCookiesPerHour();
      custAndCookiesPerHour.push(cookie)[i];
      total += custAndCookiesPerHour[i];
    }
  }
};

buildArray3();
total = 0;

function buildArray3() {
  var parentEl = document.getElementById('seattleCenter');

  var article = document.createElement('article');
  parentEl.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = seattleCenter.name;

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var x = 0; x < seattleCenter.custAndCookiesPerHour.length; x++) {
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
  li.textContent = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSales: 2.3,
  custAndCookiesPerHour: [],
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiesPerHour: function() {
    return Math.floor(this.getCustPerHour() * this.avgCookieSales);
    for (var i = 0; i < 16; i++) {
      var cookie = this.getCookiesPerHour();
      custAndCookiesPerHour.push(cookie)[i];
      total += custAndCookiesPerHour[i];
    }
  }
};

buildArray4();
total = 0;

function buildArray4() {

  var parentEl = document.getElementById('capitolHill');

  var article = document.createElement('article');
  parentEl.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = capitolHill.name;

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var x = 0; x < capitolHill.custAndCookiesPerHour.length; x++) {
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
  li.textContent = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSales: 4.6,
  custAndCookiesPerHour: [],
  getCustPerHour: function() {
    return randNum(this.minCust, this.maxCust);
  },
  getCookiesPerHour: function() {
    return Math.floor(this.getCustPerHour() * this.avgCookieSales);
    for (var i = 0; i < 16; i++) {
      var cookie = this.getCookiesPerHour();
      custAndCookiesPerHour.push(cookie)[i];
      total += custAndCookiesPerHour[i];
    }
  }
};

buildArray5();
total = 0;

function buildArray5() {

  var parentEl = document.getElementById('alki');

  var article = document.createElement('article');
  parentEl.appendChild(article);

  var h2 = document.createElement('h2');
  article.appendChild(h2);
  h2.textContent = alki.name;

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var x = 0; x < alki.custAndCookiesPerHour.length; x++) {
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
  li.textContent = 'Total: ' + total + ' cookies';
  ul.appendChild(li);
}
