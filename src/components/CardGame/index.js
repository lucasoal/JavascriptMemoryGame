import "./style.css";

function CardGame() {

  function alert() {
    alert("CLICK!");
  }

  return `
    <button class="card-game" onclick="alert()">
      <img src="images/alura-pixel.png" alt="Logo da Alura">
    </button>
  `;
}

export default CardGame;
