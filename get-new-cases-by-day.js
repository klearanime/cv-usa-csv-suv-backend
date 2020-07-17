// * `getTotalCasesByDay` - takes in a date string and a 2D array and returns total cases that day
//   * HINT: You'll want to loop through each row of the data!
//   * HINT: You can use `getDate` and `getTotalCases` so you don't have to check those indices again!

const getNewCasesByDay = function(date, arr) {
  for ( const newDay of arr) {
    if (newDay[3] === date) {
      return newDay[5]
    }
  }
}



if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
