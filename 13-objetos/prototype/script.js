// Prototype - sempre está ligado as funções, todas as funções vão ter a propriedade prototype, e essa propriedade é um objeto que retorna dela, prototype está sempre somente ligado a função

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.comeu = function comeu() {
    return `${this.nome} comeu`;
  };
  this.eMaiorDeIdade = function eMaiorDeIdade() {
    if(this.idade > 18) {
        return true;
    }
    else {
        return false;
    }
  }
}
const breno = new Pessoa("Breno", 19);
console.log(breno.prototype); // vai da undefined, pois breno é um objeto e prototype está ligado somente a função
console.log(Pessoa.prototype);
Pessoa.prototype.andar = function andar() {
  // ele primeiro procura no objeto para depois ir no prototype, o bom de usar o prototype, é que ele só vai ser instanciado apenas uma vez, na vez que for usado, já se fosse usar na propria constructor function ele ia ser instanciado todas as vezes que criasse um novo objeto
  return this.nome + " andou";
};

Pessoa.prototype.nadar = function nadar() {
  return this.nome + " nadou";
};
console.log(Pessoa.prototype);
console.log(breno.andar());
console.log(breno.nadar());
// Lembrando o prototype é apenas uma função ou um propriedade
//x.__proto__ é o meu objeto do prototype criado
console.log(breno.__proto__.andar()); // nunca use assim
const joao = new Pessoa("João", 19);

// só lembrando é bom usar o prototype, pois sempre que você for usar o Constructor Function para criar novos objetos, se você colocar métodos ou funções dentro dele, ele sempre que for criar algo novo, ele vai instanciar nos novos objetos sempre, supondo se eu criar 13 pessoas, ai eu constuo um objeto chamado cadastro, e nesse cadastro eu faço um método login, se eu for usar esse método nesses 13 pessoas, ele vai criar 13 métodos diferentes que fazem a mesma coisa para os 13 objetos criados, ele vai criar 13 locais na memória difernte, já se eu usar um prototype, ele não vai ficar instanciando uma nova função sempre, e colocando em locais na memória diferentes, ele sempre vai usar  a função que sempre vai está no mesmo local na memória sempre, então resumindo o prototype é um objeto que o meu novo objeto que vai ser criado vai herdar

// vamos para mais um exemplo:
/**
 * Se eu criar um objeto chamdo souza, sendo instanciado pelo Constructor Function que se chama pessoa. E se eu
 * chamo o método correr dele, ele primeiro vai olhar se o objeto souza vai ter esse método, que pode ter sido
 *  instanciado a ele pela constructor function Pessoa;
 * Se ele não achar nele, ai sim ele vai olhar no prototype, então resumidamente, o método ou propriedade criada com
 * prototype, só é instanciada, se ela for chamada, e se no objeto(souza) não tiver já ela, ai o objeto breno vai herdar do prototype. Então se eu colocar um método chamado comer no próprio Constructor Function, e criar um o
 * bjeto melo e outro objeto luciane, o método comer vai ter sido criado duas vezes na memória, porém se eu for usar
 * o prototype não, então no caso com o prototype, tanto o objeto luciante quanto o objeto melo vão ter acesso ao
 * método comer, pela referência dele
 */

console.log("vá no console e olhe o prototype de melo e luciane");

const melo = new Pessoa("Melo", 52);
const luciane = new Pessoa("Luciane", 48);
console.log(luciane);
console.log(melo);
console.log(melo.prototype === luciane.prototype); // preste atença isso vai dar true
console.log(melo.__proto__ === luciane.__proto__); // também vai dar true
console.log(melo.comeu === luciane.comeu); // isso vai da false
console.log(melo.andar === luciane.andar); // vai dar true

// O prototype é tanto o getter quando um setter
console.log(Date.prototype); // se eu olhar isso no console do devTools ele vai me retornar todos os ´métodos e funções
// quando eu for usar class não vai ser necessário fazer todos esses códigos as classes fazem isso automáticamente

// Objetos, Funções, Números, String e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessados pelo tipo de dado
console.log('Olhe no console');
const pais = new String('Brasil');
const cidade = 'caucaia';
console.log(cidade.length)
console.log(pais.length)

const lista = ['ola', 'hello', 'oi'];

const newLista = Array.prototype.slice.call(lista);
console.log(lista === newLista); //são diferentes, principalmente os seus prototypes, temos o from, que é direto do  array e faz a mesma coisa
Array.from(lista);
console.log("Veja a diferença")
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype))

// Lembre-se apenas os métodos do prototype que são herdados, o from não é do prototype então não é herdado

console.log([1, 2, 3].join(' ')); //vai function
// console.log([1, 2, 3].from()); // não vai funcionar, vou comentar para não ficar com o errro na tela
console.log(Object.prototype.toString.call([])) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call('asc')) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call(123)) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call(function() {})) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call({})) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call(null)) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call(undefined)) // vai mostrar precisamente o que ele é
console.log(Object.prototype.toString.call(breno.eMaiorDeIdade())) // vai mostrar precisamente o que ele é, preste ateção a função retorna verdadeiro ou falso
console.log(Object.prototype.toString.call(breno.eMaiorDeIdade)) // vai mostrar precisamente o que ele é, preste ateção esse não esta sendo executado, não retorna nada

// todos ten constructor, menos undefined e null