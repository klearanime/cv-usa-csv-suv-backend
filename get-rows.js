// * `getRows` - takes in newline-separated string and convert to 2d array
//   * HINT: This is a mapping function, essentially. Make a new array, split the huge csv string, loop through the array that gives you, and push an array for each string row into your new array.
//   * HINT: You can use `getRow` (requiring it in!) to convert each row from a string to an array.
const getRow = require('./get-row.js');
const getRows = function(str) {
  const row = [];
  //const strIndex = [];
  const strInd = str.split('\n');
  //for ( let i = 0; i < str.length; i++) {
   // if (str[i] === ',') {
  for ( const strIndex of strInd) { 
      rows.push(getRow(strIndex));
    }
        return row;



if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
