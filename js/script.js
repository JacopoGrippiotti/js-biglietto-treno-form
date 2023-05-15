const chilometri = document.querySelector(".numeroChilometri");

const etàPasseggero = document.querySelector(".userAge");

let prezzoBiglietto = ((0.2333) * chilometri.value);

let scontoMinorenni = ((19.4 / 100) * prezzoBiglietto);

let scontoOver = ((37.7 / 100)* prezzoBiglietto);

if (etàPasseggero > 65){
   
    prezzoBiglietto -= scontoOver;
    document.getElementsByClassName("userAge").innerHTML += (etàPasseggero.value + " anni") ;
    document.getElementById("result").innerHTML += prezzoBiglietto.toFixed(2);

} else if(etàPasseggero < 18) {
    
    prezzoBiglietto -= scontoMinorenni;
    document.getElementsByClassName("chilometriInseriti").innerHTML += (chilometriInseriti.value + " Km");
    document.getElementById("result").innerHTML += prezzoBiglietto.toFixed(2);

}

let priceButton = document.querySelector("#prezzoBottone");

priceButton.addEventListener("click",function(){
    
}
)
    