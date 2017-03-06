var moment = require('moment');

var date = moment();
// date.add(1, 'year').subtract(7, 'months');
console.log(date.format('MMM Do, YYYY'));

var currentTime = moment();
console.log('Current Time: ' + currentTime.format('h:mm a'));

var someTime = moment().valueOf();
console.log(someTime);