// * `getTotalCases` - takes in a row array and returns the total cases from it (see the table header for which that is!)

const getTotalCases = function(row) {
  return row[4];
}





if (typeof getTotalCases === 'undefined') {
  getTotalCases = undefined;
}


module.exports = getTotalCases;



