/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('***ESERCIZIO 1***')

var stringa1 = 'ciao';
var stringa2 = 'belli';

var tagliaECuci = (stringa1, stringa2) => {
  stringa1 = stringa1.slice(0, 2);
  stringa2 = stringa2.slice(2, 5);
  let result = stringa1.concat(stringa2);
  result = result.toUpperCase();
  return result
}

console.log(tagliaECuci(stringa1, stringa2));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log('***ESERCIZIO 2***')

const randomArray = () => {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 101));
  }
  return array;

}
console.log(randomArray());


/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log('***ESERCIZIO 3***')

var numArray = [7, 18, 9, 73, 61, 88, 47, 16, 2, 56, 99, 34, 57, 2];
var evenArray = numArray.filter(even);

function even(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  };
}
console.log(evenArray);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log('***ESERCIZIO 4***')

let somma = 0;
numArray.forEach(numero => {
  somma += numero;
});
console.log(somma);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log('***ESERCIZIO 5***')

let somma2 = numArray.reduce((a, b) => {
  return a + b;
});
console.log(somma2);


/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log('***ESERCIZIO 6***')

const increase = (n) => {
  const increaseArray = numArray.map(num => num + n);
  return increaseArray
}
console.log(increase(10));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('***ESERCIZIO 8***')

/* mio non funziona?
var stringArray = ["EPICODE", "is", "great"];
const lunghezze = (array) => {
  return array.map((elem) => elem.lenght);
};
console.log(lunghezze(stringArray));*/
const lunghezze = (array) => {
	return array.map((elem) => elem.length);
};

console.log(lunghezze(['EPICODE', 'is', 'great']));

/* prima prova
var stringArray = ["EPICODE", "is", "great"];

const lenght = function(string) {
  const lenghtArraY = [];
  let singleLenght = string.forEach((element) => {
    element.lenght;
  })
  lenghtArraY.push(singleLenght);
  return lenghtArraY;
}

console.log(lenght(stringArray)); */

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('***ESERCIZIO 9***')

const oddArray = () => {
  const oddArray = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
}
console.log(oddArray());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log('***ESERCIZIO 10***')

/* mio non funziona?
const oldestMovie = (array) => {
  let result = { Year: 2100 };
  for (let i = 0; i < array.lenght; i++) {
    let currentYear = parseInt(array[i].Year);
    if (currentYear < result.Year) {
      result = array[i];

    }
  }
  return result;
};

console.log(oldestMovie(movies)); */

const oldestMovie = (array) => {
	let result = { Year: 2100 };
	for (let i = 0; i < array.length; i++) {
		let currentYear = parseInt(array[i].Year);
		if (currentYear < result.Year) {
			result = array[i];
		}
	}

	return result;
};

console.log(oldestMovie(movies));


/*
function oldestFilm() {
  const oldArray = [];
  for (let i = 1; i <= 14; i++) {
    oldArray.push(parseInt.movies[i].Year);
  }
  return oldArray;
}

console.log(oldestFilm(movies)); */

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('***ESERCIZIO 11***')

let lenght = movies.length;
console.log(`Il numero di film contenuto nell'array è ${lenght}`);

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log('***ESERCIZIO 12***')

const onlyTitle = (array) => {
  return array.map(elem => elem.Title);
}
console.log(onlyTitle(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log('***ESERCIZIO 13***')

const millennio =  (array) => {
  return array.filter(elem => parseInt(elem.Year) > 1999)
}
console.log(millennio(movies));
/* Mio non funziona?
const millennio = (array) => {
  let result = [];
  for (let i = 0; i < array.lenght; i++) {
    if (parseInt(array[i].Year) > 1999) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(millennio(movies)); */

/*
const onlyInThisMillennium = (array) => {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (parseInt(array[i].Year) > 1999) {
			result.push(array[i]);
		}
	}
	return result;
};

// SOLUZIONE ALTERNATIVA
const onlyInThisMillennium = array => {
  return array.filter(elem => parseInt(elem.Year) > 1999)
}

console.log(onlyInThisMillennium(movies)); /*

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('***ESERCIZIO 14***')

/* mio non funziona?
const movieId = (array, id) => {
  let foundMovie = null;
  for (let i = 0; i < array.lenght; i++) {
    if (array[i].imdbID === id) {
      foundMovie = array[i];
    }
  }
  return foundMovie;
};

 */

const movieId = (array, id) => {
  return array.find(elem => elem.imdbID === id);
};
console.log(movieId(movies, 'tt0120737'));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log('***ESERCIZIO 15***')

const sumYear = (array) => {
  return array.reduce((a, b) => a + parseInt(b.Year), 0);
}
console.log(sumYear(movies));

/* Mio non funziona?
const sumYear = (array) => {
  let result = 0;
  for (let i = 0; i < array.lenght; i++) {
    result += parseInt(array[i].Year);
  }
  return result;
};
console.log(sumYear(movies)); */

const sumAllTheYears = (array) => {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result += parseInt(array[i].Year);
	}
	return result;
};

// SOLUZIONE ALTERNATIVA

/* const sumAllTheYears = array => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0)
}*/

console.log(sumAllTheYears(movies));