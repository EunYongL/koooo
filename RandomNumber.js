let randomNumber = Math.floor(Math.random()*10) + 1;
let guess;
let attempts = 0;

do {
    guess = prompt ('guess the number between 1 and 10');
    attempts++;
    if (guess < randomNumber) {
        console.log('too low');
    } else if (guess > randomNumber) {
        console.log ('too high')
    } else {
        console.log( 
            'correct! you guessed the number in ' + attempts+ ' attempts.');
    }
    } while (guess != randomNumber);



    const maxNumber = (a, b) => {
        if (a>b) {return a;}
        else return b;
    };

    const R4 = maxNumber(1,3)
    console.log(R4)

