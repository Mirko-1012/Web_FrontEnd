var array = [5, 8, 10, 6, 12, 9];
var sum = 0;
var media = 0;

for(var i = 0; i<array.length; i++){
    console.log(array[i]);
    sum = sum + array[i];
} 
    
    console.log("La somma è: " + sum);
    console.log("La media è: " + sum / array.length)