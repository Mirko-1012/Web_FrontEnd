var elementi = document.querySelectorAll("#prezzi li");

var sum = 0;

for(var i = 0; i<elementi.length; i++){
    var prezzo = Number(elementi[i].textContent)
    sum += prezzo
} 
    
    console.log("La somma è: " + sum);
    console.log("La media è: " + sum / elementi.length)