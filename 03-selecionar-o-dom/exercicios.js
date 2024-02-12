// retorne no console todas as imagens do site
const imgSite = document.querySelectorAll("img");
console.log(imgSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll(
  'img[src^="/03-selecionar-o-Dom/img/imagem"]'
);
console.log(imagem);

// selecione todos os links internos onde href começa com #
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
// selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector(".animais-descricao");
const primeiroH2 = animaisDescricao.querySelector("h2");

/**
 * ou
 * .animais-descricao h2
 */
// Selecione o último p do site

const todosOsP = document.querySelectorAll("p");
const newArrP = Array.from(todosOsP);
console.log(newArrP[newArrP.length - 1]);
