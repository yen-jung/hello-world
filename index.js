// index.js

//隨便一個函數
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  //記得輸出
  module.exports = isPrim
