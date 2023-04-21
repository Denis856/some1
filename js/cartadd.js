
var basket = document.querySelector('.header__basket');
var close = document.querySelector('.cart__close');

basket.onclick = () => {
   document.querySelector('.cart').classList.add('active');
   document.querySelector('.header').classList.add('active');
   document.querySelector('body').classList.add('active');
};
close.onclick = () => {
   document.querySelector('.cart').classList.remove('active');
   document.querySelector('.header').classList.remove('active');
   document.querySelector('body').classList.remove('active');
};

// next

if (document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded', ready);
} else {
   ready();
}

function ready(){
   var removeCartBtns = document.getElementsByClassName('cart__delete');
   for (var i = 0; i < removeCartBtns.length; i++){
      var button = removeCartBtns[i];
      button.addEventListener('click', removeCartItem);
   }
   // Quantity
   var quantityInputs = document.getElementsByClassName('cart__quantity');
   for (var i = 0; i < quantityInputs.length; i++){
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
   }
   // Add to cart
   var addCart = document.getElementsByClassName('item1__btn');
   for (var i = 0; i < addCart.length; i++){
      var button = addCart[i];
      button.addEventListener('click', addCartClicked);
   }
   // buy button work
   document.getElementsByClassName('buy')[0].addEventListener('click', buyButtonClicked);
}

// bue button

function buyButtonClicked(){
   document.querySelector('.show2').classList.add('active');
   var cartContent = document.getElementsByClassName('cart__content')[0];
   while(cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
   }
   updatetotal();
}
var close3 = document.querySelector('.text003');
close3.addEventListener('click', ()=>{
   document.querySelector('.show2').classList.remove('active');
});

// remove cart

function removeCartItem(event){
   var buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   updatetotal();
}

// quantity changes

function quantityChanged(event){
   var input = event.target;
   if(isNaN(input.value) || input.value <= 0){
      input.value = 1;
   }
   updatetotal();
}

//  add to cart

function addCartClicked(event){
   var button = event.target;
   var shopProducts = button.parentElement;
   var title = shopProducts.getElementsByClassName('item1__title')[0].innerText;
   var price = shopProducts.getElementsByClassName('item1__price')[0].innerText;
   var productImg = shopProducts.getElementsByClassName('item1__img')[0].src;
   addProductToCart(title, price, productImg);
   updatetotal();
}

function addProductToCart(title, price, productImg){
   var cartShopBox = document.createElement('div');
   cartShopBox.classList.add('cart__box');
   var cartElemItems = document.getElementsByClassName('cart__content')[0];
   var cartItemsNames = cartElemItems.getElementsByClassName('cart__title1');
   for (var i = 0; i < cartItemsNames.length; i++){
      if(cartItemsNames[i].innerText == title) {
         document.querySelector('.show1').classList.add('active');
         document.querySelector('.shadow').classList.add('active');
         document.querySelector('body').classList.add('active');
         return;
      }
   }

var close2 = document.querySelector('.text002');
close2.addEventListener('click', ()=>{
   document.querySelector('.show1').classList.remove('active');
   document.querySelector('.shadow').classList.remove('active');
   document.querySelector('body').classList.remove('active');
});

var cartBoxContent = `
      <img src="${productImg}" class="cart__img">
      <div class="detail_box">
         <div class="cart__title1">${title}</div>
         <div class="cart__price1">${price}</div>
         <input type="number" value="1" class="cart__quantity">
      </div>
      <button class="cart__delete">DT</button>
`;

cartShopBox.innerHTML = cartBoxContent;
cartElemItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart__delete')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart__quantity')[0].addEventListener('change', quantityChanged);
}

// update total


function updatetotal(){
   var cartContent = document.getElementsByClassName('cart__content')[0];
   var carboxes = cartContent.getElementsByClassName('cart__box');
   document.querySelector('.count').innerHTML = carboxes.length;
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('cart__price1')[0];
      var quantityElem = cartBox.getElementsByClassName('cart__quantity')[0];
      var quantity = quantityElem.value;
      var price = parseFloat(priceElem.innerText.replace("₽", ""));
      total = total + (price * quantity);
   }
      // if price has some cents
      total = Math.round(total * 100) / 100;

      document.getElementsByClassName('cart__price')[0].innerText = '₽' + total;
   
}