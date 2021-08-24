let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho 
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// criando ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); 
    }
}

// acende a proxima cor
let lightColor = (element,number) => {

    
    //console.log(number);

    
    let oldColor = window.getComputedStyle(element).backgroundColor;
    
    number = number*500;
    
    
    

    setTimeout(() => {
        element.style.backgroundColor = oldColor;
        messageAlertCanBeShow=true;
        //element.classList.remove('selected');
        switch(element){
        
            case green:
                element.style.backgroundColor="#ccffcc";
                break;
            case red:
                element.style.backgroundColor="#ffcccc";
                break;
            case blue:
                element.style.backgroundColor="#b3e0ff";
                break;
            case yellow:
                element.style.backgroundColor="#ffffb3";
                 break;
        }
        
    }, number-250);
    
    setTimeout(() => {
        element.style.backgroundColor = oldColor;
        
        //element.classList.remove('selected');
        
    }, number);
    
    

}

// checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou!! Iniciando próximo nível...`)
        nextLevel();
    }
}

// funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// funcao para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\n Ih! Ala tu perdeu :P\n Clique em OK para reiniciar`);
    order = [];
    clickedOrder = [];

    playGame();
}

// funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genizzi! Iniciando...');
    score = 0;

    nextLevel();
} 

// eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// inicio do jogo
playGame();
