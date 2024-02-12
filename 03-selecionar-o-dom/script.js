// selecionando pelo ID

const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");
console.log(animaisSection);
console.log(contatoSection);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

// retornar o primeiro elemento de acordo com os selectores css
const animais = document.querySelector(".animais");
console.log(animais);

const primeiroUl = document.querySelector("ul");
const navItem = primeiroUl.querySelector("li");

console.log(navItem);

const linkInterno = document.querySelectorAll('[href^="#"]'); // retornar todos os elementos que tiverem dentro dos meus requisistos, e ele vem em uma nodeList
console.log("link interno = ", linkInterno);
// Retornar null se caso algo não exista

const naoExiste = document.getElementById("teste");
console.log(naoExiste);
