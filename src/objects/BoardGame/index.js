import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCards) {

    // amountCards é a quantidade de cartas
    // $htmlCardGame retorna a função CardGame que faz aparecer na tela o cartão do jogo
    // $htmlBoardGame retorna o metodo repeat para a função do CardGame
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return  /*html*/ `
    <section class="board-game">
        ${$htmlContent}
    </section>    
    `;
}

export default BoardGame;