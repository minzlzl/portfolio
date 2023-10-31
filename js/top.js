const topBtn = document.querySelector('.top');

topBtn.addEventListener("click",function(){
  window.scrollTo({top : 0, behavior: 'smooth'}); 
});

window.addEventListener("scroll",()=>{
  if(window.scrollY >= 100){
    topBtn.style = `display:flex`
  }else if(window.scrollY <= 0){
    topBtn.style = `display:none`
  };
});