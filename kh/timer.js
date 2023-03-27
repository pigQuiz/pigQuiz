/*
    - 시작 버튼 누르면 시작 버튼 사라지기 (scorebox 크기는 살짝 변경)
    - 입력 input태그 클릭 시 value = ''로 설정해주기(커서도 위치해주면 best)
    - imgbox 3초 타이머 두기
    - 3초가 지나면 timer(남은시간) 표시해주기(난이도 맞게 시간 설정)
*/

const startBtn = document.querySelector('.start');//시작버튼
const $scoreBox = document.querySelector('.scorebox');
const $timer = document.querySelector('.timer');
const $timeSelect = document.querySelector('.timeSelect');

// const makeData = makeGameData();

function makeGameData(){

    return {
                timeSelect: $timeSelect.onchange = () =>{
                    const $timeSelect = document.querySelector('.timeSelect').value;
                    return $timeSelect;
                    }, //선택된 제한시간
                
    };
}

startBtn.onclick = function(){ // start버튼 누르면 사라지는 함수
    let $time = +makeGameData().timeSelect();
    startBtn.classList.add('hidden');
    $timer.style.display = 'block';
    // alert($time);

    let time = setInterval(function(){ // 난이도에 따라 타이머 설정
            $time--;
            $timer.textContent = `남은시간 : ${$time}`;
            if($time === 0){
                clearInterval(time);
            }
        },1000);
};


