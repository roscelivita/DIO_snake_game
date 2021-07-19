let canvas = document.getElementById("snake")
let contexto = canvas.getContext("2d") //bidimensional: eixo x e y
let box = 32 //define o grid do canvas, cada quadrado com 32 pixels

function criarBG(){
    contexto.fillStyle = "lightgreen" //cor do background do canvas - estilo do contexto
    contexto.fillRect(0, 0, 16 * box, 16 * box) //desenha o retângulo, onde o jogo irá acontecer
            /* trabalha com 4 parâmetros, 
                posição de x, y, altura, e largura
                a altura do canvas irá ter 16 quadradas, 
                e cada quadrado terá 32 pixels (valor de box), 
                o mesmo vale para largura*/
}

criarBG()