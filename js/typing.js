// const imGround = "안녕하세요? \n 웹 퍼블리셔 김민지의 포트폴리오 사이트에 \n 방문해 주셔서 감사합니다 ! !";
// const text = document.querySelector(".text");
// let i = 0;

// function typing(){
// let txt = imGround[i++];
// text.innerHTML += txt=== "\n" ? "<br/>": txt;
// if(i > imGround.length){
//     text.textContent = "";
//     i = 0;
//   }
// }
// setInterval(typing, 100)


window.onload = function(){
  const imGround = "let experience = (design)=>{return code;}";
  const text = document.querySelector(".text");
  let i = 0;

  function typing() {
    let txt = imGround[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i < imGround.length) {
      setTimeout(typing, 70); // 다음 타이핑을 예약
      if(window.scrollY < 250){
        body.style = `overflow:hidden`
        scrollDown.style = `display:none`
      }else{
        body.style = `overflow:auto`
        scrollDown.style = `display:block; margin:0 auto`
      }
    }else{
      body.style = `overflow:auto`
      scrollDown.style = `display:block; margin:0 auto`
    }
  }
  typing(); // 최초 한 번 실행
};