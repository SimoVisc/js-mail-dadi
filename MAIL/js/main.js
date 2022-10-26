"use strict"
// Chiedi all’utente la sua email
const mailList= ["francesco@gmail.com","luca@gmail.com","marco@gmail.com",]
const userMail=promt("inserisci la tua mail")
let found=false
for(let i=0; i<mailList.length; i++){
   if(userMail===mailList[i]){
    found=true
   }
}

// stampa un messaggio appropriato sull’esito del controllo
if (found){
    alert("Accesso consentito")
}else{
    alert("accesso negato")
}