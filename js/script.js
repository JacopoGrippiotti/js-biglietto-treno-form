const chilometri = document.querySelector(".numeroChilometri");

const etàPasseggero = document.querySelector(".userAge");

const chilometriInseriti = document.querySelector("span.chilometriInseriti")

const etàInserita = document.querySelector("span.etàInserita")

let result = document.querySelector("#result");

let prezzoBiglietto = ((0.2333) * chilometri.value);

let scontoMinorenni = ((19.4 / 100) * prezzoBiglietto);

let scontoOver = ((37.7 / 100)* prezzoBiglietto);



if (etàPasseggero > 65){
   
    prezzoBiglietto -= scontoOver;
    document.getElementsByClassName("etàInserità").innerHTML += (etàPasseggero.value) + (" anni") ;
    document.getElementById("result").innerHTML += (prezzoBiglietto.toFixed(2) + " &euro") ;

} else if(etàPasseggero < 18) {
    
    prezzoBiglietto -= scontoMinorenni;
    document.getElementsByClassName("chilometriInseriti").innerHTML += (chilometriInseriti.value + " Km");
    document.getElementById("result").innerHTML += (prezzoBiglietto.toFixed(2) + " &euro") ;

}

let priceButton = document.querySelector("#prezzoBottone");

priceButton.addEventListener("click",function(){
    chilometriInseriti.classList.remove("displayNone");
    etàInserita.classList.remove("displayNone");
    result.classList.remove("displayNone")
}
)
    