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