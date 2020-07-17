const totalCaseChange = function(data, date1, date2) {
    let total1 = 0;
    let total2 = 0;
    for ( const cases of data) {
        if (cases[3] === date1) {
            total1 += cases[4];
        }
        if (cases[3] === date2) {
            total2 += cases[4];
        }
        return total1 - total2; 
    }
    const newCaseChange = function(data, date1, date2) {
    let case1 = 0;
    let case2 = 0;
    for ( const cases of data) {
        if (cases[3] === date1) {
            case1 += cases[5]
        }
        if (cases[3] === date2) {
            case2 += cases[5]
        }        
        return cases2 - cases1;      
    }
}

module.exports = totalCaseChange;
module.exports = newCaseChange;