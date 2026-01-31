// OPERATORI

// --aritmetički   + - x
const ako=2, b=3 //u jednom retku dvije varijable
let rez //udefined
rez = a + b //algoritam
console.log(rez)  //izlaz   -  ulaz je podatak koji je unio korisnik 




// --modulo operator 
//  PARNI NEPARNI
//ostatak nakon cjelobrojnog djeljenja 9/2 = 4,5  a cjelobrojno 4 i ostao 1
//najednostavniji primjer je 
console.log( 9 % 2 ) // 1       9 modulo 2
console.log(8 % 2) //0         8 modulo 2


//  --operatori dodjele
// = je operator dodjeljivanja desna strana dodjeljuje lijevoj
//prvo računa desnu stranu pa se doda varijabli sa lijeve
//na desnoj strani rez ima vrijhednost 5 i doda mu se dva pa se 7 dodijeli varijabli sa lijeve strane
rez = rez + 2
console.log(rez) //7

// + =

rez += 2
console.log(rez) //9

const x =2

rez -= x
console.log(rez) //7

rez *= x
console.log(rez) //14

rez /= x
console.log(rez) //7


//uvećanje za 1
re = rez + 1 //8
rez += 1 //9
rez ++ // 10  ovako pisati u redu nije dobro ali će napravit posao 
//ak ces nest uvecavat to ce bit za jedan ili umanjiti

// inncrement ++  dekrement --
//korištenje i uvećanje/umanjenje

// koristi pa uveća
console.log(rez++) //ispiše 10 iuveća na 11
console.log(rez)  //11

// uvećati pa korisitti
console.log(++rez)
 //stara vrijednost je 11 pvo je uvećao ++ pa koristio


 //koristiti pa umanjiti
 console.log(rez--)// 12

 //umanjiti pa korisitti
 console.log(--rez)// 10   //
 // jer je koristio 12 pa smanjio na 11 a ovdje -- ga je prvo sa 11 smanjio na 10 i i spisao 10


 //razgovor za posao primjer
 let i =2, j = i
 i = j++ - i
 j += --i ++j
 console.log(i-j)                  // j  je  jot


 // operatori uspoređivanja      true /false
 // == jednako po vrijednosti
 // === po vrijednosti i tipu      /*da je script number...
console.log(5 = 5)  // true
console.log('5' == 5)// string i broj po vrijednosti =true
//da ne ispadne samo true
console.log(3 == 7)// false
console.log('Osijek' === osijek) //false
console.log( 5 === '5') //false  number string
//u drugim jezicima je 2=  dovoljno


//različito  !=
console.log( 3 != 5)// true   BULEAN

//<, >, <=, =>
const.log = 18        //prvi veći od 18 je 19  što bi dalo:
console.log(godine > 18) // false    //dali je godine veće od 18
console.log(godine >= 18) // true

//dva izraza koji mogu biti true ili false

//-- logički operatori 
//bool-ovi operatori : AND   OR   NOT  ( bool table)
console.log(godine>=18) //true
console.log(godine>=21) //false
console.log( i1 && i2) //false
//punoljetan u svim državama

//logični AND &&    ->  u JS se ne smije koristiti samo jedan &
console.log( godine>=18  && godine>=21)  //  gledam kod iznad imam true i false binarno 
//i1       i2      rez(i1 &&i2)
//false    false   false
//false    true    false
//true     false   false
//true     true     true


//logički OR ||     AltGr + W >NE SMIJE SE KORISTITI SAMO JEDAN |
console.log(i1 || i2) //true
//false    false   false
//false    true    true
//true     false   true
//true     true     true


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











 