// function play(){
//     //step-1 hide the home screen

//       const homeSection = document.getElementById('home-screen');
//       homeSection.classList.add('hidden');


//     //   console.log(homeSection.classList);

//     //step-2 show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);

// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed)

    // stop the game if pressed 'Esc'

    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const  currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    // checked match or not

    if(playerPressed === expectedAlphabet){
        console.log("you get a point");
        
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);  

        // ---------------------------------------------
        // // update score
        // // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
         
        // // increase the score by 1
        const newScore = currentScore + 1;
        // // show the update score
        // currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed.you lost a life');

           const currentLife = getTextElementValueById('current-life');
           const updateLife = currentLife-1;
           setTextElementValueById('current-life',updateLife);

           if(updateLife === 0){
            gameOver();
           }
        
       
        // --------------------------------
        // // get the current life number
        //   const currentLifeElement = document.getElementById('current-life');
        //   const currentLifeText = currentLifeElement.innerText;
        //   const currentLife = parseInt(currentLifeText);
        // // reduce the life count
        // const newLife = currentLife-1;

        // //  display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
//    step-1: generate a random alphabet;
const alphabet = getARadomAlphabet();
// console.log(alphabet);

// set randomly generated alphabet to the screen
const currentAlphabetElement = document.getElementById('current-alphabet')
      currentAlphabetElement.innerText = alphabet;

    //   set background color
    setBackgroundColorById(alphabet)
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // get the final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}