const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector(".copy");
copy.appendChild(cloneMenu);

const dt = document.querySelector("dl dt");
console.log(dt);

console.log(dt.nextElementSibling);

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
