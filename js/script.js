// ISTRUZIONI PER L'UTENTE
alert("Scrivi il tuo nome, il pc ti salutera', scrivendo il nome cambiandolo di colore a seconda del sesso. ")

// INSERIRE IL NOME UTENTE
var name = prompt("Scrivi il nome :");
console.log(name);
// CONTROLLO INSERIMENTO NOME
if (!isNaN(name)) {
  alert("Inserimento non corretto, perfavore inserisci un nome.")
  var name = prompt("Scrivi il nome :");
}
document.getElementById("nome").innerHTML = name;
// INSERIRE IL SESSO UTENTE
var sex = prompt("Scrivi il m (Man) e f (Female) :");
console.log(sex);
// CONTROLLO INSERIMENTO SESSO
if (!isNaN(sex)) {
  alert("Inserimento non corretto, perfavore inserisci il sesso.")
  var name = prompt("Scrivi il sesso :");
}

// VERIFICA DEL SESSO PER IL CAMBIO COLORE
// SE (SEX = M) = NAME DIVENTERA' .BLUE
if (sex === "m"){
  document.getElementById("nome").style.color =  "blue";
}
// ALTRIMENTI (SEX = F) = NAME DIVENTERA' .PINK
else if(sex === "f"){
  document.getElementById("nome").style.color = "pink";
}
