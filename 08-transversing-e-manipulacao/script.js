const h1 = document.querySelector("h1");
const animaisLista = document.querySelectorAll(".animais-descricao");

h1.innerHTML;
h1.innerText;
animaisLista.innerHTML;
animaisLista.innerText;
// h1.outerHTML = "<p>Animais Fantasticos</p>"; // ele modifica, diferente do inner, o inner somente adiciona

// Transversing seria eu navegar pelo dom, como navegar pelo dom
const lista = document.querySelector(".animais-lista");
console.log(lista.parentElement); // pai
console.log(lista.parentElement.parentElement); // pai do pai

console.log(lista.previousElementSibling); // pegar o elemento acima
console.log(lista.nextElementSibling); // pega o elemento abaixo]

const newLista = Array.from(lista);

newLista.forEach((item) => {
  console.log(item);
});
const titulo = document.querySelector(".titulo");

// lista.appendChild(titulo);
