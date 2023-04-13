document.getElementById('entra').addEventListener('click', function(){
    let utente = document.getElementById('utente').value;
    if (utente === '') {
        alert('Inserire il nome utente!');
        return;
    }
    localStorage.setItem('utente', utente);
    location.href = '../../todo.html'; 

});