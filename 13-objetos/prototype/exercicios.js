function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const pessoa1 = new Pessoa("João", "Breno", 19);
console.log(pessoa1.idade);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
// para eu saber quem é o constructor de algo é só eu usar asism breno.constructor.name
console.log(pessoa1.constructor.name);

const li = document.querySelector("li");
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();
const con = li.hidden.constructor.name; // String

