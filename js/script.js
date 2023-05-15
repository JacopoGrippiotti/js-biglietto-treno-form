

let priceButton = document.querySelector("#prezzoBottone");

priceButton.addEventListener("click", function () {
    
    let chilometri = document.querySelector(".numeroChilometri");

    console.log(chilometri.value + " km")

    let etàPasseggero = document.querySelector(".userAge");

    console.log(etàPasseggero.value + " anni")

    let chilometriInseriti = document.querySelector("span.chilometriInseriti");

    chilometriInseriti.innerHTML += (chilometri.value + " km");

    let etàInserita = document.querySelector("span.etàInserita");

    etàInserita.innerHTML += (etàPasseggero.value + " anni");

    let result = document.querySelector("div.result");

    let prezzoBiglietto = parseInt(0.2333 * chilometri.value);

    let scontoMinorenni = ((19.4 / 100) * prezzoBiglietto);

    let scontoOver = ((37.7 / 100) * prezzoBiglietto);

    let buttonCounter = 0
    
    if (etàPasseggero.value > 65) {

        prezzoBiglietto -= scontoOver;
        result.innerHTML += prezzoBiglietto.toFixed(2) + " &euro;";
        console.log(prezzoBiglietto);
        buttonCounter += 1
    
    } 
    else if (etàPasseggero.value < 18) {
    
        prezzoBiglietto -= scontoMinorenni;
        result.innerHTML += prezzoBiglietto.toFixed(2) + " &euro;";
        console.log(prezzoBiglietto);
        buttonCounter += 1
    } 
    else {
        result.innerHTML += prezzoBiglietto.toFixed(2) + " &euro;";
        buttonCounter += 1
    }
    
    chilometriInseriti.classList.remove("displayNone");
    etàInserita.classList.remove("displayNone");
    result.classList.remove("displayNone");
}
)

if(buttonCounter > 1){
    chilometriInseriti.classList.add("displayNone");
    etàInserita.classList.add("displayNone");
    result.classList.add("displayNone");
    
}








