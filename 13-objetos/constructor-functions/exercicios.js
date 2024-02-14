// transforme o objeto abaixo  em um Constructor Function
/*
const pessoa = {
  nome: "Nome da Pessoa",
  idade: 0,
  andar() {
    console.log(`${nome} andou`);
  },
};*/
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${this.nome} andou`);
  };
}
// Crie 3 pessoas, joão - 20 anos; maria - 25 anos; Bruno 15 anos;
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
// crie um constructor Function (dom) para manipulação de lista de elementos do Dom. Deve conter as seguintes propriedades e métodos
//
//elements, retorna nodeList como oselementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = function (classe) {
    this.elements.forEach((item) => item.classList.add(classe));
  };
  this.removeClass = function (classe) {
    this.elements.forEach((item) => item.classList.remove(classe));
  };
}

const li = new Dom("li");
console.log(li.elements());
li.addClass("hello");
const lastLi = new Dom("li:last-child");
lastLi.removeClass("hello");
