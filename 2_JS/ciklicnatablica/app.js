const input1 = document.getElementById("broj-input-1");
const input2 = document.getElementById("broj-input-2");
const button = document.getElementById("generiraj-btn");
const rezultatDiv = document.getElementById("rezultat");

let suma=0
for(let i=0;i<100;i++){
    suma+=i
}
console.log(suma)

function zbroji(broj){
    if(broj===1){
        return 1
    }
    return broj + zbroji(broj-1)
}

console.log(zbroji(100))

function so(){
    
}
so()
