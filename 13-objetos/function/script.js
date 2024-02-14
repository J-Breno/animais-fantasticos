// toda função é criada com o construtor function e por isso herda as suas propriedades e métodos
// legth retorna o total de parâmetros
// o call puramente ele executa uma função, o primeiro parâmetro é o this, o resto é os parâmetros
// o this dentro de uma função é o window, o this você vai podr qual é o this dessa função, nesse call, eu já posso passar um objeto feito, ou eu posso criar um proprio objeto nele, normalmente você vai criar um objeto antes
// esse call é para todas as funcôes, forEach, map, as que eu crio etc
// a diferença do call para o apply é que o call não precisa pegar seus valores separados, ele pega por um array

function descricaoCarro(velocidade) {
    console.log(this);
    console.log(this.marca + ' ' + this.ano, ' ' + velocidade);
}
descricaoCarro.call({marca: 'Hilux', ano: 2025}, 1000);

const numeros = [32, 423, 1,34,59, 32,];

console.log(Math.max.apply(null, numeros))