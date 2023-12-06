const designClick = document.querySelectorAll('.swiper_click>img'),
      popup = document.querySelector('.popup_bg'),
      body = document.querySelector('body');

designClick.forEach(function(v,k){
  v.onclick = function(){
    popup.style = `display:block`
    body.style = `overflow:hidden`
    popup.childNodes[1].childNodes[1].src = `./img/design/${k+1}.jpg`
    popup.onclick = function(){
      popup.style = `display:none`
      body.style = `overflow:auto`
    }
  };
});

const reviewClick = document.querySelectorAll('.project_btn button:nth-of-type(2)'),
      reviewBg = document.querySelector('.review_bg'),
      ts = document.querySelectorAll('.ts');

reviewClick.forEach(function(v2,k2){
  let count = 0;
  let num = 0;
  v2.onclick = function(){
    reviewBg.style = `display:block`
    body.style = `overflow:hidden`
    count = k2;
    ts.forEach((v3,k3)=>{
      v3.style = `display:none`;
      if(count == 0){
        ts[num].style = `display:none`;
        ts[0].style = `display:block`;
      }else if(count == 1){
        ts[num].style = `display:none`;
        ts[1].style = `display:block`;
      }else if(count == 2){
        ts[num].style = `display:none`;
        ts[2].style = `display:block`;
      }else if(count == 3){
        ts[num].style = `display:none`;
        ts[3].style = `display:block`;
      }else{
        ts[num].style = `display:none`;
        ts[4].style = `display:block`;
      }
      num = k3;
    })
    reviewBg.onclick = function(){
      reviewBg.style = `display:none`
      body.style = `overflow:auto`
    }
  }
})