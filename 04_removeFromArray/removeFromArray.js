const removeFromArray = function(array, ...theArgs) {
   let newArray = array.filter (item => !theArgs.includes(item)); 
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
