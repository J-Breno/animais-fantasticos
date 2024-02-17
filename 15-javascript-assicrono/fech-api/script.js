// Fetch API - permite fazermos requisições HTTP através do fetch(). Este método retorna a resolução de uma promise. Podemos então utilizar o then para interagirmos com a sua resposta, que é um objeto do tipo Response, o que é retornado dessa fetch é uma promise

const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Respose. Estes retornam outras promises.
// blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blog gera um URL único.

const imagem = fetch("./spring-3.svg");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    console.log(blobUrl);
    const imagemNoDom = document.querySelector('img')
    imagemNoDom.src = blobUrl;
    console.log(body);
  });
