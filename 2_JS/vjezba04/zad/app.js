
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze


    // zadatak 1

  if (zadatak === '1') {
   // console.log('1. zadatak');
    //console.log(a);
    
    
     const x =Number(a)

     if(!x && x!=0){
      rezultat.innerHTML='Unesite broj u polje A'
      return 
    }

    const y= Number(a)

    if(!y){
      rezultat.innerHTML='Unesite broj u polje B'
      return
    }


    if(x>y){
      rezultat.innerHTML= x
        }else if(x>y){
          rezultat.innerHTML= y
        }
        else{
          rezultat.innerHTML= 'Brojevi su jednaki'
        }

        //kraj 1. zadatka

    return; // short curcuiting
  }



//zadatak 4


if (zadatak ==='4')
{


const unosGodina = '2026'

const godina =Number(unosGodina)


let age = 21

if(age>=21){
  rezultat.innerHTML('Punoljetan')
  
}else{
  rezultat.innerHTML('Maloljetan')
}
}



//zadatak 5

if (zadatak ==='5'){
  //Upisanu vrijednost u polje c ispisi rezultat

rezultat.innerHTML= c

return
}


//zadatak 6
// Ispiši umnožak a+b i c+d</

if (zadatak ==='6'){

    const x =Number(a)
    const y =Number(b)
    const z =Number(c)
    const k =Number(d)
   

  if(!x){
    rezultat.innerHTML='Unesite broj u polje A '
    return
  }


   if(!y){
    rezultat.innerHTML='Unesite broj u polje B '
    return
  }


   if(!z){
    rezultat.innerHTML='Unesite broj u polje C '
    return
  }


   if(!k){
    rezultat.innerHTML='Unesite broj u polje D '
    return
  }

  rezultat.innerHTML=(x+y)*(z+k)

   
  return
}



//ZADATAK 8
//8. Za upisano ime grada u polje B dali je sjedište edunove


if (zadatak === '8'){

if(!b){
  rezultat.innerHTML='Obavzena unos u polje B'
  return
}

if(b.toLowerCase()==='osijek'){
  rezultat.innerHTML=`${b} je sjedište Edunove`
}else{
  rezultat.innerHTML=`${b} nije sjedište Edunove`}


rezultat.innerHTML=b.toLowerCase()==='osijek' ? `${b} je sjedište Edunove` : `${b} nije sjedište Edunove`
  return
}


//zadatak 9
//  Za upisanu vrijednost u polju A ispisi kubikažu


if (zadatak ===9){

  const x =Number(a)

  if(!x || x<=0){
    rezultat.innerHTML= 'Broj mora biti pozitivan ili veći od 0'
    return
  }
  rezultat.innerHTML= x*x*x



  return
}


















 // zadatak 2

/*
  if (zadatak ==='2')
  {
    const x =Number(a)
    const y =Number(b)
    const z =Number(c)
     console.log(y,x,z,)


     return
  }


  if (!x){
    rezultat.innerHTML =' Unesite broj u polje A'
    return    
  }
   if (!y){
    rezultat.innerHTML =' Unesite broj u polje B'
    return
  }
   if (!z){
    rezultat.innerHTML =' Unesite broj u polje C'
    return
  }

  if(x < y && x < z){
    rezultat.innerHTML = x
  }else if ( y < x  && y < z)
    rezultat.innerHTML = y
  else{
    rezultat.innerHTML= z
    }

    return

//zadatak 3

     if (zadatak ==='3')
     {
      

    const x =Number(abcd)
   

    const rez  = x + y + z + v(
      rezultat.innerHTML = rez
    )

    let zbroj=x + y + z + v

  }
  if(!x && z && v && x!=0){
      rezultat.innerHTML='Unesite broj u polj: A,B,C i D'
      return 
    }
 
return
*/
  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



