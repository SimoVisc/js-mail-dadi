"use strict"
// Chiedi all’utente la sua email
let mail= prompt("Inserisci la tua mail")
// controlla che sia nella lista di chi può accedere
const utenti= ("Luca@gmail.com", "francesca@gmail.com", "simona@gmail.com")
for(i=0; i<utenti.length; i++){
    console.log(utenti[i])
}
// stampa un messaggio appropriato sull’esito del controllo