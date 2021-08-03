import PlayerName from "../../components/PlayerName";
import "./style.css";

function ScoreBoard() {
    return /*html*/ `
    <header class="score-board">
        ${PlayerName('1')}
        ${PlayerName('2')}
    </header>
    `;
}

export default ScoreBoard;