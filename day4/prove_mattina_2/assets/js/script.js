document.getElementById('scrivi').innerText = 'Leggi il testo velocemente in quanto è estremamente importante';

const tempo = setTimeout(primoMessaggio, 2000);

function primoMessaggio() {
    document.getElementById('scrivi').innerText = 'Non stai leggendo abbastanza velocemente';
};

const pocoTempo = setTimeout(secondoMessaggio, 3000);

function secondoMessaggio() {
    document.getElementById('scrivi').innerText = 'Attenzione!!!';
};

const tempoScaduto = setTimeout(terzoMessaggio, 4000);

function terzoMessaggio() {
    document.getElementById('scrivi').innerText = 'TEMPO SCADUTO';
};

var counter = 0;
var annoy = setInterval(function() {    
    if (counter <= 5) {
        document.getElementById('scrivi2').innerText += 'cosa leggi?';
        counter++;   
    } else {
        clearInterval(annoy);
    }
}, 1000);
const colorAnnoy = function() {
    const color = document.getElementById('scrivi2');
    color.style.color = 'red';
}
colorAnnoy();