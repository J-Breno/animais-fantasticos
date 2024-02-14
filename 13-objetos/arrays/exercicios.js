// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
/*const h1 = document.querySelectorAll('h1');
const p = document.querySelectorAll('p');
const aulas = document.querySelectorAll('.aulas');
const horas = document.querySelectorAll('.horas');
const html = [];

h1.forEach((item, index) => {
    html.push({
        titulo: item.innerText,
        descricao: p[index].innerText,
        aulas: aulas[index].innerText,
        horas: horas[index].innerText
    });
})
console.log(html)*/

const cursos = document.querySelectorAll(".cursos");
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((item) => {
  const titulo = document.querySelector("h1").innerText;
  const descricao = document.querySelector("p").innerText;
  const aulas = document.querySelector(".aulas").innerText;
  const horas = document.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetosCursos);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter((n) => n > 100);
console.log(maioresQue100);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixo = instrumentos.some((n) => n === "Baixo");
console.log(baixo);
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
let total = 0;
compras.forEach((item) => (total += +item.preco.slice(3).replace(",", ".")));

console.log(total);
