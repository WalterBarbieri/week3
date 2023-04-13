var nuovaVoce =  document.getElementById('nuovoTask');
var addBtn = document.getElementById('inserisci');
var listaTask = [];

window.addEventListener('load', function () {
    if (!localStorage.getItem('utente')) {
        location.href = '../../errore.html';
    }

    if (listaTask.lenght == 0) {
        document.getElementById('titoloLista').innerText = 'Non ci sono task';
    } 

    if(localStorage.getItem('tasks')) {
        listaTask = localStorage.getItem('tasks').split(',');
        creaLista();
    }

    var utente = localStorage.getItem('utente');
    document.getElementById('saluto').innerHTML += utente;
});

addBtn.addEventListener('click', function() {
    let task = nuovaVoce.value;
    if (task == '') {
        alert('Inserire un valore');
        return;
    }
    listaTask.push(task);
    memorizza();
    creaLista();
});

function memorizza() {
    localStorage.setItem('tasks', listaTask);
}

function creaLista () {
    var listaHTML = document.getElementById('lista');
    listaHTML.innerHTML = '';
    listaTask.forEach((item, i) => {
        let task = document.createElement('li');
        let elimina = document.createElement('button');
        elimina.innerText = '❌';
        elimina.setAttribute('onclick', `cancella(${i})`);
        task.appendChild(elimina);
        task.appendChild(document.createTextNode(item));
        lista.appendChild(task);
    })
}

function cancella (indice) {
    listaTask.splice(indice, 1);
    localStorage.setItem('tasks', listaTask);
    creaLista();
}


document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('utente');
    location.href = '../../index.html';
});

