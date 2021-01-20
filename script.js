//Selectors

const sweetTart = document.querySelector('.firstSelect');
const firstSelect = document.querySelector('.firstDiv');
const orangeYellow = document.querySelector('.secondDiv');
const pealNopeal = document.querySelector('.thirdDiv');
const papaya = document.querySelector('.fourthDiv');
// const banana = document.querySelector('.fifthDiv');
// const grapeFruit = document.querySelector('.sixthDiv');
// const greenApple = document.querySelector('.seventhDiv');


//Evenet Listeners

sweetTart.addEventListener('click', firstQuestion);
orangeYellow.addEventListener('click', secondQuestion);
pealNopeal.addEventListener('click', secondQuestion);
// papaya.addEventListener('click', )

//Functions

//after fist selection, create new options
function firstQuestion(e) {
    //sweet was chosen
    switch (e.target.value) { 
        case "sweet": 
        //add new select 
       const secondQuestionPart1 = document.createElement('select');
       //add class to the new select
       secondQuestionPart1.classList.add('secondselectpart1');
       //append new select to the original Div [MAKING CHANGE HERE]
        orangeYellow.appendChild(secondQuestionPart1);
        //add Orange and Yellow options to the new select
        secondQuestionPart1.innerHTML = '<option value="choose">Choose</option> <option value="orange">Orange</option> <option value="yellow">Yellow</option>';
        
    //tart was chosen
        case "tart":
        //add new select
        const secondQuestionPart2 = document.createElement('select');
        //add class to the new select
        secondQuestionPart2.classList.add('secondselectpart2');
        //append new select to the original Div
        pealNopeal.appendChild(secondQuestionPart2);
        //add Peal or No peal options to the new select
        secondQuestionPart2.innerHTML = "<option value='choose'>Choose</option> <option value='peal'>Peal</option> <option value='nopeal'> Don't peal</option>";
        break;
    }
}

// function secondQuestion (e) {
//     if (e.target.value === 'orange') {
//         const finalDiv = document.createElement('img');
//         finalDiv.classList.add('papayaPic');


//     }
// }