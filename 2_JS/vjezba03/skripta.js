
const a=2, b=3; // jedan red deklariao dvije varijable ovdj esimuliram da je korisnik unio 2 i 3
let rez; //undefined
rez = a + b; 
console.log(rez); 


console.log( 9 % 2); //1
console.log(8 % 2);//0

 rez= rez + 2; //desna strana rez ima vrijednost 5 i doda mu se dva pa se 7 dodijeli varijabli s lijeve strane kolja je rez
 console.log(rez); // 7

 // + =
 rez+2;
 console.log(rez); //9

 rez = rez + 1 ; 
 rez + = 1;
 re++;

 console.log(rez++);
 console.log(rez);

console.log(++rez)
console.log(rez--)

console.log(5=5);
console.log('5' =5)

console.log( 3==7)
console.log( 5 ===59)

const godine = 18

console.log(godine > 18)
console.log(godine < 18)

console.log(godine >=18);

console.log(godine>=21)

console.log (godine>18 && godine >21)

console.log( i1 || i2)

console.log(!i1)

godine = 16
console.log(godine >18? 'Punoljetan' : 'Maloljetan')

const skola= 'Edunova'
console.log('Najbolja škola je + skola')
console.log(`Najbolja škol aje $(skola)`)

const razred = 4
console.log('Idem u ' + razred +' . razred')
console.log(`Idem u ${razred}. razred`)

const niz =[2,2,1,1]
console.log(niz)
const noviNiz = [0, ...niz, 3]
console.log(noviNiz)

const osoba = {
    ime:'Pero'
     prezime:'Perić'}

const polaznik = {
    ...osoba,
    edukacija:'Frontend developer'

}
console.table(polaznik)

const[prvi, drugi] = [1,2]

console.log(prvi)
console.log(drugi)

const {prezime, ... objektBezPrezimena} = polaznik
console.table(objektBezPrezimena)
console.log(prezime)

let sifra= null
sifra='382c74c3-721f-464g-80e5s-'
console.log(sifra?? 'Šifra nije definirana')

const korisnik ={
    adresa: {
        grad:'Osijek'
        ulica:'Jagerova'
    }
}

console.table(korisnik)
console.log(korisnik.adresa.grad)

console.log('Ulica' + korisnik.adresa.ulica.toLocaleUpperCase)
console.log(korisnik?.adresa?.ulica?.toLocaleUpperCase())

const n=[2,3]
console.log(typeof n)

console.log(n instanceof Array)

console.log('prezime' in osoba)

console.log('prezime' in objektBezPrezimena)

const binarno 5 | 3
console.log(binarno)

console.log(5 & 3)











 