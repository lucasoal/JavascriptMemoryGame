import "./style.css";

function PlayerName(param) {

    return  /*html*/ `
        <p class="player-name" onclick="hanldeClick()">
            Player${param}
        </p>
    `;
}

export default PlayerName;