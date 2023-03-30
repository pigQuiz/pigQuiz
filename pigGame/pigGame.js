const all = [
    {food : '삼겹살',
    img : './photo/삼겹살.jpg'},

   {food : '순대국',
    img : './photo/순대국.jpg'},

    {food : '치킨',
    img : './photo/치킨.jpg'},

    {food : '뼈해장국',
    img : './photo/뼈해장국.jpg'},

    {food : '제육볶음',
    img : './photo/제육볶음.jpg'},

    {food : '잡채',
    img : './photo/잡채.jpg'},

    {food : '쌈밥',
    img : './photo/쌈밥.jpg'},

    {food : '냉면',
    img : './photo/냉면.jpg'},

    {food : '계란말이',
    img : './photo/계란말이.jpg'},

    {food : '곱창',
    img : './photo/곱창.jpg'},

    {food : '갈비찜',
    img : './photo/갈비찜.jpg'},

    {food : '보쌈',
    img : './photo/보쌈.jpg'},

    {food : '족발',
    img : './photo/족발.jpg'},

    {food : '닭갈비',
    img : './photo/닭갈비.jpg'},

    {food : '닭강정',
    img : './photo/닭강정.jpg'},

    {food : '백숙',
    img : './photo/백숙.jpg'},

    {food : '물회',
    img : './photo/물회.jpg'},

    {food : '재첩국',
    img : './photo/재첩국.jpg'},

    {food : '콩나물국',
    img : './photo/콩나물국.jpg'},

    {food : '갈비탕',
    img : './photo/갈비탕.jpg'},
    
    {food : '김치찌개',
    img : './photo/김치찌개.jpg'},

    {food : '고추장찌개',
    img : './photo/고추장찌개.jpg'},

    {food : '부대찌개',
    img : './photo/부대찌개.jpg'},

    {food : '마라샹궈',
    img : './photo/마라샹궈.jpg'},

    {food : '우육면',
    img : './photo/우육면.jpg'},

    {food : '깐쇼새우',
    img : './photo/깐쇼새우.jpg'},

    {food : '꽃빵',
    img : './photo/꽃빵.jpg'},

    {food : '난자완스',
    img : './photo/난자완스.jpg'},

    {food : '동파육',
    img : './photo/동파육.jpg'},

    {food : '딤섬',
    img : './photo/딤섬.jpg'},

    {food : '라조기',
    img : './photo/라조기.jpg'},

    {food : '마라탕',
    img : './photo/마라탕.jpg'},

    {food : '유린기',
    img : './photo/유린기.jpg'},

    {food : '오향장육',
    img : './photo/오향장육.jpg'},

    {food : '훠궈',
    img : './photo/훠궈.jpg'},

    {food : '취두부',
    img : './photo/취두부.jpg'},
    
    {food : '팔보채',
    img : './photo/팔보채.jpg'},
    
    {food : '유타오',
    img : './photo/유타오.jpg'},
    
    {food : '어향육사',
    img : './photo/어향육사.jpg'},
    
    {food : '월병',
    img : './photo/월병.jpg'},
    
    {food : '젠빙',
    img : './photo/젠빙.jpg'},
    
    {food : '주량원자',
    img : './photo/주량원자.jpg'},
    
    {food : '중쯔',
    img : './photo/중쯔.jpg'},
    
    {food : '샥스핀',
    img : './photo/샥스핀.jpg'},
    
    {food : '마파두부',
    img : './photo/마파두부.jpg'},
    
    {food : '불도장',
    img : './photo/불도장.jpg'},
    
    {food : '방탕후루',
    img : './photo/방탕후루.jpg'}, 
   
    {food : '라멘',
    img : './photo/라멘.jpg'},

    {food : '가라아게',
    img : './photo/가라아게.jpg'},

    {food : '고로케',
    img : './photo/고로케.jpg'},

    {food : '낫토',
    img : '../photo/낫토.jpg'},

    {food : '돈부리',
    img : './photo/돈부리.jpg'},

    {food : '스키야키',
    img : './photo/스키야키.jpg'},

    {food : '소바',
    img : './photo/소바.jpg'},

    {food : '스시',
    img : './photo/스시.jpg'},

    {food : '야키토리',
    img : './photo/야키토리.jpg'},

    {food : '타코야끼',
    img : './photo/타코야끼.jpg'},

    {food : '우메보시',
    img : './photo/우메보시.jpg'},

    {food : '우동',
    img : './photo/우동.jpg'},

    {food : '야키니쿠',
    img : './photo/야키니쿠.jpg'},

    {food : '규동',
    img : './photo/규동.jpg'},

    {food : '파스타',
    img : './photo/파스타.jpg'},

    {food : '피쉬앤칩스',
    img : './photo/피쉬앤칩스.jpg'},

    {food : '햄버거',
    img : './photo/햄버거.jpg'},

    {food : '피자',
    img : './photo/피자.jpg'},

    {food : '리조또',
    img : './photo/리조또.jpg'},

    {food : '미트볼',
    img : './photo/미트볼.jpg'},

    {food : '아란치니',
    img : './photo/아란치니.jpg'},

    {food : '에그인헬',
    img : './photo/에그인헬.jpg'},

    {food : '폴렌타',
    img : './photo/폴렌타.jpg'},

    {food : '뇨끼',
    img : './photo/뇨끼.jpg'},

    {food : '맥앤치즈',
    img : './photo/맥앤치즈.jpg'},

    {food : '핫도그',
    img : './photo/핫도그.jpg'},

    {food : '라쟈냐',
    img : './photo/라쟈냐.jpg'},

];


let list = [];

var answer = document.getElementById("answer").value;

function prepare(){ // loading박스에 사진 10개 준비
    for(let i = 0; i < 10; i++){
        list[i] = all[i];
        document.getElementById("loading").innerHTML +=
        '<img src="../돼지테스트/photo/' + list[i] + '.jpg">';
    }
//    console.log(list[9].food); // 정답 객체 가져오기 가능
}


function shuffle() {
    for(let j = 0; j < list.length; j++){
       let k = Math.floor(Math.random() * list.length);
        let temp = list[j];
        list[j] = list[k];
        list[k] = temp;
    //    alert(`${list[j].food}`) 이미지 랜덤 생성 가능
    }
    
}


let timer;
function startTimer(time) { // 남은시간 확인
    timer = setInterval(function () {
      time--;
  
      document.getElementById("introduction").style.fontSize = "30px";
      
        if (time <= 0) {
          if (time === 0) {
          document.getElementById("result").style.fontSize = "220px";
          document.getElementById("result").innerHTML = "땡!";
          document.getElementById("record").style.fontSize = "50px";
          document.getElementById("explain").innerHTML =
            "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
          }
          for (a of correctAnsw) {
            document.getElementById("explain").innerHTML += a + "/";
          }
          document.getElementById("answer").value = null;
          document.getElementById("restart").style.display = "block";
          document.getElementById("answer").style.display = "hidden";
          document.getElementById("button").style.display = "none";
          document.getElementById("introduction").style.display = "none";
          document.getElementById("input").style.display = "none";
          document.getElementById("title").style.display = "block";
          document.getElementById("top").style.display = "block";
        } else if (time > 0) {
          document.getElementById("introduction").innerHTML =
            "남은시간: " + time.toString();
        }
    }, 1000);
};


  let order = 0;
let question;
function Ask() {
    startTimer(parseInt(document.getElementById("time-limit").value));
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("start").style.position = "absolute";
    question = list[order];
    correctAnsw = all[list[order]];
    order++;
    document.getElementById("name").innerHTML =
      '<img id="img" src="./photo/' + question + '.jpg">'; // 그 사진을 문제 란에 올리기.
    document.getElementById("loading").innerHTML +=
      '<img src="./photo/' + list[order + 10] + '.jpg">'; //미리 로딩시키기
    document.getElementById("answer").value = null; // 정답칸 비워주기.
    if (window.innerWidth < 800) {
      document.getElementById("title").style.display = "none";
      document.getElementById("top").style.display = "none";
      document.querySelector("#title h1").innerHTML = null;
    } else {
      document.getElementById("name").style.height = "auto";
    }
    // document.getElementById('name').style.height = 'auto'
  }
 
  function ready() {
    document.getElementById("answer").value = null;
    document.getElementById("result").innerHTML = null;
    document.getElementById("explain").innerHTML = null;
  }
 
  function check(element) {
    if (
      document.getElementById("answer").value.replace(/ /g, "").toUpperCase() ===
        element.replace(/ /g, "").toUpperCase() ||
      document.getElementById("answer").value.replace(/ /g, "").toLowerCase() ===
        element.replace(/ /g, "").toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
 
  function Game() {
    // tiktok.pause();
    // corsound.load();
    clearInterval(timer);
    if (
      document.getElementById("answer").value === question ||
      correctAnsw.some(check)
    ) {
    //   corsound.play();
      document.getElementById("result").innerHTML = "정답!";
      document.getElementById("result").style.animation = "blink 1s 0.3";
      setTimeout(function () {
        document.getElementById("result").style.animation = "none";
      }, 300);
      document.getElementById("answer").value = null;
      turn += 1;
      document.getElementById("record").innerHTML = "점수: " + turn.toString();
  
      if (list.length === order) {
        document.getElementById("record").style.fontSize = "50px";
        // document.getElementById('result').style.fontSize = '45px';
        document.getElementById("result").innerHTML =
          "전부 다 <br> 맞히셨습니다!";
        document.getElementById("name").innerHTML = "끝!";
        document.getElementById("name").innerHTML.style.fontSize = "50px";
        document.getElementById("title").style.display = "block";
        document.getElementById("top").style.display = "block";
        document.getElementById("result").style.animation =
          "blink 1s step-end infinite";
        document.getElementById("restart").style.display = "block";
  
        if (list === level1 || list === level2) {
          document.getElementById("next").style.display = "block";
        } else if (list === level3 || list === all) {
          document.getElementById("result").innerHTML +=
            "<br>이정도면 예능정복 쌉가능";
        }
  
        document.getElementById("answer").style.visibility = "hidden";
        document.getElementById("button").style.display = "none";
        document.getElementById("introduction").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("restart").style.display = "block";
      } else {
        Ask();
      }
    } else {
      wrosound.play();
      document.getElementById("title").style.display = "block";
      document.getElementById("top").style.display = "block";
      document.getElementById("result").style.fontSize = "220px";
      document.getElementById("result").innerHTML = "땡!";
      document.getElementById("record").style.fontSize = "50px";
      document.getElementById("explain").innerHTML =
        "정답은 " + question + " 입니다." + "<br>그 외 인정: ";
      for (a of correctAnsw) {
        document.getElementById("explain").innerHTML += a + "/";
      }
      document.getElementById("answer").value = null;
      document.getElementById("restart").style.display = "block";
      document.getElementById("answer").style.visibility = "hidden";
      document.getElementById("button").style.display = "none";
      // document.getElementById("introduction").style.display = "none";
      document.getElementById("input").style.display = "none";
    }
  }
  
  document.getElementById("resume").addEventListener("click", resume);
//   document.getElementById("submit").addEventListener("click", Game);
  
  function resume() {
    if (order == list.length) {
      document.getElementById("explain").innerHTML = "<br>끝났어요.";
    } else {
      document.getElementById("introduction").innerHTML =
        "남은시간: " + parseInt(document.getElementById("time-limit").value);
      document.getElementById("record").innerHTML = null;
      document.getElementById("result").innerHTML = null;
      document.getElementById("explain").innerHTML = null;
      document.getElementById("result").style.fontSize = "40px";
      document.getElementById("record").style.fontSize = "20px";
      document.getElementById("button").style.display = "block";
      document.getElementById("introduction").style.display = "block";
      clearInterval(timer);
      Ask();
      document.getElementById("restart").style.display = "none";
    }
  }
 
  function Enter() { // enter event
    if (window.event.keyCode === 13) {
      if (document.getElementById("answer").value.length > 0) {
        Game();
      }
    }
  }

  function gamestart() {
    if (list.length === 0) {
      list = Object.keys(all);
    }
    Shuffle();
    prepare();
    setTimeout(function () {
      document.getElementById("name").innerHTML = "3";
      audio.play();
    }, 200);
  
    setTimeout(function () {
      document.getElementById("name").innerHTML = "2";
      audio.play();
    }, 1200);
    setTimeout(function () {
      document.getElementById("name").innerHTML = "1";
      audio.play();
    }, 2400);
    setTimeout(function () {
      document.getElementById("name").innerHTML = "Go!";
    }, 3600);
    setTimeout(function () {
      Ask();
    }, 4000);
  };
