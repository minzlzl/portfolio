const ela = document.querySelectorAll('.header_wrap>ul>li>a');
let num = 0 ;
ela.forEach((v,k)=>{
  v.onclick = function(){
    ela[num].classList.remove('colors');
    v.classList.add('colors');
    num = k;
  };
});


const home = document.querySelector('.header_wrap>ul>li:nth-of-type(1)>a'),
          about = document.querySelector('.header_wrap>ul>li:nth-of-type(2)>a'),
          project = document.querySelector('.header_wrap>ul>li:nth-of-type(3)>a'),
          design = document.querySelector('.header_wrap>ul>li:nth-of-type(4)>a'),
          con1Wrap = document.querySelector('.con1_wrap'),
          con2Wrap = document.querySelector('.con2_wrap'),
          con3Wrap = document.querySelector('.con3_wrap'),
          con4Wrap = document.querySelector('.con4_wrap')
home.addEventListener("click",()=>{
  window.scrollBy({top: con1Wrap.getBoundingClientRect().top, behavior: 'smooth'});
});
about.addEventListener("click",function(){
  window.scrollBy({top: con2Wrap.getBoundingClientRect().top, behavior: 'smooth'});
});
project.addEventListener("click",function(){
  window.scrollBy({top: con3Wrap.getBoundingClientRect().top, behavior: 'smooth'});
});
design.addEventListener("click",function(){
  window.scrollBy({top: con4Wrap.getBoundingClientRect().top, behavior: 'smooth'});
});


const header = document.querySelector('header')
