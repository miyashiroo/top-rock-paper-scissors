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

function playerSelect() { 
    let rawPlayerSelection = prompt('Rock, paper or scissor?').toUpperCase()

    //Verificação se o player errou na digitação:
    if (rawPlayerSelection === 'ROCK' || rawPlayerSelection === 'SCISSOR' || rawPlayerSelection === 'PAPER' ) {
        return rawPlayerSelection
    } else { 
        alert('Verify your answer. Its not rock paper or scissor')
        return  playerSelect()
        
    }

} 

// Função para jogar um round de playerSelection() x computerPlay()

function oneRound(playerSelection , computerSelection ) {
 
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR' ) {
        playerWins++
        return ("Player WIN!! Rock win over Scissor")

    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' ) {
        computerWins++
        return ('Computer WIN!! Paper win over Rock')

    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK' ) {
        playerWins++
        return ("PLAYER WIN !!  Paper win over Rock")        

    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR' ) {
        computerWins++
        return("Computer WIN!! Scissor wins over Paper")

    } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK' ){ 
        computerWins++
        return ("Computer WIN!! Rock wins over Scissor")

    } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER' ){
        playerWins++
        return('Player WIN!! Scissor Wins over Paper')       

    } else if (playerSelection === computerSelection) {

        return ('Players EMPATARAM')

    } else {

        return ('Alguma coisa deu errado!')

    }
    
 }

 // Função game() com 5 rodados e mostrar o vencedor.

 function game() {  
    totalGames = 0

    while (totalGames < 5) {
        console.log(oneRound(playerSelect(), computerPlay()))
        totalGames++ 
    }    


}




let playerWins = 0
let computerWins = 0  

game()
if ( playerWins > computerWins) {
    console.log('O PLAYER GANHOU UHUUUUU!!')

} else if (computerWins > playerWins ) {
    console.log('O COMPUTADOR GANHOU!! ') 

} else {
    console.log('EMPATARAM!!!')

}




















