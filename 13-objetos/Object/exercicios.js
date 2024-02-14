// Crie uma função que verifica
// corretamente o tipo de dado
function whatItIsType(objecto) {
    return Object.prototype.toString.call(objecto);
}
console.log(whatItIsType('Ola'));
console.log(whatItIsType(2));
console.log(whatItIsType({}));
console.log(whatItIsType(function(){}));
console.log(whatItIsType(true));


// Crie um objeto quadrado com propriedades lados e torne ele imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        // vou colocar os valores só para treino, mas não é necessário
        writable: false,
        configurable: false,
    }
})
quadrado.lados = 8;
console.log(quadrado.lados);
// previna qualquer ameaça no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}
Object.defineProperties(configuracao,{
    width : {
        configurable: false,
        writable: false
    },
    height: {
        configurable: false,
        writable: false
    },
    background: {
        configurable: false,
        writable: false
    }
})
configuracao.background = '#fff';
console.log(configuracao.background )

// liste o nome de todos as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));