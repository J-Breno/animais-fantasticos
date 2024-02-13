const linkInterno = document.querySelectorAll('a[href^="#"]');

linkInterno.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    linkInterno.forEach((item) => {
      item.classList.remove("ativo");
    });

    item.classList.add("ativo");
  });
});

const elementos = document.querySelectorAll("body *");

elementos.forEach((item, index, array) => {
  item.addEventListener("click", (event) => event.currentTarget.remove());
});
function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.style = "font-size: 200%";
  }
  if (event.key === "a") {
    document.documentElement.style = "font-size: 100%";
  }
}

window.addEventListener("keydown", handleClickT);
