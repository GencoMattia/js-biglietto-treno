// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]


let travelKm = Number.parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
const passengerAge = Number.parseInt (prompt ("Quanti anni hai?"));

const ticketPrice = travelKm * 0.276;

const minorDiscount = 21;
const elderDiscount = 42;

let ticketFinalPrice = ""

if (passengerAge <= 18) {
    ticketFinalPrice = Number.parseFloat (ticketPrice - (ticketPrice / 100 * minorDiscount)).toFixed (2);
} else if (passengerAge >= 65) {
    ticketFinalPrice = Number.parseFloat (ticketPrice - (ticketPrice / 100 * elderDiscount)).toFixed (2);
} else {
    ticketFinalPrice = ticketPrice
}

console.log (ticketFinalPrice);

document.getElementById ("biglietto").innerHTML = `Il costo del biglietto è ${ticketFinalPrice}€`