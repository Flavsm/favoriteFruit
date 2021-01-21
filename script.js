//Selectors

const sweetTart = document.querySelector('.firstSelect');
const firstSelect = document.querySelector('.firstDiv');
const orangeYellow = document.querySelector('.secondDiv');
const pealNopeal = document.querySelector('.thirdDiv');
const removeFirstSelect = document.getElementById('firstselect');

//Evenet Listeners

sweetTart.addEventListener('click', firstQuestion);
orangeYellow.addEventListener('click', secondQuestion);
pealNopeal.addEventListener('click', secondQuestion);

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
       //append new select to the original Div 
        orangeYellow.appendChild(secondQuestionPart1);
        //add Orange and Yellow options to the new select
        secondQuestionPart1.innerHTML = '<option selected>Choose</option> <option value="orange">Orange</option> <option value="yellow">Yellow</option>';
        removeFirstSelect.remove();
        break;
    //tart was chosen
        case "tart":
        //add new select
        const secondQuestionPart2 = document.createElement('select');
        //add class to the new select
        secondQuestionPart2.classList.add('secondselectpart2');
        //append new select to the original Div
        pealNopeal.appendChild(secondQuestionPart2);
        //add Peal or No peal options to the new select
        secondQuestionPart2.innerHTML = "<option selected>Choose</option> <option value='peal'>Peal</option> <option value='nopeal'> Don't peal</option>";
        removeFirstSelect.remove();
        break;
    }
}

 function secondQuestion (e) {
     if (e.target.value === 'orange') {
         const finalDiv = document.createElement('div');
         finalDiv.classList.add('papayaPic');
            orangeYellow.appendChild(finalDiv);
            finalDiv.innerHTML = '<img src="https://tinyurl.com/yywks6lo"></img><p>PAPAYA IS YOUR FAVOURITE FRUIT!</p>';

        } else if (e.target.value === 'yellow') {
        const finalDiv = document.createElement('div');
        finalDiv.classList.add('bananaPic');
           orangeYellow.appendChild(finalDiv);
           finalDiv.innerHTML = '<img src="https://tinyurl.com/y5anae6w"></img><p>BANANA IS YOUR FAVOURITE FRUIT!</p>';
           
        } else if (e.target.value === 'nopeal') {
        const finalDiv = document.createElement('div');
        finalDiv.classList.add('greenapplePic');
           orangeYellow.appendChild(finalDiv);
           finalDiv.innerHTML = '<img src="https://tinyurl.com/yy2kvdlc"></img><p>GREEN APPLE IS YOUR FAVOURITE FRUIT!</p>';
           
        } else {
        const finalDiv = document.createElement('div');
        finalDiv.classList.add('grapefruitPic');
           orangeYellow.appendChild(finalDiv);
           finalDiv.innerHTML = '<img src="https://tinyurl.com/y452uzlk"></img><p>GRAPEFRUIT IS YOUR FAVOURITE FRUIT!</p>';
           
        }
        
 };

