// * `getDate` - takes in a row array and returns the date from it (see the table header in the `.csv` file for which that is!)

const getDate = function(date){
  // for (const row of date) {
   // const date = date.split(',');
  return date[3];
}





if (typeof getDate === 'undefined') {
  getDate = undefined;
}



module.exports = getDate;

