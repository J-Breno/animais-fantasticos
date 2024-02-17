// API
// A = Aplication - Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamos utilzando a API do browser para se comunicar com a API do servidor
// objeto string, qualquer coisa que você vai conseguir interagir por comandos

// P = Programming - Programação, isso significa que o comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.
// que acontece uma coisa atrás do outro, e você que diz o que acontece, e você ainda sabe o resultado

// I = Interface - A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'ViOlãO'.lowerCase() é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito/resposta
// são os métodos, forma de interagir com ele

// A api não é o retorno, o arquivo JSON retornado, aquilo é a resposta. a api seria tipo a url, e a resposta seria o arquivo JSON
// classlist é uma api, map, foreach também é uma api
// http = é o protocolo para enviar e receber dados, o https é o seguro

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: '{"title":"JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=uft-8",
  },
};

fetch(url, options)
  .then((r) => r.json())
  .then((json) => console.log(json));

// Headers

// Cache-Control
// Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

// Content-Type
//Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalemnte em métodos posto e put

// CORS - uma forma de falar para o servidor se outras origins podem fazer um get em você