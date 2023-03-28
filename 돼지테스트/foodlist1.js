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

//    function randomFood(){
//   const  randomimg  = Math.floor(Math.random() * korea.length) + 1;
//    document.querySelector('#foodimg').classList.add(korea[randomFood]);
// } 
// // console.log(korea.length)

// // console.log(randomFood())
// randomFood();

function rdimg() {
    let foodimg = Math.round(Math.random() * 26);
    // console.log(foodimg); // 랜덤이미지 생성
    let objImg = document.getElementById('foodimg');
    objImg.setAttribute('src', korea[foodimg].img);

}

export {korea, rdimg};