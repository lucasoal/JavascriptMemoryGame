import "./style.css";

function PlayerName(param) {
    return  /*html*/ `
        <p class="player-name">
            Player${param}
        </p>
    `;
}

export default PlayerName;