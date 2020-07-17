// * `getRow` - takes in a comma-separated string and converts it to array, returning that array



// const getRow = function(rows) {
//   for ( const row of rows) {
//     const cells = row.slice(',');
//     console.log(cells)//(cells[])
//   }
// }

const getRow = function(str) {
  return str.split(',')
}





if (typeof getRow === 'undefined') {
  getRow = undefined;
}



module.exports = getRow;













//const rows = file.split('\n')

//console.log(rows)
//console.log(rows.slice[2])

// for ( let i = 0; 39 < rows.length; i++) {
//const getRow = function(rows) {
//  for (const row of rows) {
//      const cells = row.split(',');
//      console.log()//(cells[]
// )
//  }
//  }

