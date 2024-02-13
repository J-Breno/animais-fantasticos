const img = document.querySelector("img");
console.log(img.offsetHeight);
const imgs = document.querySelectorAll("img");
let soma = 0;
imgs.forEach((item) => {
  soma += item.offsetWidth;
  console.log();
});
console.log(soma);

const aS = document.querySelectorAll("a");

aS.forEach((item) => {
  if (item.offsetHeight >= 48 && item.offsetWidth >= 48) {
    console.log("recomendado");
  } else {
    console.log("Não recomendado");
  }
});
const menuMobile = document.querySelector(".menu");
console.log(window.innerWidth);
if (window.innerWidth < 720) {
  menuMobile.classList.add("menu-mobile");
}
