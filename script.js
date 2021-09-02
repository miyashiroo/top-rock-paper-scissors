// RANDOM pick pelo computador













function computerPlay() {
    const rockPaperScissor = ['rock', 'paper', 'scissor'];
    const randomPick = Math.floor(Math.random() * rockPaperScissor.length)

    if (randomPick === 0) {
        return "ROCK"
    } else if(randomPick === 1){ 
        return "PAPER"
    }else {
        return 'SCISSOR'
    }
    
}

// pergunta qual o a escolha do player

/* function playerSelect() { 
    let rawPlayerSelection = prompt('Rock, paper or scissor?').toUpperCase()

    //Verificação se o player errou na digitação:
    if (rawPlayerSelection === 'ROCK' || rawPlayerSelection === 'SCISSOR' || rawPlayerSelection === 'PAPER' ) {
        return rawPlayerSelection
    } else { 
        alert('Verify your answer. Its not rock paper or scissor')
        return  playerSelect()
        
    }

}  */

// Função para jogar um round de playerSelection() x computerPlay()

function oneRound(playerSelection , computerSelection ) {
 
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR' ) {
        playerWins++
        return whoWins = "PLAYER"

    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' ) {
        computerWins++
        return whoWins = 'Computer'

    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' ) {
        playerWins++
        return whoWins = "PLAYER"

    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR' ) {
        computerWins++
        return whoWins = 'Computer '

    } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK' ){ 
        computerWins++
        return whoWins = 'Computer '

    } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER' ){
        playerWins++
        return whoWins = "PLAYER "     

    } else if (playerSelection === computerSelection) {

        return whoWins = "Players empataram"

    } else {

        return ('Alguma coisa deu errado!')

    }
    
 }

 // Função game() com 5 rodados e mostrar o vencedor.

 /* function game() {  
    totalGames = 0

    while (totalGames < 5) {
        console.log(oneRound(playerSelect(), computerPlay()))
        totalGames++ 
    }    


} */

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const divContainer = document.querySelector('.results')
const createP = document.createElement('p')
const placar = document.querySelector('.placar')



paper.addEventListener('click', () => {
    oneRound('PAPER', computerPlay())
    const createP = document.createElement('p');
    createP.textContent = `Ganhador foi ${whoWins}`
    divContainer.appendChild(createP)
    placar.textContent = `O placar agora está Player: ${playerWins} e pro Computador: ${computerWins}`
    
    if (playerWins >= 5) {
        alert('Player Ganhou')
        alert('Acabou o jogo ')
    }
    
    if ( computerWins >= 5) {
        alert('Computer Ganhou')
    }
 })

scissor.addEventListener('click', () => {
     oneRound('SCISSOR', computerPlay())
     const createP = document.createElement('p');
     createP.textContent = `Ganhador foi ${whoWins}`
     divContainer.appendChild(createP)
     placar.textContent = `O placar agora está Player: ${playerWins} e pro Computador: ${computerWins}`
     if (playerWins >= 5) {
        alert('Player Ganhou')
    }
    
    if ( computerWins >= 5) {
        alert('Computer Ganhou')
    }
 })


rock.addEventListener('click', () => {
   oneRound('ROCK', computerPlay())
   const createP = document.createElement('p');
   createP.textContent = `Ganhador foi ${whoWins}`
   divContainer.appendChild(createP)
   placar.textContent = `O placar agora está Player: ${playerWins} e pro Computador: ${computerWins}`
   if (playerWins >= 5) {
    alert('Player Ganhou')
}

if ( computerWins >= 5) {
    alert('Computer Ganhou')
}
})



let playerWins = 0
let computerWins = 0   
let whoWins = 0 



if (playerWins >= 5) {
    alert('Player Ganhou')
}

if ( computerWins >= 5) {
    alert('Computer Ganhou')
}

/* game() */


/* if ( playerWins > computerWins) {
    console.log('O PLAYER GANHOU UHUUUUU!!')

} else if (computerWins > playerWins ) {
    console.log('O COMPUTADOR GANHOU!! ') 

} else {
    console.log('EMPATARAM!!!')

}
 */













