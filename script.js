let canvas = document.getElementById("snake")
let contexto = canvas.getContext("2d") //bidimensional: eixo x e y
let box = 32 //define o grid do canvas, cada quadrado com 32 pixels
let snake = []
snake[0] = {
    x: 7 * box,
    y: 7 * box
}
let direction //= "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let score = 0

/* criar o background */
function criarBG(){
    contexto.fillStyle = "lightgreen" //cor do background do canvas - estilo do contexto
    contexto.fillRect(0, 0, 16 * box, 16 * box) //desenha o retângulo, onde o jogo irá acontecer
            /* trabalha com 4 parâmetros, posição de x e y, altura e largura
                a altura do canvas irá ter 16 quadrados,cada um com 32 pixels (valor de box), 
                o mesmo vale para largura*/
}

/* a cobrinha será um array de coordenadas 
    -> dinâmica: adicionar um elemento e retirar o último */
function criarCobrinha(){
    for(let i = 0; i < snake.length; i++){
        contexto.fillStyle = "green";
        contexto.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

/* criar a "comida" */
function criarComida(){
    contexto.fillStyle = "red"
    contexto.fillRect(food.x, food.y, box, box)
}

/* criar envento de escuta - monitorar a mudança de direção */
document.addEventListener('keydown', update)
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left" 
    if(event.keyCode == 38 && direction != "down") direction = "up" 
    if(event.keyCode == 39 && direction != "left") direction = "right" 
    if(event.keyCode == 40 && direction != "up") direction = "down" 
}

function iniciarJogo(){
    
    /* fazer com que a cobrinha ao 'sair' da tela apareça no lado oposto*/
    /* if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box */

    /* fazer com que a cobrinha se choque com a borda do canvas - game over */
    if(snake[0].x > 15 * box || snake[0].x < 0 || snake[0].y > 15 * box || snake[0].y < 0){
        clearInterval(jogo)
        alert(`Game over =(
            recarregue a página `)
    } 

    /* controlar o choque da cabeça da cobra com o seu próprio corpo */
    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo)
            alert(`Game over =(
                recarregue a página `)
        }
    }

    criarBG()
    criarCobrinha()
    criarComida()

    let snakeX = snake[0].x 
    let snakeY = snake[0].y

    if(direction == "right") snakeX += box
    if(direction == "left") snakeX -= box
    if(direction == "up") snakeY -= box
    if(direction == "down") snakeY += box

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else{
        food.x = Math.floor(Math.random() * 15 + 1) * box
        food.y = Math.floor(Math.random() * 15 + 1) * box

        score +=5
        document.getElementById("score").innerHTML = score
    }
    

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)
}

alert("pressionar qualquer tecla de seta para começar!")
let jogo = setInterval(iniciarJogo, 100)






