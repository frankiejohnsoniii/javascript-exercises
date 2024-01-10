const repeatString = function(string, num) {
    var sum = "";
    if (num < 0 ){
        sum = "ERROR";
    } else {
        for (var i = 0; i < num; i++) {
            sum += string
        }
    }
    
    return sum;
    


};

// Do not edit below this line
module.exports = repeatString;
