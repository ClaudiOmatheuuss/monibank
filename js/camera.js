const botaoIniciarCamera = document.querySelector('[data-video-botao]') //seleciona imagem clicavel do rostinho
const campoCamera = document.querySelector('[data-camera]') //seleciona div da camera
const video = document.querySelector('[data-video]') // seleciona video na div camera
const botaoTirarFoto = document.querySelector('[data-tirar-foto]') //seleciona botão de tirar foto
const canvas = document.querySelector('[data-video-canvas]') //seleciona canvas
const mensagem = document.querySelector('[data-mensagem]') //seleciona div da mensagem
let imagemURL = ""

botaoIniciarCamera.addEventListener("click", async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false}) //espera a inicialização da camera

    botaoIniciarCamera.style.display = "none" 
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo //iniciarVideo agora tem origem da const video
})

botaoTirarFoto.addEventListener("click", function(){ //ao botao de tirar foto ser clicado
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth) //desenha imagem no contexto 2d na posicao onde está o video e nas mesmas dimensões do canvas

    imagemURL = canvas.toDataURL("image/jpeg") //imagemURL recebe conversão da imagem gerada pelo canvas em uma URL

    campoCamera.style.display = "none"//tira o campo de tirar foto do display
    mensagem.style.display = "block" //exibe mensagem no display
})