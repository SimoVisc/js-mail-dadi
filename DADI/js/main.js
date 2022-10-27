"use strict"
// 1.genera il numero per il giocatore
const playerNumber=Math.floor(Math.random()*6)+1;
// 2.genera il numero per la cpu
const cpuNumber=math.floor(Math.random()*6)+1;

console.log(playerNumber,cpuNumber)
// 3. se il numero del giocatore è > del numero della cpu- vince il giocatore
// altrimenti se il numero del giocatore è < del numero della cpu- vince la cpu
// Else i numeri sono uguali- pareggio
if(playerNumber>cpuNumber){
    console.log("ha vinto il giocatore")
}else if(playerNumber<cpuNumber){
    console.log("ha vinto il computer")
}else (playerNumber=cpuNumber){
    console.log("pareggio")
}