const ime1='Dubravka'
const ime2='Domagoj'

function pokreniKrug(ime1, ime2) {
    const ljubav = Math.floor(Math.random() * 100) + 1;
    return ljubav;
}
console.log(pokreniKrug(ime1, ime2));

const nizIme1 = [2,1,1,1,3,1,1,3];
const nizIme2 = [ 2,2,1,3,1,2,1];

const prvi = nizIme1[0];                   
const zadnji = nizIme2[nizIme2.length - 1];     

const zbroj = prvi + zadnji;

console.log(zbroj); 


pokreniKrug()