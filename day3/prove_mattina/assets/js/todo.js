window.addEventListener('load', function () {
    if (!localStorage.getItem('utente')) {
        location.href = '../../errore.html';
    }
});

var utente = localStorage.getItem('utente');
document.getElementById('saluto').innerHTML += utente;

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('utente');
    location.href = '../../index.html';
})