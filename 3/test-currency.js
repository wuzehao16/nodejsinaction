var currency = require('./currency');
var Currenty1 = require('currency');
console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));
var dollar = 0.91;
var current = new Currenty1(dollar);
console.log(current.canadianToUS(50))
