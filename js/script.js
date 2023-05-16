

let priceButton = document.querySelector("#prezzoBottone");

priceButton.addEventListener("click", function () {
    
    
    
    
    let chilometri = document.querySelector(".numeroChilometri");

    console.log(chilometri.value + " km")

    let etàPasseggero = document.querySelector(".userAge");

    console.log(etàPasseggero.value + " anni")

    let chilometriInseriti = document.querySelector("span.chilometriInseriti");

    chilometriInseriti.innerHTML = ""

    chilometriInseriti.innerHTML += ("i chilometri da te inseriti sono" + chilometri.value + " km");

    let etàInserita = document.querySelector("span.etàInserita");

    etàInserita.innerHTML = ""

    etàInserita.innerHTML += ("la tua età corrisponde a " + etàPasseggero.value + " anni");

    let result = document.querySelector("div.result");

    let scontoMinorenni = ((19.4 / 100) * prezzoBiglietto);

    let scontoOver = ((37.7 / 100) * prezzoBiglietto);


    if (etàPasseggero.value > 65) {
        prezzoBiglietto = 0.2333 * chilometri.value
        prezzoBiglietto -= scontoOver;
        result.innerHTML = ""
        result.innerHTML += "il prezzo del tuo biglietto corrisponde a " + prezzoBiglietto.toFixed(2) + " &euro;";
        console.log(prezzoBiglietto);
    } 
    else if (etàPasseggero.value < 18) {
        prezzoBiglietto = 0.2333 * chilometri.value
        prezzoBiglietto -= scontoMinorenni;
        result.innerHTML = ""
        result.innerHTML += "il prezzo del tuo biglietto corrisponde a " + prezzoBiglietto.toFixed(2) + " &euro;";
        console.log(prezzoBiglietto);

    } 
    else {
        prezzoBiglietto = 0.2333 * chilometri.value
        result.innerHTML = ""
        result.innerHTML += "il prezzo del tuo biglietto corrisponde a " + prezzoBiglietto.toFixed(2) + " &euro;";
 
    }
    
    
}
)











