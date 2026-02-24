const input1 = document.getElementById("broj-input-1");
const input2 = document.getElementById("broj-input-2");
const button = document.getElementById("generiraj-btn");
const rezultatDiv = document.getElementById("rezultat");

function napraviDivove(broj) {
    if (broj <= 0) return; // bazni slučaj (STOP)

    const noviDiv = document.createElement("div");
    noviDiv.textContent = broj;
    noviDiv.style.border = "1px solid black";
    noviDiv.style.margin = "5px";
    noviDiv.style.padding = "5px";

    rezultatDiv.appendChild(noviDiv);

    napraviDivove(broj - 1); // funkcija zove samu sebe
}

button.addEventListener("click", () => {
    const broj1 = Number(input1.value);
    const broj2 = Number(input2.value);
    const zbroj = broj1 + broj2;

    rezultatDiv.innerHTML = ""; // očisti stare

    napraviDivove(zbroj);
});