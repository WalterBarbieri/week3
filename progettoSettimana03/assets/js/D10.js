const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('***ESERCIZIO A');
/* solo variabile */
var sum = 10 + 20;
console.log(sum);
/* funzione */
var sum1 = (a, b) => {
  return a + b;
}
console.log(sum1(10, 20));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('***ESERCIZIO B');
/* solo variabile */
var random = Math.round(Math.random() * 21);
console.log(random);
/* funzione */
var random1 = () => {
  return Math.round(Math.random() * 21);
}
console.log(random1());

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('***ESERCIZIO C');

var me = {
  name: 'Walter',
  surname: 'Barbieri',
  age: 32
}
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere "programmaticamente" la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('***ESERCIZIO D');

delete me.age;
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere "programmaticamente" all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('***ESERCIZIO E');

me.skills = ['HTML', 'CSS', 'Javascript'];

console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('***ESERCIZIO F');
/* Se volessimo inserire il valore all'inizio, usare metoro unshift() ; in tal modo il risultato del prossimo esercizio sarà più in linea con le mie conoscenze dei linguaggi di programmmazione*/
me.skills.push('Nessuno');
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere "programmaticamente" l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('***ESERCIZIO G');
/* bloccare seguente funzione per vedere risultato dell'esercizio F*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('***ESERCIZIO 1');

const dice = () => {
  return Math.ceil(Math.random() * 6)
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('***ESERCIZIO 2');

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
console.log(whoIsBigger(12, 14));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('***ESERCIZIO 3');

const splitMe = (string) => {
  return string.split(' ');
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('***ESERCIZIO 4');

const deleteOne = (string, boolean) => {
  if (boolean == true) {
    return string.substr(1);
  } else {
    return string.slice(0, -1);
  }

}
console.log(deleteOne('bello', (10 > 9)));
console.log(deleteOne('bello', (1 === '1')));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('***ESERCIZIO 5');

const onlyLetters = function (string) {
  let splittedString = [];
  let letterString = [];
  splittedString = string.split(' ');
  for (let i = 0; i < splittedString.length; i++) {
    if (isNaN(parseInt(splittedString[i]))) {
      letterString.push(splittedString[i])
    };
    
  }
  console.log(letterString.join(' '));


}
onlyLetters("I have 4 dogs");



/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('***ESERCIZIO 6');

const isThisAnEmail = function (string) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return regex.test(string);
}

console.log(isThisAnEmail('walter90@hotmail.it'));
console.log(isThisAnEmail('pippo.it'));


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('***ESERCIZIO 7');

const whatDayIsIt = function () {
  let day;
  var data = new Date().getDay();
  switch (data) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;

}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('***ESERCIZIO 8');

const rollTheDices = function (number) {
  var sum;
  const values = [];
  for (let i = 0; i < number; i++) {
    values.push(dice());
  }
  sum = values.reduce(sumAll);
  function sumAll(a, b) {
    return a + b;
  }
  console.log(sum);
  console.log(values);
}

rollTheDices(3);;

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('***ESERCIZIO 9');

const dataNascita = new Date(1990, 08, 05)
const howManyDays = function () {
  let today = new Date();
  let diff = today - dataNascita;
  diff = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(diff);
  /* ho usato la mia data di nascita e trasformata in anni arrotondata per difetto naturalmente*/
  console.log(Math.floor(diff / 365));
}

howManyDays();

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('***ESERCIZIO 10');


const isTodayMyBirthday = function () {
  let today = new Date();
  let giornoToday = today.getDate();
  let meseToday = today.getMonth();
  let giornoNascita = dataNascita.getDate();
  let meseNascita = dataNascita.getMonth();

  if (giornoToday == giornoNascita && meseToday == meseNascita) {
    console.log('true');
  } else {
    console.log('false');
  }

}
isTodayMyBirthday();

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('***ESERCIZIO 11');

const myObject = {
  nome: 'Walter',
  cognome: 'Barbieri',
  età: 32
}

function deleteProp(obj, propName) {
  delete obj[propName];
  return obj;
}

console.log(deleteProp(myObject, 'nome'));


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 12');


const newestMovie = (array) => {
  let result = { Year: 1960 };
  for (let i = 0; i < array.length; i++) {
    let currentYear = parseInt(array[i].Year);
    if (currentYear > result.Year) {
      result = array[i];
    }
  }

  return result;
};

console.log(newestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 13');


var length;
const countMovies = (array) => {

  return length = array.length;


}
console.log(countMovies(movies));


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 14');

const onlyTheYears = (array) => {
  return array.map(elem => elem.Year);
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 15');

const onlyInLastMillennium = (array) => {
  return array.filter(elem => parseInt(elem.Year) < 2000)
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('***ESERCIZIO 16');

const sumAllTheYears = (array) => {
  return array.reduce((a, b) => a + parseInt(b.Year), 0)
}
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('***ESERCIZIO 17');


const searchByTitle = (string) => {

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(string)) {
      console.log(movies[i]);

    };

  }
};
searchByTitle('lord');


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('***ESERCIZIO 18');


const searchAndDivide = (string) => {
  var searchList = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(string)) {
      searchList.match.push(movies[i]);
    } else {
      searchList.unmatch.push(movies[i]);
    }
  }
  console.log(searchList);
};
searchAndDivide('lord');


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('***ESERCIZIO 19');

const removeIndex = (number) => {
  movies.splice(number, 1);
  return movies
}
console.log(removeIndex(5));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('***ESERCIZIO 20');
const container = () => {
  let container = document.getElementById('container');
  console.log(container);
}
container();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('***ESERCIZIO 21');
const celle = () => {
  var celle = document.querySelectorAll('td');
  console.log(celle);
}
celle();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('***ESERCIZIO 22');
const celleCont = () => {
  var celle = document.querySelectorAll('td');
  for (let i = 0; i < celle.length; i++) {
    console.log(celle[i]);
  }


}
celleCont();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('***ESERCIZIO 23');

const red = () => {
  var link = document.querySelectorAll('a');
  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = 'red';
  }

}
red();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('***ESERCIZIO 24');

const newLi = (string) => {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(string));
  document.getElementById('myList').appendChild(li);
}
newLi('cinque');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('***ESERCIZIO 25');

const emptyList = () => {
  var ulEle = document.getElementById('myList');
  while (ulEle.firstChild) {
    ulEle.removeChild(ulEle.firstChild);
  }

}
emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('***ESERCIZIO 26');

const addClass = () => {
  var row = document.querySelectorAll('tr');
  for (let i = 0; i < row.length; i++) {
    row[i].classList.add('test');
  }
}
addClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('***ESERCIZIO 27');

const halfTree = (number) => {
  var half = document.getElementById('half');
  for (let i = 0; i <= number; i++) {
    for (let j = 0; j < i; j++) {
      half.innerHTML += '*';
    }
    half.innerHTML += '<br>'
  }
}
halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('***ESERCIZIO 27');

const fullTree = (number) => {
  var full = document.getElementById('full');
  let row = '';
  for (let i = 0; i < number; i++) {
    row += ' '.repeat(number - i) + '*' + '*'.repeat(i * 2) + '<br>';
  }
  full.innerHTML = row;
}
fullTree(5);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log('***ESERCIZIO 27');

const isItPrime = (number) => {
  let isPrime = true;
  if (number === 1) {
    console.log('1 non è un numero primo');
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${number} è un numero primo`);
    } else {
      console.log(`${number} non è un numero primo`);
    }
  }

}
isItPrime(17);




