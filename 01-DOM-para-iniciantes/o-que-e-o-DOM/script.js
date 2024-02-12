//window.alert("Issmo mesmo");

const href = window.location.href;

if (
  href ===
  "http://127.0.0.1:5501/01-DOM-para-iniciantes/o-que-e-o-DOM/index.html"
) {
  console.log("é igual");
} else {
  console.log("não é igual");
}

const h1Selecionado = document.querySelector("h1");

const bodySelectionado = document.querySelector("body");
console.log(bodySelectionado);

h1Selecionado.style.cursor = "pointer";

console.log(h1Selecionado.classList);

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

h1Selecionado.addEventListener("click", trocaCorH1);

function trocaCorH1() {
  if (h1Selecionado.classList.contains("azul")) {
    h1Selecionado.classList.remove("azul");
    h1Selecionado.style.color = "black";
  } else {
    h1Selecionado.classList.add("azul");
    h1Selecionado.style.color = "blue";
  }
}
