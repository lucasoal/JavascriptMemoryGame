import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {

    window.cardFrontBack = {}
    window.cardFrontBack.hanldeClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back')

        // if ($cardFrontBack.classList.contains('-active')) {
        //     $cardFrontBack.classList.remove('-active')
        // } else { $cardFrontBack.classList.add('-active'); }
        // 
        // $cardFrontBack.classList.contains('-active') ? $cardFrontBack.classList.remove('-active') : $cardFrontBack.classList.add('-active')
    
        $cardFrontBack.classList.toggle('-active')
    }


    return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.hanldeClick(event)">
        
        <div class="front">
            ${CardGame()}
        </div>

        <div class="back">
            ${CardGame("mario", "Bit Mario")}
        </div>
    
    </article>
    `;
}

export default CardFrontBack;