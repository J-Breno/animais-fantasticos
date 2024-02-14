// API, REST E RESTFUL

/**
 * // API
 *
 * Cliente( client )
 * Garçom ( Pedidos, levar seus pedidos para a cozinha ) ( API )
 * Cozinha ( Server )
 * API - Application Programming Interface é basicamente um conjuntode rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação
 *
 * Responsável por fazer comunicação entre diferentes serviços
 * Intermediador para troca de informações
 *
 * // REST
 * Eu quero um restaurante limpo, que me atenda bem, me dê o que eu pedi
 *
 * Mas da mesma formaeu não posso chegar xingando, gritando
 *
 * A transferência de dados é feito geralmente com o protocolo http
 * Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didádica
 *
 * O REST delimita algumas obrigações nessas transferências de dados.
 *
 * Resourse seria então, uma entidade, um objeto. - dados
 *
 *
 * // -------- EXISTEM 6 NECESSIDADES PARA VOCÊ SER RESTFUL -------
 *
 * // RESTFUL
 *
 * Restful, é a aplicação dos padrões REST.
 *
 *  - CLient-Server: Separação do cliente e do servidor, dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para Web e React Native para SmartPhone, por exemplo.
 *
 * - Stateles: Cada requisição que o client faz para o server, deverá conter todas as informações necessárias para o servidor entender e responder ( RESPONSE ) a requisição ( REQUEST );
 * EXEMPLO: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o client foi autenticado na requisição anterio.
 *
 * - Chacheable: As requisições para a requisição, deverãoser explicitas ao dizer se aquela requisiçã, pode ou não ser chaceada pelo cliente.
 *
 * - Layered System: UIR, ENDPOINT seria o caminho , ou seja, o cliente acessa a um endpoint, sem precisar saber dacomplexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quaisoutras camadas o servidor estará lidando, para que a requisição seja respondida.
 *
 * - Code on demand ( optional ): Dá a possibilidade da nossa aplicação pegar códigos, como javascript, por exemplo, e executar no cliente;
 */
