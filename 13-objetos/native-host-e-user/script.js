/**
 * Object é um objeto nativo, da propria linguagem
 * function
 * string
 * array
 */
// NodeList é um objeto do host, ou seja, do browser

// Host, objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do Dom, como DomList, HTMLColletion e outros. Em Node.js os objetos do host são diferentes, já que não estamos em um ambiente do browser

// NodeList
// HTMLColletion

// Objeto do user é os que eu faço

// existem vários tipos de Engine, depende do browser, V8, SpiderMonkey etc

// Para saber se alguma coisa existe na linguagem é se você ver se ele é diferente de undifined

console.log(typeof Array.from !== "undefined");

/**
 *
 * API - Application Programming Interface, é uma interfacede software criada para a interação com outros softwares.
 * Ou seja, toda integração que fazemos com o browser utilizando objetos, métodos e propriedades, estamos na verdade interagindocom a API do browser
 * é tipo um mini sistema que você faz para acessar uma interface maior
 */
