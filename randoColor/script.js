import { getRandomNum, $ } from "../utils/utils.js"; //Husk.js til sidst

$("body").style.backgroundColor = `rgb(${getRandomNum(255)},${getRandomNum(255)},${getRandomNum(255)})`;
//hver gang man reloader kommer der så en random farve
