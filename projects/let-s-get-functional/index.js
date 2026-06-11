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
//I: create function that takes in an array
//O: return a number of the average customer balances
//C: n/a
//E: n/a
var averageBalance = function(array) {
    //if array is empty
    if (array.length === 0)
            return 0;
    
    // use the function to find customer balances
    let balance = _.reduce(array, function(total, customer){
        //accumalate the balances
         total += customer.balance;
         return total; //the accumulated balance
    }, 0);
    //divide the total of balances by the number of customers with balances
            return balance / array.length;
    };
//I:Create a function that takes in paramaters of array and letter
//O: returns how many customers names begins with the letter
//C: use filter method
//E:

var firstLetterCount = (function(array, letter) {
   var output = array.filter(function(customer){
    if (customer.name[0] === letter.toUpperCase()) {
            return true;        
}});   
       return output.length;
});

// Find how many friends of a given customer have names that start with a given letter
 //**I: `Array`, `Customer`, `Letter`
// **O: `Number`
var friendFirstLetterCount = function (array, customer, letter) {
// 1. Find the specific customer object by their name
var targetCustomer = array.find(function (cust) {
    return cust.name === customer;
  });

  // 2. Return 0 if customer doesn't exist or has no friends
  if (!targetCustomer || !targetCustomer.friends) {
    return 0;
  }

  // 3. Filter friends whose name starts with the given letter
  var manyFriends = targetCustomer.friends.filter(function (friend) {

    return friend.name[0].toUpperCase() === letter.toUpperCase();
  });

  // 4. Return the length of the filtered array
  return manyFriends.length;
};



//Find the customers' names that have a given customer's name in their friends list
 //**Input**: `Array`, `Name`
 //Output**: `Array`
var friendsCount = function(array, name) {
  // 1. Safety check: ensure input array exists
  if (!array || !Array.isArray(array)) {
    return [];
  }

  // 2. Filter through all customers
  var matchingCustomers = array.filter(function(customer) {
    // Prevent errors if customer or customer.friends is missing
    if (!customer || !customer.friends || !Array.isArray(customer.friends)) {
      return false;
    }
    // Check if the given name exists in this customer's friends list
    return customer.friends.some(function(friend) {
        if (!friend) return false;
        // Handle if friend is an object {name: 'Bob'} or a string 'Bob'
        var friendName = (typeof friend === 'object') ? friend.name : friend;
        return friendName === name;
      });
    });
  // 3. Extract just the names of the matching customers
  var resultNames = matchingCustomers.map(function(customer) {
    return customer.name;
  });

  // 4. Return array
  return resultNames;
};  


//Obj: Find the three most common tags among all customers' associated tags
//I: `Array`
//O: `Array`
//C:n/a
//E: n/a
var topThreeTags = function(array){
        // 1. Gather all tags into a single object with their frequencies
        var tagCounts = array.reduce(function(acc, customer) {
          if (customer.tags && Array.isArray(customer.tags)) {
            customer.tags.forEach(function(tag) {
              // Increment count if it exists, otherwise initialize to 1
              acc[tag] = (acc[tag] || 0) + 1;
            });
          }
          return acc;
        }, {});
      
        // 2. Convert the frequency object into an array of [tag, count] pairs
        var tagPairs = Object.entries(tagCounts);
      
        // 3. Sort the pairs in descending order based on the count
        tagPairs.sort(function(a, b) {
          return b[1] - a[1];
        });
      
        // 4. Extract just the tag names from the top 3 pairs
        var topThree = tagPairs.slice(0, 3).map(function(pair) {
          return pair[0];
        });
      
        return topThree;
      };
    
//**Objective**: Create a summary of genders,
//- **Input**: `Array`
// - **Output**: `Object`
//- **Constraints**: Use `reduce`

var genderCount = function (array) {
// 1. Return an empty object if the input is not a valid array
if (!array || !Array.isArray(array)) {
    return {};
  }

  // 2. Reduce the array into a tally object
  return array.reduce(function(accumulator, customer) {
    // Check if customer exists and has a gender property
    if (customer && customer.gender) {
      var gender = customer.gender;
      
      // If the gender isn't a key in our object yet, initialize it to 0
      if (!accumulator[gender]) {accumulator[gender] = 0;
      }
      
      // Increment the count for this specific gender
      accumulator[gender]++;
    }
    
    // Always return the accumulator for the next loop iteration
    return accumulator;
  }, {}); // <-- Start with an empty object as the initial value
};
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
