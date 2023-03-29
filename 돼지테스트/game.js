import { imgMatch, selectedCourse } from "./foodlist1";

while(true) {
    
    if(imgMatch(selectedCourse)===false){
        break;
    }else if(imgMatch(selectedCourse)=== true){
        continue;
    }
}