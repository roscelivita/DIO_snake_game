let canvas = document.getElementById("snake")
let contexto = canvas.getContext("2d") //bidimensional: eixo x e y
let box = 32 //define o grid do canvas, cada quadrado com 32 pixels
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

/* criar o background */
function criarBG(){
    contexto.fillStyle = "lightgreen" //cor do background do canvas - estilo do contexto
    contexto.fillRect(0, 0, 16 * box, 16 * box) //desenha o retângulo, onde o jogo irá acontecer
            /* trabalha com 4 parâmetros, 
                posição de x, y, altura, e largura
                a altura do canvas irá ter 16 quadradas, 
                e cada quadrado terá 32 pixels (valor de box), 
                o mesmo vale para largura*/
}

/* a cobrinha será um array de coordenadas 
    -> dinâmica: adicionar um elemento e retirar o último */
function criarCobrinha(){
    for(let i = 0; i < snake.length; i++){
        contexto.fillStyle = "green";
        contexto.fillRect(snake[i].x, snake[i].y, box, box)
        console.log(snake[i].x, snake[i].y, box, box)
    }
}

criarBG()
criarCobrinha()
console.log(snake[0].x, snake[0].y, box, box)



