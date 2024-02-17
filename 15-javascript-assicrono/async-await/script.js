// ASYNC AWAIT
// A palavra chave async indica que a função possui partes assícronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8

// A diferença etre fetch e async é só que a sintaxe é melhor, mas fazem a mesma coisa

async function puxarDados() {
  try {
    const dadosResponse = await fetch("./dados.json");
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  } catch (erro) { //qualuqer erro que tiver ele vem para essa variável erro
    console.log(erro);
  }
}

puxarDados();
