const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de cliente",
    valor: "R$ 49",
  },
];
let valor = 0;
transacoes.forEach((item) => {
  const comecaComTaxa = item.descricao.slice(0, 4) === "Taxa";

  if (comecaComTaxa) valor += +item.valor.slice(3);
});
console.log(valor);
const html = `<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

console.log(html.split("span").join("a"));

const valor1 = 19.384;
console.log(
  valor1.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

const aleatorio = Math.ceil(Math.random() * (2000 - 1050)) + 1050;
console.log(aleatorio);

const num = "4, 5, 20, 8, 9";
const num1 = num.split(",");
console.log(Math.max(...num1));
var l = 0;
const listaPessoas = ["R$ 59,99", "R$ 100,222", "R$ 230", "R$ 200"];
listaPessoas.forEach((item) => {
  let novoItem = item.slice(3);
  let va1 = +novoItem.replace(",", ".");
  l += va1;
});
console.log(l);
