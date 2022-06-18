
// let keyclicks = document.querySelectorAll(".drum").length;

// for(i=0;i<=keyclicks;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",ongclick);
//     function ongclick(){
//         var btn = this.innerHTML;

//         switch (btn) {
//             case "w":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//                 case "a":
//                     var kick = new Audio("sounds/kick-bass.mp3");
//                     kick.play();
//                     break;
//                     case "s":
//                         var snare = new Audio("sounds/snare.mp3");
//                        snare.play();
//                         break;
//                         case "d":
//                             var tom1 = new Audio("sounds/tom-1.mp3");
//                             tom1.play();
//                             break;
//                             case "j":
//                                 var tom2 = new Audio("sounds/tom-2.mp3");
//                                 tom2.play();
//                                 break;
//                                 case "k":
//                                     var tom3 = new Audio("sounds/tom-3.mp3");
//                                     tom3.play();
//                                     break;
//                                     case "l":
//                                         var tom4 = new Audio("sounds/tom-4.mp3");
//                                         tom4.play();
//                                         break;
//             default:
//                 break;
//         }
//     }
   

// }

let keyclick = document.querySelectorAll(".drum").length;

for(i=0;i<keyclick;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",ongclick);

    function ongclick(){
var btnHtml = this.innerHTML;
makesound(btnHtml);
btnanime(btnHtml);
   
    

document.addEventListener("keydown",function(e) {
    makesound(e.key); 
    btnanime(e.key);
});



}
function makesound(key){
    switch (key) {
        case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
                    default:console.log("please check your keys");
                        break;
                }
            }
}


function btnanime(crntkey){
var actbtn = document.querySelector("."+ crntkey);
actbtn.classList.add("pressed");

setTimeout(function(){
    actbtn.classList.remove("pressed");
}, 100);

}





