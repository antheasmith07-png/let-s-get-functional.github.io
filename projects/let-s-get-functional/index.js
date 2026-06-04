// #!/usr/bin/env node

'use strict';
//I: take in array of objects of male customers
//O: return a count of male customers
//C: n/a
//E: n/a
var maleCount = function(array) {    
    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
      });
    
      return males.length;
    }       
//I: creata a function that take in array of objects of female customers
//O: return a count of female customers
//C: n/a
//E: n/a
var femaleCount = function(array) {
    let females = _.filter(array, function(customer){
        return customer.gender === 'female';
    });
        return females.length;
}
//I: create function that takes in an array
//O: return a string with the oldest customer name
//C: n/a
//E: n/a
var oldestCustomer = function(array) {
    //declare an accumulator value
    var oldestCust = 0;
    //use reduce function to find customers ages
    let oldest = _.reduce(array, function(oldestCust, customer){
        //if current customer is older than oldest cust return customer
            if (customer.age > oldestCust.age) {
            return customer;
            } else {
            //if not older than oldest cust return Oldest Cust
            return oldestCust;
    }
});
    // return oldest person's name
            return oldest.name;
}
//I: create function that takes in an array
//O: return a string with the oldest customer name
//C: n/a
//E: n/a  
var youngestCustomer =  function(array){
    //declare an accumulator value
    var youngestCust = 0;
    //use reduce function to find customers ages
    let youngest = _.reduce(array, function(youngestCust, customer){
        //if current customer is older than oldest cust return customer
            if (customer.age < youngestCust.age) {
            return customer;
            } else {
            //if not younger than youngest cust return Youngest Cust
            return youngestCust;
    }
});
    // return youngest person's name
            return youngest.name;
}

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
