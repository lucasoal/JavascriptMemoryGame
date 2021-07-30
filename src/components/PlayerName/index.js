import "./style.css";

function PlayerName(param) {
    return `
        <p class="player-name">
            Player${param}
        </p>
    `;
}

export default PlayerName;