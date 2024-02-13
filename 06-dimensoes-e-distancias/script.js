const listaAnimais = document.querySelector(".animais-lista");

console.log(listaAnimais.clientHeight); // heigth + padding
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro do scroll
console.log(listaAnimais.offsetLeft);
console.log(listaAnimais.offsetTop);

const section = document.querySelector(".animais");

console.log(section.offsetTop); // distância do topo do elemento para o topo da página
console.log(section.offsetLeft); // disntância do quanto esquerdo do elemento para o quanto esquerdo da página
console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.scrollX,
  window.scrollY
);

const small = window.matchMedia("(max-width: 600px)").matches;
if (small) {
  console.log("Usuário mobile");
} else {
  console.log("USuário desktop");
}
