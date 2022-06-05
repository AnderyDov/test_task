"use strict";
let carts = document.querySelectorAll(".partners-logotip__img");
let notic = document.querySelector(".notic");
let notic__name = document.querySelector(".notic__name");
let notic__img = document.querySelector(".notic__img");

window.onload = () => {
  let disp = window.innerWidth;
  carts.forEach((item) => {
    let cel = item.src.split("_")[0];
    if (disp <= 1170 && disp > 768) {
      notic__img.src = "./images/photo.jpg";
      notic__name.style.display = "block";
      item.src = cel + "_plan.png";
    } else if (disp > 1170) {
      notic__img.src = "./images/photo.jpg";
      notic__name.style.display = "block";
      item.src = cel + "_desc.png";
    } else if (disp <= 768) {
      notic__img.src = "./images/user.png";
      notic__name.style.display = "none";
      item.src = cel + "_mob.png";
    }
  });
};

window.onresize = () => {
  let disp = window.innerWidth;
  carts.forEach((item) => {
    let cel = item.src.split("_")[0];
    if (disp <= 1170 && disp > 768) {
      notic__img.src = "./images/photo.jpg";
      notic__name.style.display = "block";
      item.src = cel + "_plan.png";
    } else if (disp > 1170) {
      notic__img.src = "./images/photo.jpg";
      notic__name.style.display = "block";
      item.src = cel + "_desc.png";
    } else if (disp <= 768) {
      notic__img.src = "./images/user.png";
      notic__name.style.display = "none";
      item.src = cel + "_mob.png";
    }
  });
};
