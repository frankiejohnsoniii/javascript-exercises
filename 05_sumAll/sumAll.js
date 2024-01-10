const sumAll = function(x,y) {
    let sum = 0;
    if (y <0 || x<0) {
        return sum = 'ERROR'
    } else if (typeof x === 'string' || typeof y === 'string' ) {
        return sum = 'ERROR'
    } else if (y > x) {
        for (i = x; i <= y; i++) [
            sum += i
        ]
        return sum;
     } else if (x > y) {
        for (i = y; i <= x; i++) [
            sum += i
        ]
        return sum;
     } else {
        return sum = 'ERROR'
     }


};

// Do not edit below this line
module.exports = sumAll;
