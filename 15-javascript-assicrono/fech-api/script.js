// Fetch API - permite fazermos requisições HTTP através do fetch(). Este método retorna a resolução de uma promise. Podemos então utilizar o then para interagirmos com a sua resposta, que é um objeto do tipo Response, o que é retornado dessa fetch é uma promise

const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector('h1').innerText = titulo.innerText;
    
});
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Respose. Estes retornam outras promises.
