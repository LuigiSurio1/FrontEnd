/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
 let num1 = 10;
 let num2 = 20;

  if (num1 > num2) { 
    console.log(num1);
  } else {
    console.log(num2);
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero1 = 15;
let numero2 = 5;

if(numero1 !== numero2){
  console.log('not equal');
} else {
  console.log('true');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let n1 = 20;
let n2 = 5;

if(n1%n2){
  console.log('divisibile per 5');
} else {
  console.log('false');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let l1 = 16;
let l2 = 8;

if(l1 + l2 || l1 - l2 == 8){
  console.log(true);
} else {
  console.log(false);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70;

if(totalShoppingCart > 50){
  console.log('spedizione gratuita');
} else {
  console.log(totalShoppingCart - 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let shoppingCart = 40;

if(shoppingCart*20/100 > 50){
  console.log('spedizione gratuita');
} else {
  console.log(shoppingCart - 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let b1 = 5;
let b2 = 'Marco'

if(b1 , b2 === Number){
  console.log('true');
} else {
  console.log(isNaN(b1 , b2));
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 10;

function nonPari(numero){
  if(isNaN(numero) == false){
    return (numero %2 == 1 ? true : false);
  } else {
    return null;
  }
} 

if(nonPari(numero) == true){
  console.log('true');
} else {
  console.log('false');
}

/*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */ 


  let val = 7 
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val <= 5) {
      console.log("Meno di 5");
    } else { 
      console.log("Uguale a 10 o maggiore");
    }
  

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me.city)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me.lastName)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = []
arr[arr.length] = 1
arr[arr.length] = 2
arr[arr.length] = 3
arr[arr.length] = 4
arr[arr.length] = 5
arr[arr.length] = 6
arr[arr.length] = 7
arr[arr.length] = 8
arr[arr.length] = 9
arr[arr.length] = 10
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[9] = 100;
console.log(arr[9])
