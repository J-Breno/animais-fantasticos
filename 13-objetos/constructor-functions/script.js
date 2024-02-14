console.log(
  "Veja que o novo objeto criado só tem acesso as variáveis que tem o this"
);

console.log(
  "------------- Fazendo Manipulacao no dom com objetos ---------------------"
);

function Dom(seletor) {
  this.element = function element() {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}
const ul = new Dom("ul");
console.log(ul.element());
ul.ativar("ativar");
console.log(ul.element());
const lastLi = new Dom("li:last-child");
console.log(lastLi.element());
lastLi.ativar("kamehameha");
