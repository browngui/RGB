window.addEventListener('load', start);

let inputred = null;
let inputgreen = null;
let inputblue = null;

let inputR = null;
let inputG = null;
let inputB = null;

let divcorRGB = null;


function start() {
    inputred = document.querySelector('#inputred');
    inputgreen = document.querySelector('#inputgreen');
    inputblue = document.querySelector('#inputblue');

    inputR = document.querySelector(`#red`);
    inputR = document.querySelector(`#green`);
    inputR = document.querySelector(`#blue`);

    divcorRGB = document.querySelector(`#corRGB`)

    inputred.addEventListener(`input`, handleredChange);
    inputgreen.addEventListener(`input`, handlegreenChange);
    inputblue.addEventListener(`input`, handleblueChange);
}

function handleredChange(event) {
    let redValue = event.target.value;
    inputR.value = rangeValue;
}

function handlegreenChange(event) {
    let greenValue = event.target.value;
    inputG.value = rangeValue;
}

function handleblueChange(event) {
    event.target.value;
    inputB.value = rangeValue;
}

function renderCor() {
    let corR = document.getElementById('red').value;
    let corG = document.getElementById('green').value;
    let corB = document.getElementById('blue').value;

    let cor = 'RGB(' + corR + ', ' + corG + ', ' + corB + ')';

    divcorRGB.style.backgroundColor = cor;
    document.getElementById(`corRGB`).innerHTML = `<h2>${cor}</h2>`;


}

document.getElementById(`red`).addEventListener(`input`, renderCor);
document.getElementById(`green`).addEventListener(`input`, renderCor);
document.getElementById(`blue`).addEventListener(`input`, renderCor);

