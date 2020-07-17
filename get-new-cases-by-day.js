// * `getTotalCasesByDay` - takes in a date string and a 2D array and returns total cases that day
//   * HINT: You'll want to loop through each row of the data!
//   * HINT: You can use `getDate` and `getTotalCases` so you don't have to check those indices again!

const getNewCasesByDay = function(date, str) {
  for ( const newCases of str) {
    if (newCases[3] === date) {
      return newCases[5];
    }
  }
}



if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
