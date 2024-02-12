const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => item.classList.add("ativo"));

itensMenu.forEach((item, index) => {
  if (index < 1) {
    item.classList.remove("ativo");
  }
});

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => console.log(img.hasAttribute("alt")));

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute("href", "www.google.com.br");
