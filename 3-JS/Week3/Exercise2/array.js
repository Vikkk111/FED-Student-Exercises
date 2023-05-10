function calculateEvenSum(numbersArray) {
    let sum = 0;
  
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] % 2 === 0) {
        sum += numbersArray[i];
      }
    }
  
    return sum;