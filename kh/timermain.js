import * as foodList from '../돼지테스트/foodlist1.js';

function makeGameData() {
    const $timeSelect = document.querySelector('.timeSelect');

    return {
        timeSelect: $timeSelect.onchange = () => {
            const $timeSelect = document.querySelector('.timeSelect').value;
            return $timeSelect;
        }, //선택된 제한시간
        timeImgSecond: 3,
        timeSecond: null,

    };
}

function startGameBtn(startGame) {
    const startBtn = document.querySelector('.start');
    const $timer = document.querySelector('.timer');
    const $imgbox = document.querySelector('.imgbox');
    let timeImgSecond = startGame.timeImgSecond;

    startBtn.onclick = function () { // start버튼 누르면 사라지는 함수
        // let $time = +makeGameData().timeSelect();
        startBtn.classList.add('hidden');
        $timer.style.display = 'block';

        let timeImgStart = timeImgSecond;
        let timeImg = setInterval(function () {
            $imgbox.textContent = timeImgStart;
            $imgbox.setAttribute('value', timeImgStart);
            timeImgStart--;
            if (timeImgStart === -1) {
                $imgbox.textContent ='';
                let $newImg = document.createElement('img');
            $newImg.setAttribute('id','foodimg');
            $imgbox.appendChild($newImg);
            foodList.rdimg();
                clearInterval(timeImg);
            }
            return timeImgStart;
        }, 1000);
            const $inputAnswer = document.getElementById('answer');
            let $time = startGame.timeSelect();
            
            setTimeout(() => {
                let timeSurv = setInterval(function () { // 난이도에 따라 타이머 설정
                    $timer.setAttribute('value',$time);
                    $time--;
                    $timer.textContent = `남은시간 : ${$time}`;
                    if ($time === 0) {
                        clearInterval(timeSurv);
                    }
                    $inputAnswer.value = ''; // 입력하세요 없애기
                    $inputAnswer.focus(); // 시작 버튼 누르면 input 커서 위치
                }, 1000);
                
            }, 3000);
    }
}


const startGame = makeGameData();
startGameBtn(startGame);
