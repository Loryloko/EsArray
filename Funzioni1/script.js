function play(tiri){
    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 0; i < tiri; i++) {
        let giocatore1tiro = Math.floor(Math.random() * (6 - 1)) + 1;
        let giocatore2tiro = Math.floor(Math.random() * (6 - 1)) + 1;
        giocatore1 = giocatore1 + giocatore1tiro
        giocatore2 = giocatore2 + giocatore2tiro
    }
    if (giocatore1 > giocatore2){
        return `giocatore 1 ha vinto con un punteggio di ${giocatore1}`
    }else if (giocatore2 > giocatore1){
        return `giocatore 2 ha vinto con un punteggio di ${giocatore2}`
    }else {
        return `pareggio con un punteggio di ${giocatore1}`
    }
}

let tiri = Number(prompt('quanti tiri devono effettuare i giocatori'))

let result = play(tiri)
console.log(result);