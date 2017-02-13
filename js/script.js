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


var btnSend = document.querySelector(".btn-map");
var send = document.querySelector(".popup-send");
var closeSend = document.querySelector(".popup-close");
var form = send.querySelector("form")
var userName = document.querySelector("[name=user-name]");
var userEmail = document.querySelector("[name=user-email]");
var nameStorage = localStorage.getItem("userName")
var emailStorage = localStorage.getItem("userEmail")

btnSend.addEventListener("click", function(event) {
  event.preventDefault();
  send.classList.add("popup-send-show");

    if (nameStorage) {
      userName.value = nameStorage;
      userEmail.focus();
    } else {
      userName.focus();
    }
  userName.focus();
  });

form.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail) {
    event.preventDefault();
  } else {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("user-email", userEmail.value);
  }
});

closeSend.addEventListener("click", function(event) {
  event.preventDefault();
  send.classList.remove("popup-send-show");
});
