const pessoa = new Object({
  nome: "Andre",
});

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return "Buzinou";
  },
};

const honda = Object.create(carro); // mesmo coisa se usar um new Carro

honda.marca = "Honda";
console.log(honda.acelerar()); // lembra ele primeiro verifica se o objeto tem um valor, se não tiver ele olha no prototipo

const fiat = Object.create(carro).init("Fiat");
console.log(fiat.acelerar());

// Sempre que você for fazer algo que seja padrão, e que ele não seja alterado, utilize assim, garante segurança
const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  // todos os valores começam com o padrão false, ou seja, só preciso colocar se eu quiser mudar para true
  rodas: {
    // value: 2,
    // configurable: false, // isso faz que ele não possa ser alterado, isso tanto na escrita como na deleção
    // writable: true, // isso permite que ele seja alterado o vvalor, mas não possa ser deletado,
    get() {
        return this._rodas; // isso aqui vai pegar o valor, no começo vai está undefined
    },
    set(valor) {
        this._rodas = valor * 2 + ' Total Rodas'; // isso aqui vai retorna depois o valor se você quiser saber rodas
    },
  },
});
