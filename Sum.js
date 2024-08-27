const Sum = (...numbers)=> 
    numbers.reduce((prev, cur) => prev + cur ,0);

module.exports = Sum;
