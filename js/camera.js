const botaoIniciarCamera = document.querySelector('[data-video-botao]') //seleciona imagem clicavel do rostinho
const campoCamera = document.querySelector('[data-camera]') //seleciona div da camera
const video = document.querySelector('[data-video]') // seleciona video na div camera

botaoIniciarCamera.addEventListener("click", async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false}) //espera a inicialização da camera

    botaoIniciarCamera.style.display = "none" 
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo //iniciarVideo agora tem origem da const video
})