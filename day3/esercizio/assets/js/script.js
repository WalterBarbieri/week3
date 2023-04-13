/****ESERCIZIO 1*****/
const changeTitle = function () {
    var h1 = document.querySelector('h1');
    h1.innerText = 'NUOVO TITOLO';
};
changeTitle();
/****ESERCIZIO 2****/

const addClassToTitle = function () {
    var h1 = document.querySelector('h1');
    h1.classList.add('h1');
};
addClassToTitle();
/*ESERCIZIO 3****/

const changePcontent = function () {
    var p = document.querySelectorAll('div p');
    p.forEach((element) => {
        element.innerText = 'nuovo testo';
    });
};
changePcontent();

/****ESERCIZIO 4****/

const changeUrls = function () {
    var newUrl = 'https://www.google.com';
    document.querySelector('a').href = newUrl;

}
changeUrls();

/****ESERCIZIO 5****/

const addToTheSecond = function () {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode('nuovo elemento'));
    document.getElementById('secondList').appendChild(node);
}
addToTheSecond();

/****ESERCIZIO 6****/

const addParagraph = function () {
    var node = document.createElement('p');
    node.appendChild(document.createTextNode('nuovo paragrafo'));
    document.querySelector('div').appendChild(node);

};
addParagraph();

/****ESERCIZIO 7 ****/

const hideFirstUl = function () {
    var ul = document.getElementById('firstList');
    ul.remove();
}
hideFirstUl();

/****ESERCIZIO 8****/

const paintItGreen = function () {
    var ul = document.querySelectorAll('ul');
    ul.forEach((element) => {
        element.style.backgroundColor = 'green';
    })

}
paintItGreen();

/****ESERCIZIO 9****/

const makeItClickable = function () {
    var h1 = document.querySelector('h1');
    h1.onclick = function () {
        var newH1 = h1.textContent.slice(0, -1);
        h1.innerText = newH1;
    };
}
makeItClickable();

/****ESERCIZIO 10****/

const revealFooterLink = function () {
    var footer = document.querySelector('footer');
    footer.style.cursor = 'pointer';
    footer.onclick = function () {
        var link = document.querySelector('footer a');
        var url = link.getAttribute('href');

        alert(url);
    };

}
revealFooterLink();

/****ESERCIZIO 11****/

const generateTable = function () {
    const container = document.getElementById('tableArea');
    const table = document.createElement('table');
    table.style.width = '100%';

    const firstRow = document.createElement('tr');
    const thImage = document.createElement('th');
    thImage.innerText = 'Immagine';
    const thName = document.createElement('th');
    thName.innerText = 'Nome Prodotto';
    const thQuantity = document.createElement('th');
    thQuantity.innerText = 'Quantità';
    const thPrice = document.createElement('th');
    thPrice.innerText = 'Prezzo';

    firstRow.appendChild(thImage);
    firstRow.appendChild(thName);
    firstRow.appendChild(thQuantity);
    firstRow.appendChild(thPrice);
    table.appendChild(firstRow);

    const images = [
        "https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg",
        "https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg",
        "https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg",
        "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png",
        "https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png"
    ];

    for (let i = 0; i < images.length; i++) {
        const newRow = document.createElement('tr');

        const tdImage = document.createElement('td');
        tdImage.innerHTML = `<img src=${images[i]} alt="smartphone" height="200" />`;
        const tdName = document.createElement('td');
        tdName.innerText = 'Smartphone';
        const tdQuantity = document.createElement('td');
        tdQuantity.innerText = Math.floor(Math.random() * 50);
        const tdPrice = document.createElement('td');
        tdPrice.innerText = Math.floor(Math.random() * 500) + '€';

        newRow.appendChild(tdImage);
        newRow.appendChild(tdName);
        newRow.appendChild(tdQuantity);
        newRow.appendChild(tdPrice);
        table.appendChild(newRow);
    };

    container.appendChild(table);

}
generateTable();

/****ESERCIZIO 12****/

const addRow = function (imgUrl, productName, quantity, price) {
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');

    const tdImage = document.createElement('td');
    tdImage.innerHTML = `<image src=${imgUrl} alt="smartphone" height="200" />`;
    const tdName = document.createElement('td');
    tdName.innerText = productName;
    const tdQuantity = document.createElement('td');
    tdQuantity.innerText = quantity;
    const tdPrice = document.createElement('td');
    tdPrice.innerText = price + '€';

    newRow.appendChild(tdImage);
    newRow.appendChild(tdName);
    newRow.appendChild(tdQuantity);
    newRow.appendChild(tdPrice);
    table.appendChild(newRow);
}
addRow('https://data.wikomobile.com/documents/images/IT/dbd2f986d94529fc20c0864e2c5c978c.jpg', 'another smartphone', 10, 200);

/****ESERCIZIO 14****/

const hideAllImages = function () {
    const noImg = document.querySelectorAll('img');
    noImg.forEach((image) => {
        image.style.display = 'none';
    });

}
//** hideAllImages();

/****ESERCIZIO 15****/

const changeColorWithRandom = function () {
    let changeColor = document.getElementById('changeMyColor');
    changeColor.onclick = function () {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);

        const randomColor = `rgb(${red},${green},${blue})`;
        changeColor.style.userSelect = 'none';
        changeColor.style.cursor = 'pointer';
        changeColor.style.color = randomColor;
    };

}
changeColorWithRandom();

/****ESERCIZIO 16****/

const deleteVowels = function () {
    document.querySelectorAll('h1,h2,h3,p,a,li,th,td').forEach(
        (node) =>
        (node.innerText = [...node.innerText]
            .filter((char) => {
                char = char.toLowerCase();
                return(
                    char !== 'a' &&
                    char !== 'e' &&
                    char !== 'i' &&
                    char !== 'o' &&
                    char !== 'u'
                );

            })
            .join(''))
    );


}
/*deleteVowels();*/