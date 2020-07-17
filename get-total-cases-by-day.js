// * `getNewCasesByDay` - takes in a date string and a 2D array and returns new cases that day
//   * HINT: You'll want to loop through each row of the data!
//   * HINT: You can use `getDate` and `getNewCases` so you don't have to check those indices again!

const getTotalCasesByDay = function(date, arr) {
  for ( const newCases of arr) {
    if ( newCases[3] === date) {
      return newCases[4]
    }
  }
}



if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
