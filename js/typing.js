const imGround = "안녕하세요? \n 웹 퍼블리셔 김민지의 포트폴리오 사이트에 \n 방문해 주셔서 감사합니다 ! !";
const text = document.querySelector(".text");
let i = 0;

function typing(){
let txt = imGround[i++];
text.innerHTML += txt=== "\n" ? "<br/>": txt;
if(i > imGround.length){
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 100)