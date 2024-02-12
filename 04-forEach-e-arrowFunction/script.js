const imgs = document.querySelectorAll("img");
imgs.forEach((item, index, array) => {
  console.log(item);
});

const titulos = document.getElementsByClassName("titulo");

const tituloArray = Array.from(titulos);

tituloArray.forEach((item) => console.log(item));

// arrow function -> Sintaxe curta em relação a function expression. Basta remover a palavra chave function a fat arrow => após os argumentos
