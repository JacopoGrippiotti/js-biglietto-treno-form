const chilometri = document.getElementById("numeroChilometri");

const etàPasseggero = document.getElementById("userAge");

let prezzoBiglietto = ((0.2333) * chilometri.value);

let scontoMinorenni = ((19.4 / 100) * prezzoBiglietto);

let scontoOver = ((37.7 / 100)* prezzoBiglietto);

if (etàPasseggero > 65){
   
    prezzoBiglietto -= scontoOver;

} else if(etàPasseggero < 18) {
    
    prezzoBiglietto -= scontoMinorenni;

}

console.log(prezzoBiglietto.toFixed(2) + " Є");
