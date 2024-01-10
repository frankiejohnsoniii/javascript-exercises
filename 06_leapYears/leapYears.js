const leapYears = function(year) {
    
     if (year%4 === 0) {    
        if( year%100 != 0 || year%400 === 0) {
            return true // Checks if its divisible by 4. Then confirms the second clarification
        } else {
            return false
        } 
    } else {
        return false
    }


    /* if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
          // Check if the year is divisible by 400
          if (year % 400 === 0) {
            return true; // Leap year (divisible by 400)
          } else {
            return false; // Not a leap year (divisible by 100 but not by 400)
          }
        } else {
          return true; // Leap year (divisible by 4 but not by 100)
        }
      } else {
        return false; // Not a leap year (not divisible by 4)
      } */

};

// Do not edit below this line
module.exports = leapYears;
