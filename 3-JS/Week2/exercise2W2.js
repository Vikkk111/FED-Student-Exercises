function generateRandomNumber() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    if (randomNumber > 9) {
      console.log("Number is too high");
    } else if (randomNumber < 2) {
      console.log("Number is too low");
    } else {
      console.log("Number is just right!");
    }
  }

  const randomNumber = generateRandomNumber();
console.log(randomNumber);
