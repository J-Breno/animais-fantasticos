// O setTimeOut precisa que todo o site seja terminado para ele ser executado
// um setTimeOut não espera o outro ocorrer para ele ocorrer, todos ocorrem no mesmo tempo
// a arrow function ela não usa o window como this, mas sim usa o pai da função
// o set interval é um loop, executa direto

// podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável, vai armazenar o seu id
// eu posso refatorar minha calculadora, quando eu clicava em start variás vezes no cronometro, ele ficava muito rápido, então eu posso fazer com que assim que eu fizer a primeiro click, ele fique disabled, e depois se eu quiser voltar, é quando a pessoa clicar em pausar, ai eu remove esse atributo disable
const contarAte10 = setInterval(callback, 2000);

let i = 0;
function callback() {
    console.log(i++);
    if( i > 10 ) {
        clearInterval(contarAte10);
    }
}