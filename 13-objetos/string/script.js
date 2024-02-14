// qualquer string tem propriedades e metodos do prototype da string
const nNome = 'Breno '.length
console.log(nNome);
const nome = 'Breno'.includes('Bre');
console.log(nome);
const comeca = 'Breno'.startsWith('Br'); // ele é case Sensive  
console.log(comeca)
const termina = 'Breno'.endsWith('p')
console.log(termina);
const preco = ['R$ 99', 'R$129'];
console.log(preco[0].padEnd(5,'-'));
console.log(preco[0].padEnd(8,'-*'));
console.log(preco[1].padStart(5,'*'));
console.log(preco[1].padStart(8,'*-'));