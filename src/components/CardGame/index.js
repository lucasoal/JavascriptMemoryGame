import "./style.css";

function CardGame(icon = "interrogationPoint", alt = "Interrogation point") {

  return  /*html*/ `
  <button id="button" class="card-game" onclick="activeIt()">
          <img src='images/${icon}.png' alt=${alt}
            weight="60px" height="95px"
          >
        </button>
  `;
}

export default CardGame;
