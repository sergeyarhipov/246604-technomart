var buy = document.querySelector(".btn-buy");
var basket = document.querySelector(".popup-basket");
var closeBasket = document.querySelector(".cancel-popup");

buy.addEventListener("click", function(event)
  {
event.preventDefault();
basket.classList.add("popup-basket-show");
});

closeBasket.addEventListener("click", function(event)
  {
event.preventDefault();
basket.classList.remove("popup-basket-show");
});
