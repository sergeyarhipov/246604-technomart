var buy = document.querySelectorAll(".btn-buy");
var basket = document.querySelector(".popup-basket");
var closeBasket = document.querySelector(".cancel-popup");

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function(event) {
    event.preventDefault();
    basket.classList.add("popup-basket-show");
    basket.classList.add("popup-open");
  });
}

closeBasket.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.remove("popup-basket-show");
  basket.classList.remove("popup-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (basket.classList.contains("popup-basket-show")) {
      basket.classList.remove("popup-basket-show");
      basket.classList.remove("popup-open");
    }
  }
});


var btnMap = document.querySelector(".contacts-img");
var map = document.querySelector(".popup-map");
var closeMap = document.querySelector(".map-close");

btnMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("popup-map-show");
  map.classList.add("popup-open");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.remove("popup-map-show");
  map.classList.remove("popup-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("popup-map-show")) {
      map.classList.remove("popup-map-show");
      map.classList.remove("popup-map-show");
    }
  }
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
  send.classList.add("popup-open");

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
  send.classList.remove("popup-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (send.classList.contains("popup-send-show")) {
      send.classList.remove("popup-send-show");
      basket.classList.remove("popup-basket-show");
    }
  }
});

var btnDelivery = document.querySelector(".btn-delivery");
var btnGuarantee = document.querySelector(".btn-guarantee");
var btnCredit = document.querySelector(".btn-credit");
var servicesDelivery1 = document.querySelector(".services-delivery1");
var servicesDelivery2 = document.querySelector(".services-delivery2");
var servicesDelivery3 = document.querySelector(".services-delivery3");

btnDelivery.addEventListener("click", function(event) {
  event.preventDefault();

  if (btnGuarantee.classList.contains("btn-services-active")) {
    btnGuarantee.classList.remove("btn-services-active");
    btnGuarantee.classList.add("btn-not-active");
  }

  if (btnCredit.classList.contains("btn-services-active")) {
    btnCredit.classList.remove("btn-services-active");
    btnCredit.classList.add("btn-not-active");
  }

  if (servicesDelivery2.classList.contains("services-show")) {
    servicesDelivery2.classList.remove("services-show");
    servicesDelivery2.classList.add("services-not-show");
  }

  if (servicesDelivery3.classList.contains("services-show")) {
    servicesDelivery3.classList.remove("services-show");
    servicesDelivery3.classList.add("services-not-show");
  }

  btnDelivery.classList.remove("btn-not-active");
  btnDelivery.classList.add("btn-services-active");
  servicesDelivery1.classList.remove("services-not-show");
  servicesDelivery1.classList.add("services-show");
});

btnGuarantee.addEventListener("click", function(event) {
  event.preventDefault();

  if (btnDelivery.classList.contains("btn-services-active")) {
    btnDelivery.classList.remove("btn-services-active");
    btnDelivery.classList.add("btn-not-active");
  }

  if (btnCredit.classList.contains("btn-services-active")) {
    btnCredit.classList.remove("btn-services-active");
    btnCredit.classList.add("btn-not-active");
  }

  if (servicesDelivery1.classList.contains("services-show")) {
    servicesDelivery1.classList.remove("services-show");
    servicesDelivery1.classList.add("services-not-show");
  }

  if (servicesDelivery3.classList.contains("services-show")) {
    servicesDelivery3.classList.remove("services-show");
    servicesDelivery3.classList.add("services-not-show");
  }

  btnGuarantee.classList.remove("btn-not-active");
  btnGuarantee.classList.add("btn-services-active");
  servicesDelivery2.classList.remove("services-not-show");
  servicesDelivery2.classList.add("services-show");
});

btnCredit.addEventListener("click", function(event) {
  event.preventDefault();

  if (btnDelivery.classList.contains("btn-services-active")) {
    btnDelivery.classList.remove("btn-services-active");
    btnDelivery.classList.add("btn-not-active");
  }

  if (btnGuarantee.classList.contains("btn-services-active")) {
    btnGuarantee.classList.remove("btn-services-active");
    btnGuarantee.classList.add("btn-not-active");
  }

  if (servicesDelivery1.classList.contains("services-show")) {
    servicesDelivery1.classList.remove("services-show");
    servicesDelivery1.classList.add("services-not-show");
  }

  if (servicesDelivery2.classList.contains("services-show")) {
    servicesDelivery2.classList.remove("services-show");
    servicesDelivery2.classList.add("services-not-show");
  }

  btnCredit.classList.remove("btn-not-active");
  btnCredit.classList.add("btn-services-active");
  servicesDelivery3.classList.remove("services-not-show");
  servicesDelivery3.classList.add("services-show");
});
