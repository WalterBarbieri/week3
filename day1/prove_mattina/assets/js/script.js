var btnVerifica = document.getElementById('verifica').innerHTML;
var btnReset = document.getElementById('reset').innerHTML;
var giocatore1 = document.getElementById('giocatore1').innerHTML;
var giocatore2 = document.getElementById('giocatore2').innerHTML;
var valore1;
var valore2;
var messaggio = document.getElementById('risultato').innerHTML;
var estratto;

window.addEventListener('load', function() {
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white;'

});

btnVerifica.addEventListener('click', function() {
    valore1 = Number(giocatore1.value);
    valore2 = Number(giocatore2.value);
    verifica();
});

verifica = () => {
    if(!valore1 || !valore2) {
        messaggio.innerHTML = 'Attenzione tutti i giocatori devono inserire un valore!';
        return;
    } else if(valore1 < 1 || valore2 < 1 || valore1 >100 || valore2 > 100) {
        messaggio.innerHTML = 'Attenzione, inserire un valore numerico tra 1 e 100!';
        return;
    } else if(valore1 === valore2) {
        messaggio.innerHTML = 'Attenzione, inserire  valori diversi!';
    } else {
        estrai();
        calcola ();
    }

    }

    estai = () => {
        estratto = Math.floor((Math.random() * 100) +1);
    }
    calcola = () => {
        btnReset.removeattribute('disabled');
        btnReset.style.backgroundColor = 'green';
        giocatore1.setAttribute('disabled', 'true');
        giocatore1.style.backgroundColor = 'gray';
        giocatore2.setAttribute('disabled', 'true');
        giocatore2.style.backgroundColor = 'gray';
        
        document.getElementById('estratto').innerHTML = `Numero estratto: ${estratto}`;

    }
