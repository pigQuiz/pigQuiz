import * as timer from './timermain.js';
import * as foodList from '../돼지테스트/foodlist1.js';

const gameData = timer.makeGameData();
let count = 0;
const $answer = document.getElementById('answer');
// const a = foodList.rdimg();
// foodList.imgMatch(foodList.selectedCourse);


// while(count < 0){
    timer.startGameBtn(gameData);
   
    
//     count++;
// }


// foodList.Enter();
// foodList.levelSelecter();
// foodList.imgMatch();