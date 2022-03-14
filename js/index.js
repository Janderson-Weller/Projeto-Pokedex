/* Cria a variável e atribui a ela uma lista de elementos, ou seja, o atributo querySelectorAll pega 
* todos os itens li da lista, que nesse caso, é cada li cujo o nome da classe é item-list
*/
const listHeadsCards = document.querySelectorAll('.itemList');
    // console.log(listHeadsCards);

/* Cria a variável e atribui a ela uma lista de elementos, ou seja, o atributo querySelectorAll pega
 * todos as divs cujo o nome é card-pokemone cria uma lista com essas divs, cards-pokemon
 */

const listCardPokemon = document.querySelectorAll('.card-pokemon');
// console.log(listCardPokemon);

// Percorre a lista de cards e adiciona um evento em cada item de acordo com a interação do usuário
listHeadsCards.forEach(itemList => {
    
    // Cria um evento em cada item  
    itemList.addEventListener('click', () => { // Função arrow anonima
    
        // Seleciona o único elemento que está aberto através da class open
        const cardOpen = document.querySelector('.open');

        //  Seleciona o único elemento de heads-cards que contém a class active, ela altera a cor de fundo
        const headActive = document.querySelector('.active');

        // Exclui essa classe do elemento selecionado
        cardOpen.classList.remove('open');

        // Exclui essa classe do elemento selecionado
        headActive.classList.remove('active');

        // Pega o valor do atributo id do item selecionado da lista
        const valueId = itemList.attributes.id.value;
        
        /* Pegando o valor da id após o input do html, faz-se a concatenação do valor da id com a string
        * 'card' para formar o nome da id na div de cada pokemon, para depois mostrar o cartão selecionado
        */
        const cardToOpen = document.getElementById('card-' + valueId);

        const headToActive = document.getElementById(valueId);

        // Adicionando o atributo 'open' na class do card selecionado
        cardToOpen.classList.add('open');
        
        // Adicionando o atributo 'active' na class do li selecionado
        headToActive.classList.add('active');

    })
})
