let user = prompt(`Please enter your name!`);

function userAns() {
    return parseInt(prompt('Please pick a number between 1 and 50!'));
  }
  
 function expectedNum() {
    return Math.ceil(Math.random() * 50);
  }

let input;
let count = 0;
let attempts = []

  function startGame () {  
    let rightAns = expectedNum();
    
    do {
      input = userAns();

      if (input > rightAns) {
        alert(`${user} please lower your guess, you're not even close!`);
      } else if (input < rightAns) {
        alert(`Higher please ${user}, you're making me look bad...`);
      }

      attempts.push(input);

      count++;

    } while (input !== rightAns);

    alert(`Congratulations ${user}, it took you long enough! You made ${count} attempts, your previous guesses were ${attempts}...`);

    const response = confirm(`Looks like you need some practice, would you like to play again ${user}?`);

        if (response) {
            return startGame();
        } else {
            alert(`Thank you for playing ${user}!`)
        }

        let currGame = {
            name: user,
            answer: input
        }
}

  
 startGame();