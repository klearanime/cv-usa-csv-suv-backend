// * `getNewCases` - takes in a row array and returns the new cases from it (see the table header for which that is!)

const getNewCases = function(rowArr) {
  return rowArr[5];
}





if (typeof getNewCases === 'undefined') {
  getNewCases = undefined;
}


module.exports = getNewCases;
