// Test the moment functionalities
const moment = require('moment');
moment.locale();
var now = moment();

/**
 * Add and substract time 
 * */  
// now.subtract(1, 'year');

/** 
 *  the current time without format 
 */
// console.log(now.format());

/**
 * Moment formatting document: http://momentjs.com/docs/#/displaying/
 * out format time string
 */
// console.log(now.format('Do MMM YYYY, h:mma'));

/**
 * It gets the Epoch time String (Unix timestamp) in second (with upppercase X)
 */
console.log(now.format('X'));

/**
 * It gets the Epoch time String (Unix timestamp) in millisecond (with lowercase x)
 */
console.log(now.format('x'));

/**
 * It gets the Epoch time in number (Unix timestamp) in millisecond (with lowercase x)
 */
console.log(now.valueOf());

/**
 * Convert the unix timestamp back to a moment object and print it out
 */
const timestamp = 1474290542038;
var timestampMoment = moment.utc(timestamp);

// local() convert the UTC time into local time
console.log(timestampMoment.local().format());
console.log(timestampMoment.local().format('h:mm a'));




