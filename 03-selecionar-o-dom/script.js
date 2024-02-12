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

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiroUl.classList.add("grid-section");
console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach((gridItem, index, array) => {
  console.log(gridItem);
});

const arrayGrid = Array.from(gridSectionNode);

console.log(gridSectionNode);
console.log(arrayGrid);

const newArr = arrayGrid.map((item) => {
  return item;
});

const newArr2 = newArr.shift();
console.log(newArr2);

const fromArr = Array.from(gridSectionHTML);

fromArr.forEach((item) => {
  console.log(item);
});
