const ime1='Dubravka'
const ime2='Domagoj'

function pokreniKrug(ime1, ime2) {
    const ljubav = Math.floor(Math.random() * 100) + 1;
    return ljubav;
}

const niz = [10, 20, 30, 40, 50];

const prvi = niz[0];                    // prvi element
const zadnji = niz[niz.length - 1];     // zadnji element

const zbroj = prvi + zadnji;

console.log(zbroj); // 60


pokreniKrug()