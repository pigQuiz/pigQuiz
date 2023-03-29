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
        startBtn.classList.add('hidden'); // start버튼 숨기기
        $timer.style.display = 'block'; // 남은시간 보여주기

        let timeImgStart = timeImgSecond;
        let timeImg = setInterval(function () { // 사진박스 3,2,1 카운트 다운
            $imgbox.textContent = timeImgStart;
            $imgbox.setAttribute('value', timeImgStart);
            timeImgStart--;
            if (timeImgStart === -1) { // 0초가 되면 랜덤 음식 사진 보여주기
                $imgbox.textContent = '';
                let $newImg = document.createElement('img');
                $newImg.setAttribute('id', 'foodimg');
                $imgbox.appendChild($newImg);
                foodList.imgMatch(foodList.selectedCourse); // 랜덤 음식 사진 보여주는 함수
                clearInterval(timeImg); // 0초가 되면 함수 종료
            }
            return timeImgStart;
        }, 1000); // 사진박스 카운트 다운 함수 end
        
        const $inputAnswer = document.getElementById('answer');
        // const $answer = document.getElementById('answer');
        // const {resultBool, rand} = {...foodList.imgMatch()};
        // console.log(rand());
        // alert(foodList.selectedCourse[rand].food);
        // $inputAnswer.addEventListener('keyup', (e) => {
        //     if (e.key === 'Enter') {
        //         if ($inputAnswer.value === foodList.selectedCourse[rand].food) {
        //             alert('aaa');
        //         }
        //     }
        // });
        let $time = startGame.timeSelect();

        setTimeout(() => { // 1초씩 남은시간 깍이는 함수
            let timeSurv = setInterval(function () { // 난이도에 따라 타이머 설정
                $timer.setAttribute('value', $time);
                $time--;
                $timer.textContent = `남은시간 : ${$time}`;
                if ($time === 0) {
                    clearInterval(timeSurv);
                }
                // $inputAnswer.value = ''; // 입력하세요 없애기
                $inputAnswer.focus(); // 시작 버튼 누르면 input 커서 위치
            }, 1000);
            console.log(foodList.aa);
        }, 3000);
    }
}


const startGame = makeGameData();
startGameBtn(startGame);

export {
    startGameBtn,
    makeGameData
};