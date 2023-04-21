var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {showImg(indexValue = e);}
function side_slide(e) {showImg(indexValue += e);}
function showImg(e) {
   var i;
   var img = document.querySelectorAll('.home__body');
   if(e > img.length) {indexValue = 1;}
   if(e < 1) {indexValue = img.length;}
   for(i = 0; i < img.length; i++) {
      img[i].style.opacity = "0";
   }
   img[indexValue - 1].style.opacity = "1";
}

var sliders = document.querySelectorAll('.span');

sliders.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
         sliders.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active');
    });
});