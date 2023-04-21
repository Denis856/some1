var burger = document.querySelector('.header__burger');
var block0 = document.querySelectorAll('.footer__block');

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   document.querySelector('.header__list').classList.toggle('active');
   block0.forEach(item =>{
      item.classList.remove('active');
   });
});

// next

var title01 = document.querySelectorAll('.footer__title');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// next
