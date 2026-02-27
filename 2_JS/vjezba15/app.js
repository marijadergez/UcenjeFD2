
function primjer(prvi,drugi){

}



function dugiPoziv(){
    let i=0;
    setTimeout(()=>{
        
        console.log(++i);
        setTimeout(() => {
            console.log(++i);
            setTimeout(() => {
                console.log(++i);
            }, 1000);
        }, 2000);
    }, 5000); 
}

console.log('Početak');
dugiPoziv();


function primjer(prvi,drugi){

}

// sumuliramo čekanje funkcije

function dugiPoziv(){
    let i=0;
    setTimeout(()=>{
        // ovo se izvodi nakon 5 sekundi
        console.log(++i);
        setTimeout(() => {
            console.log(++i);
            setTimeout(() => {
                console.log(++i);
            }, 1000);
        }, 2000);
    }, 5000); // 5 sekundi
}

console.log('Početak');
dugiPoziv();

function primjer(prvi,drugi){

}

// sumuliramo čekanje funkcije

function dugiPoziv(){
    let i=0;
    setTimeout(()=>{
        // ovo se izvodi nakon 5 sekundi
        console.log(++i);
        setTimeout(() => {
            console.log(++i);
            setTimeout(() => {
                console.log(++i);
            }, 1000);
        }, 2000);
    }, 5000); // 5 sekundi
}

console.log('Početak');
dugiPoziv();

async function izvedi() {
    let odgovor = await cekaj(2000);
    console.log(odgovor);
    for (let i = 0; i < 2; i++) {
        const ms = (i+1)*1000;
        console.log(await cekaj(ms))
    }
};

izvedi();

(async () => {
    const url = 'https://dogapi.dog/api/v2/breeds'
    let li;
    await fetch(url)
    .then(res => res.json())
    .then(json => console.table(json.data.forEach(o => {
        console.log(o.attributes.name)
        li = document.createElement('li');
        li.textContent = o.attributes.name;
        document.getElementById('podatci').appendChild(li);
    })))
    .catch(rej => console.log(`%c Nije dobar URL: ${url}`,'color: red; font-size: 20px;')); // res je Response
})();

(async () => {
    const url = 'https://api.hnb.hr/tecajn-eur/v3'
    let li;
    await fetch(url)
    .then(res => res.json())
    .then(json => console.table(json.data.forEach(o => {
        console.table(o)
    })))
    .catch(rej => console.log(`%c Nije dobar URL: ${url}`,'color: red; font-size: 20px;')); // res je Response
})();