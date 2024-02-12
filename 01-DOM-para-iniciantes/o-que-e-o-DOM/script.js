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

h1Selecionado.style.color = "red";

const bodySelectionado = document.querySelector("body");
console.log(bodySelectionado);
