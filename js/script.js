const menuIcon = document.querySelector(".mobile-menu>i");
menuIcon.addEventListener("click", function () {
  const nav = document.querySelector("header nav");
  nav.classList.add("active");
  document.querySelector(".menu-background-shadwo").classList.add("full-opacity");
});

function closemenu() {
  const nav = document.querySelector("header nav");
  nav.classList.remove("active");
  document.querySelector(".menu-background-shadwo").classList.remove("full-opacity");
}
const closeIcon = document.querySelector("header .close");
closeIcon.addEventListener("click", closemenu);
document
  .querySelector(".menu-background-shadwo")
  .addEventListener("click", closemenu);

document.querySelector('[data-serial="1"]').classList.add("full-opacity");

const dataSerials = [];

document.querySelectorAll("[data-serial]").forEach(function (image) {
  const data = image.getAttribute("data-serial");
  dataSerials.push(Number(data));
});

const min = dataSerials[0];
const max = dataSerials[dataSerials.length - 1];
console.log(min, max);



const nextImage = function () {
  const selectedImage = document.querySelector(".full-opacity");

  const data = selectedImage.getAttribute("data-serial");

  document.querySelector(`[data-serial="${data}"]`).classList.remove("full-opacity");

  if (Number(data) !== max) {
    const nextBanner = document.querySelector(
      `[data-serial="${Number(data) + 1}`
    );

    nextBanner.classList.add("full-opacity");
  } else {
    const nextBanner = document.querySelector(`[data-serial="${min}"`);

    nextBanner.classList.add("full-opacity");
  }
}

const prevImage = function () {
  const selectedImage = document.querySelector(".full-opacity");

  const data = selectedImage.getAttribute("data-serial");

  document.querySelector(`[data-serial="${data}"]`).classList.remove("full-opacity");

  if (Number(data) !== min) {
    const nextBanner = document.querySelector(
      `[data-serial="${Number(data) - 1}`
    );

    nextBanner.classList.add("full-opacity");
  } else {
    const nextBanner = document.querySelector(`[data-serial="${max}"`);

    nextBanner.classList.add("full-opacity");
  }
}

document.querySelector("#next").addEventListener("click", nextImage);

document.querySelector("#prev").addEventListener("click", prevImage);

setInterval(nextImage,6*1000)