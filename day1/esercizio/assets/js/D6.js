/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log('<<<<<ESERCIZIO 1>>>>>');

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(4, 2));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log('<<<<<ESERCIZIO 2>>>>>');

function crazySum(n1, n2) {
    if (n1 == n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}
console.log(crazySum(6, 4));
console.log(crazySum(6, 6));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log('<<<<<ESERCIZIO 3>>>>>');

function crazyDiff(x) {
    if (x <= 19) {
        return 19 - x;
    } else {
        return (x - 19) * 3;
    }
}
console.log(crazyDiff(10));
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log('<<<<<ESERCIZIO 4>>>>>');

function boundary(n) {
    if (n > 20 && n <= 100 || n == 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(37));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(12));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log('<<<<<ESERCIZIO 5>>>>>');

function epify(stringa) {
    if (stringa.startsWith('EPICODE', 0)) {
        return stringa;
    } else {
        return 'EPICODE'.concat(stringa);
    }
}
console.log(epify('aula di EPICODE'));
console.log(epify('EPICODE course schedule'));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log('<<<<<ESERCIZIO 6>>>>>');

function check3and7(y) {
    if (y > 0 && (y % 3 == 0 || y % 7 == 0)) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(18));
console.log(check3and7(4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log('<<<<<ESERCIZIO 7>>>>>');

function reverseString(string) {
    if (string === '') {
        return '';
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }

}
console.log(reverseString('epicode'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log('<<<<<ESERCIZIO 8>>>>>');

/*function upperFirst(str) {
    let parole = str.split (' ');
    let primaLettera = parole.charAt(0);
    let maiuscola = primaLettera.toUpperCase();
    maiuscola.join();
} 
console.log(upperFirst('ciao amici'));*/

const upperFirst = function (str) {
    let words = str.split(' ');
    let finalString = [];
    for (let i = 0; i < words.lenght; i++) {
        let firstChar = words[i].charAt(0);
        let upperCase = firstChar.toUpperCase();
        let cutString = words[i].slice(1);
        let finalWord = upperCase + cutString;
        finalString.push(finalWord);
    }
    console.log(finalString.join(' '));
};
upperFirst('ciao belli');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log('<<<<<ESERCIZIO 9>>>>>');

const cutString = function (str) {
    return str.slice(1, str.lenght - 1);
};
console.log(cutString('epicode'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log('<<<<<ESERCIZIO 10>>>>>');

const giveMeRandom = function (n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}
console.log(giveMeRandom(7));

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log('<<<<<ESERCIZIO 1E>>>>>');


var newArray = [7, 0, 8, 0, 3, 6, 1];
checkArray(newArray);

function checkArray(myArray) {
    let somma = 0;
    myArray.forEach(element => {
        if (element > 5) {
            console.log(`${element} è maggiore di 5`);
            somma += element;
        } else {
            console.log(`${element} è minore di 5`);
        }

    });
    console.log(`La somma dei numeri maggiori di 5 è ${somma}`);
}



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log('<<<<<ESERCIZIO 2E>>>>>');

var shoppingCart = [
    {
        price: 15,
        name: 'wine',
        id: 1,
        quantity: 3,
    },
    {
        price: 3,
        name: 'coffee',
        id: 2,
        quantity: 1,
    },
    {
        price: 1,
        name: 'pasta',
        id: 3,
        quantity: 9,
    },
    {
        price: 8,
        name: 'ham',
        id: 4,
        quantity: 5,
    }
];
var total = 0;
shoppingCartTotal();
function shoppingCartTotal() {
    shoppingCart.forEach((element) => {
        total += element.price * element.quantity;

    })
    console.log(total);
}


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log('<<<<<ESERCIZIO 3E>>>>>');

var newObject = {
    price: 4,
    name: 'pizza',
    id: 5,
    quantity: 2,
}

addToShoppingCart(newObject);
function addToShoppingCart(article) {
    shoppingCart.push(article);
    console.log(`L'array ora contiene ${shoppingCart.length} elementi`);
    console.table(shoppingCart);
}



/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log('<<<<<ESERCIZIO 4E>>>>>');

maxShoppingCart();
function maxShoppingCart() {
    var max = shoppingCart[0].price;
    var myArticle;
    shoppingCart.map(element => {
        if (element.price > max) {
            max = element.price;
            myArticle = element;
        }
    })
    console.log(`L'articolo più costoso è , che costa ${max}`);

}


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log('<<<<<ESERCIZIO 5E>>>>>');

latestShoppingCart();
function latestShoppingCart() {
    var last = shoppingCart.length - 1;
    console.table(shoppingCart[last]);
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
console.log('<<<<<ESERCIZIO 6E>>>>>');

let numLoop = 6;
loopUntil(numLoop);
function loopUntil(loop) {
    let stop = 0;
    do {
        let numero = Math.floor(Math.random() * 10);
        console.log(numero);
        if (numero >= loop) {
            stop++;
        }
    }
    while (stop < 3);
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
console.log('<<<<<ESERCIZIO 7E>>>>>');

var arrTupla = [12, 2, 'Pippo', 37, 'Pluto', 24, 51, 'Paperino'];
average(arrTupla);

function average(tupla) {
    let media = 0;
    let count = 0;
    tupla.forEach((element) => {
        if (typeof (element) === 'number') {
            media += element;
            count++;
        }
    });
    media = media / count;
    console.log(media);
}



/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
console.log('<<<<<ESERCIZIO 8E>>>>>');

var arrStr = ['Pippo', 'Pluto', 'Paperino', 'Qui', 'Basettoni', 'Topolino'];

longest(arrStr);

function longest(stringhe) {
    let lunghezza = 0;
    let parola;
    stringhe.forEach(element => {
        if (element.lenght > lunghezza) {
            lunghezza = element.lenght;
            parola = element;
        }
    });
    console.log(`La parola più lunga è ${parola}, di ${lunghezza} caratteri`);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
console.log('<<<<<ESERCIZIO 9E>>>>>');

var contenuto = 'Questa email contiene informazioni commerciali';
console.log(antiSpam(contenuto));
function antiSpam(emailContent) {
    emailContent = emailContent.toLowerCase();
    if (emailContent.indexOf('spam') > -1 || emailContent.indexOf('scam') > -1) {
        return false;
    } else {
        return true;
    }
}


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
console.log('<<<<<ESERCIZIO 10E>>>>>');

var miaData = new Date(2023,00,17);


function numGiorni(data) {
    let oggi = new Date;
    let diff = oggi - miaData;
    diff =  Math.floor(diff/1000/60/60/24);
    return `Dal ${data} ad ${oggi} sono passati ${diff} giorni`;
}
console.log(numGiorni(miaData));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
console.log('<<<<<ESERCIZIO 11E>>>>>');

var val1 = 4;
var val2 = 4;


function matrixGenerator(num1, num2) {
    let matrix = [];
    for (let i = 0; i < num2; i++) {
        for (let j = 0; j > num1; j++) {
            matrix.push(`${i}${j}`);
        }
    }
    console.table(matrix);
}
matrixGenerator(val1, val2);

/* SCRIVI QUI LA TUA RISPOSTA */
