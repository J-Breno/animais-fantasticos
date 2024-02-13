const carro = {
  marca: "Marca",
  preco: 0,
};
console.log("----------------");
const honda = carro; // isso dá um problema, pois se você mudar honda, ele vai mudar o objeto principal carro também
honda.marca = "Honda";
honda.preco = 2000;
console.log(honda);
const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;
console.log(fiat);
console.log("-----------------");
console.log("Objeto carro: ", carro);
console.log("Objeto carro[fiat]: ", fiat);
console.log("Objeto carro[honda]: ", honda);
console.log();
console.log("Viu, o objeto carro principal foi mudado");
console.log();

console.log("----------------");
console.log("Função construtora: ");
// é uma função normal, ou seja, Funções contrutoras que são responsáveis por construir novos objetos sempre que chamamos a mesma. ela deve PascalCase

function Carro(marca, preco) {
  this.marca = marca; // o this vai fazer referência ao objeto, exemplo se eu criar um carro chamado papagaio, seria o mesmo que eu tivesse escrevendo papagaio.marca;
  this.preco = preco;
}
console.log("--------------");
console.log("Carrro constructor function: ");
console.log(Carro);
console.log("-----------------");
const ford = new Carro("Ranger", 220000); // eu estou fazendo um objeto chamado ford que vem de honda
honda.teste = "oi";
honda.andar = () => console.log("andou"); // se eu quiser que os outros objetos que forem criando venham com os atributos e os métodos dessa função construtora, eu devo criar nela e não no proprio objeto
// só devo criar no próprio objeto se eu quiser fazer uma coisa única para ele
console.log(ford);
console.log("---------------");
const chevrolet = new Carro("S10", 240000);
console.log(chevrolet);
console.log("----------------");
console.log("viu, agora ninguém foi mudado");
console.log(`Construtor Carro: ${Carro}`);
console.log(`Objeto criado ford: ${JSON.stringify(ford)}`);
console.log(`Objeto criado Chevrolet: ${JSON.stringify(chevrolet)}`);
console.log();
console.log("----------------------------");
console.log();
// esse new tem três etapas, primeiro ele cria um objeto vazio novoCarro = {}
// vai definir o protótipo novoCarro.prototype = Carro.prototype
//aponta a variável this para o objeto this = novoCarro
// executa a função substituindo o this pelo objeto; novoCarro.marca = marca; novoCarro.preco = 0;
// retornar o novo objeto; return novoCarro = {novoCarro.marca ="marca", novoCarro.preco = 0}
const novoCarro = new Carro("Marca nova", "Valor novo");
console.log(novoCarro);