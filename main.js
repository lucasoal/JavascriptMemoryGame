import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from "./src/objects/ScoreBoard";
import CardFrontBack from "./src/components/CardFrontBack";

/**
 * - A VARIÁVEL $root SELECIONA A DIV ROOT QUE ESTA NO INDEX A PARTIR DO DOM
 * - O document UTILIZA O METODO querySelector PARA ESPECIFICAR A DIV DENTRO DA DOM
 * - $root COMO SE TRATA DE UMA VARIÁVEL QUE REFERENCIA A DIV, QUANDO SE PASSA A PROPERTY textContent, ELA FAZ A ALTERAÇÃO DO TEXTO
 * - A função BoardGame recebe o parametro de quantidade de cards que devem ser mostrados na tela
 */

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${ScoreBoard()}
        ${BoardGame(2)}
        `);

