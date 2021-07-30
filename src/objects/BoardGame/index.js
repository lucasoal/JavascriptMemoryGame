import './style.css';
import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {

    // amountCards é a quantidade de cartas
    // $htmlCardGame retorna a função CardGame que faz aparecer na tela o cartão do jogo
    // $htmlBoardGame retorna o metodo repeat para a função do CardGame
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return `
    <section class="board-game">
        ${$htmlContent}
    </section>    
    `;
}

export default BoardGame;