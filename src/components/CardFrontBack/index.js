import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("mario", "Bit Mario")}
            ${CardGame()}
            ${CardGame("luigi", "Bit Luigi")}
            ${CardGame()}
            ${CardGame("yoshi", "Bit Yoshi")}
        </article>
    `;
}

export default CardFrontBack;