/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(4, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a1, a2) {
    if (a1 === a2) {
        return (a1 + a2) * 3;
    } else {
        return a1 + a2;
    }
}
console.log(crazySum(2, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
    if (a > 19) {
        return Math.abs(a - 19) * 3;
    } else {
        return Math.abs(a - 19);
    }
}

console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n > 20 && n <= 100) || n === 400 ) {
        return 'true';
    }
        return 'false';
    }
console.log(boundary(50))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(p) {
    if (!p.startsWith('EPICODE')) {
        return p + 'EPICODE';
    }
    return p;
}
console.log(epify('Scuola, è molto intensa'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(h) {
    if (h % 3 === 0 || n % 7 === 0) {
        return 'true';
    } else {
        return 'false'
    }
}
console.log(check3and7(12));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(e) {
    let splitLetter = e.split("");
    let reverseLetter = splitLetter.reverse();
    let joinLetter = reverseLetter.join("");
    return joinLetter;
}
console.log(reverseString('Epicode'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(o) {
    const newO = o.split(' ');
    for (i = 0; i < newO.lenght; i++) {
        new0[i] = newO[i][0].toUpperCase() + newO[i].substring(1);
    }

    return newO.join(' ')

}
console.log(upperFirst('la bella vita'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(k) {
    return k.slice(0, k - 1);

}
console.log(cutString('maiale'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(j) {
    let jrandom = (Math.floor(Math.random() * 11));
    return jrandom;
}
console.log(giveMeRandom());