var slide1 = document.getElementById('about__slide1');
var slide2 = document.getElementById('about__slide2');
var slide3 = document.getElementById('about__slide3');

slide1.addEventListener('click', ()=> {
   document.querySelector('.about__items').classList.add('active1');
   document.querySelector('.about__items').classList.remove('active2');
   document.querySelector('.about__items').classList.remove('active3');
   slide1.classList.add('active');
   slide2.classList.remove('active');
   slide3.classList.remove('active');
});

slide2.addEventListener('click', ()=> {
   document.querySelector('.about__items').classList.remove('active1');
   document.querySelector('.about__items').classList.add('active2');
   document.querySelector('.about__items').classList.remove('active3');
   slide1.classList.remove('active');
   slide2.classList.add('active');
   slide3.classList.remove('active');
});

slide3.addEventListener('click', ()=> {
   document.querySelector('.about__items').classList.remove('active1');
   document.querySelector('.about__items').classList.remove('active2');
   document.querySelector('.about__items').classList.add('active3');
   slide1.classList.remove('active');
   slide2.classList.remove('active');
   slide3.classList.add('active');
});

// next

var btn0 = document.querySelector('.home__btn');
var btn02 = document.querySelector('.form__btn');

btn0.addEventListener('click', ()=> {
   document.querySelector('.form').classList.add('active');
   document.querySelector('.wrapper').classList.add('active');
   document.querySelector('body').classList.add('active');
});
btn02.addEventListener('click', ()=> {
   document.querySelector('.form').classList.remove('active');
   document.querySelector('.wrapper').classList.remove('active');
   document.querySelector('body').classList.remove('active');
});