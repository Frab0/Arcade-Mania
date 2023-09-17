
const cells = document.querySelectorAll('.cell');

let turn = 0;

const cellSigns = [];  /** creiamo un Array vuoto*/

for(let i = 0; i < cells.length; i++){  
    const cell = cells[i];

    cell.addEventListener('click', function(){
        //console.log(`hai cliccato la cella ${i}`);

        /** qua gli diciamo di andare a guardare dentro cellSigns se esiste qualcosa nella posizione della nostra i di questo momento
         *  se clicchiamo la cella 0 va a vedere se nella cella 0 c'è già un elemento, in caso fa return e quindi lo blocca */

        if(cellSigns[i]) {
            //console.log('cella piena');
            return;
        }

        turn++;

        let sing;
        /*Nell' if c'è un operatore di modulo, tra le parentesi
        gli dice SE sto dividendo il numero del turno per 2 e non ho resto
        allora...
        (da fare con 3 uguali per il motivo vedere la teoria.js   3 uguali sono l'entità)
        
        CON " UGUALI FUNZIONA LO STESSO*/
        if(turn % 2 === 0) {   
            sing ='O'
        } else {
            sing ='X'
        }
        cell.innerText = sing;
        cellSigns[i] = sing; /** questo è un modo per appuntarsi cosa c'è dentro */
        //console.table(cellSigns);

        let hasWon = checkVictory();
        //console.log('Ha vinto', hasWon);

        if(hasWon){
           showAlert(`${sing} Ha Vinto !`);
        } else if(turn === 9) {
            showAlert(`Pareggio`);
        }
    })
}


function checkVictory () {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for(let i = 0; i < winningCombinations.length; i++) { /** .length le conta a posto mio più o meno hahaha*/
        const combination = winningCombinations[i];

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];
        //console.log("combinazione", a, b, c);

        if(cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]){
            //console.log(`Trovata combinazione vincente ${a} ${b} ${c}`);
            return true;
        }
    }
    return false;
}







