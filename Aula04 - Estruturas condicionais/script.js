var jogador1 = 1
var jogador2 = 1
var placar;

// if ternário
jogador1 !=  -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores inválidos')

// usando if
    if(jogador1 > 0 && jogador2 == 0) {
        console.log('jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    }
    // usando else if
    else if (jogador2 > 0 && jogador1 == 0){
        console.log ('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    } 
    
    //usando else
    else {
        console.log('Nínguém marcou ponto');
    }
