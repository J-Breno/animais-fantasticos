const menu = document.querySelectorAll(".menu");

console.log(menu.classList);
menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");

console.log(animais.attributes);

console.log(animais.attributes["data-js"]); // tem que ser selecionado dentro de uma string

const img = document.querySelector("img");
console.log(img.getAttribute("src"));
console.log(img.hasAttribute("alt"));
