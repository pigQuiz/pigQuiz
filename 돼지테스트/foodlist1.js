const korea = [
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

   ];


   const $level = document.querySelector('.levelselect');
   
   //코스 선택하면 카테고리 보이기
   const $catalog = [...document.querySelectorAll('.kind li')];

   $level.onclick = function () {
    console.log('kllll');
    // if($catalog.attributes('style') == 'none' ){
    // }
    $catalog.forEach(($li) => {
        $li.style.visibility = 'visible';

    });
    // $catalog.style.visibility = 'visible';
   }

   const selectedCourse = [];
  

   $catalog.forEach(($li, idx) => {
   
       if($li[idx].value === '한식') {
            $li[idx].onclick = () => {
                selectedCourse = korea;
                imgMatch(selectedCourse);
            }
        } 
        else if($li[idx].value === '일식') {
            $li[idx].onclick = () => {
                selectedCourse = Japan;
                imgMatch(selectedCourse);
            }
        }
        else if($li[idx].value === '양식') {
            $li[idx].onclick = () => {
                selectedCourse = Western;
                imgMatch(selectedCourse);
            }
        }
        else if($li[idx].value === '전체') {
            $li[idx].onclick = ()  => {
                selectedCourse = korea.concat(Japan,China,Western);
                imgMatch(selectedCourse);
            }
        }
        else {
            $li[idx].onclick = () => {
                selectedCourse = China;
                imgMatch(selectedCourse);
           }
       }
   });

//    function randomFood(){
//   const  randomimg  = Math.floor(Math.random() * korea.length) + 1;
//    document.querySelector('#foodimg').classList.add(korea[randomFood]);
// } 
// // console.log(korea.length)

// // console.log(randomFood())
// randomFood();


//이미지 랜덤 함수 생성
function randomFood(){
    let foodimg = Math.round(Math.random() * selectedCourse.length);
    return foodimg;   
}
//점수 계산하기 
var count =0;
const $score = document.querySelector('.score');
//
const $correct = document.querySelector('.correct');
while(true){
    const $imgbox = document.getElementById('foodimg');
    
}
//이미지와 input박스 답 체크하기
function imgMatch(selectedCourse) {
    const imgNum = randomFood();
    const selectedFood = selectedCourse[imgNum].img;
    var arrUrl  = selectedFood.split("/");
    var FileNameplus = arrUrl[arrUrl.length - 1]; //나누어진 배열의 맨 끝이 파일명
    var arSplitFileName   = FileNameplus.split("."); //파일명을 다시 "."로 나누어 확장자랑 쪼갬
    var FileName = arSplitFileName[0]; //파일이름
    if(FileName === document.getElementById('answer').value){
        $correct.textContent = '정답입니다!!';
        count++;
        $score.style.width = 
        $score.innerHTML += `: ${count} 점`;
            
    } else {
        $correct.textContent = '땡!!';
    }
}

function rdimg() {
    let foodimg = Math.round(Math.random() * 26);
    // console.log(foodimg); // 랜덤이미지 생성
    let objImg = document.getElementById('foodimg');
    objImg.setAttribute('src', '');
    

}

// console.log(rdimg())

// rdimg();