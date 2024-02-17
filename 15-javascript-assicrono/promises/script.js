// Promisses é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado. então ela pode ser tanto resolvida quanto rejeitada. em uma promisse você sempre vai passar uma função de callback

// O poder das promisses está no método then() do seu protótip. O Callback deste método só será ativado quando a promisse for resolvida. O argumento do callback será o valor passado na função resolve. se resolveu a promessa o then ativa

// As promessas não fazem sentido quando o código executado dentro da mesma é apenas código sicrono. O poder está na execução de código assícrono que executará o resolve() ao fim dele.

// O método then retorna outra promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior. será sempre o valor retornado

const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Breno", idade: 19 });
    }, 1000);
  } else reject(Error("Um erro ocorreu na promisses"));
});

// promessa.then((resolucao) => console.log(resolucao)); // esse parâmetro é o valor de resolve
const retorno = promessa
  .then((resolucao) => {
    resolucao.profissao = "Designer";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("Acabou!");
  });
console.log(retorno);

// o catch() serve para quando a promisse for rejeitada
// finnaly() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
// promisse.all() retornará uma nova promisse assim que todas as promisses dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é um array com as respostas de cada promise. ele recebe um array no parâmetro, essa promessa dele só vai ser resolvida se todos os itens do array forem aceitos, ou se pelo menos um for rejeitado

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1000);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});

// Promise.race() = Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeria resolivda, no caso seria a primeira que executasse primeiro ia entrar no race, ia ser tipo uma corrida de promisse