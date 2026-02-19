const isDev=true

function pozdraviSvijet(){
    console.log('Hello world')
    return
}

log('Pozdravljam sivjet')
pozdraviSvijet()



function parniBrojevi(odBroja, doBroja){
   const min =odBroja<doBroja ? odBroja : doBroja
   const max =odBroja>doBroja ? odBroja : doBroja
    for(let i=min; i<=max;i++){
        if (i % 2 ===0){
            console.log(i)
        }
    }
}


log('Prvi poziv parnih brojeva')
parniBrojevi(3,12)
log('Drugi poziv parnih brojeva')
parniBrojevi(48,25)


function log(poruka){
    if(!isDev){
        return
    }
console.log('\n')
console.log('-----------------------')
console.log(poruka)
console.log('-----------------------')

}

function slucajniBroj(odBroja=0 , doBroja=0){

    if(odBroja!=0 && doBroja!=0){
        return (Math.random()*(doBroja-odBroja)+odBroja).toFixed(0)
    }



    const broj = Math.random()
    const uvecano = broj * 1000
    const cijeliBroj =parseInt(uvecano)
    return cijeliBroj
 
}


log(slucajniBroj())

log((Math.random()* 1000).toFixed(0))

log((Math.random()*(999-100)+100).toFixed(0))

log(slucajniBroj(100,999))