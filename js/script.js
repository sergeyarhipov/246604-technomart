var buy = document.querySelectorAll(".btn-buy");
var basket = document.querySelector(".popup-basket");
var closeBasket = document.querySelector(".cancel-popup");

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function(event) {
    event.preventDefault();
    basket.classList.add("popup-basket-show");
  });
}

closeBasket.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.remove("popup-basket-show");
  });
