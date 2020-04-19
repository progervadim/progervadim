
$(function () {
    var Grid = function (width, height) {};
    const cartButton = document.querySelector("#cart-button");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");
    const remove = document.querySelector(".remove");
    
    cartButton.addEventListener("click", function (event) {
      modal.classList.add("is-open");
    });
      close.addEventListener("click", function (event) {
        modal.classList.remove("is-open");
    });
    remove.addEventListener("click", function (event) {
      modal.classList.remove("is-open");
  });
    });
    
  