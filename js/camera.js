const botaoIniciarCamera = document.querySelector("[data-video-botao]") //seleciona imagem clicavel do rostinho
const campoCamera = document.querySelector("[data-camera]") //seleciona div da camera
const video = document.querySelector("[data-video]") // seleciona video na div camera
const botaoTirarFoto = document.querySelector("[data-tirar-foto]") //seleciona botão de tirar foto
const canvas = document.querySelector("[data-video-canvas]") //seleciona canvas
const mensagem = document.querySelector("[data-mensagem]") //seleciona div da mensagem
const botaoEnviarFoto = document.querySelector("[data-enviar]") //seleciona botao de enviar(quero abrir minha conta) 
let imagemURL = ''

botaoIniciarCamera.addEventListener("click", async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video:true, audio:false }) //espera a inicialização da camera

    botaoIniciarCamera.style.display = "none" 
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo //iniciarVideo agora tem origem da const video
})

botaoTirarFoto.addEventListener('click', function(){ //ao botao de tirar foto ser clicado
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height) //desenha imagem no contexto 2d na posicao onde está o video e nas mesmas dimensões do canvas

    imagemURL = canvas.toDataURL('image/jpeg') //imagemURL recebe conversão da imagem gerada pelo canvas em uma URL

    campoCamera.style.display = "none"//tira o campo de tirar foto do display
    mensagem.style.display = "block" //exibe mensagem no display
})

botaoEnviarFoto.addEventListener('click', () => { //ao clicar em quero abrir minha conta
    const receberDadosExistentes = localStorage.getItem("cadastro") //recebe o cadastro do local storage
    const converteRetorno = JSON.parse(receberDadosExistentes) //transforma em string 
    
    converteRetorno.imagem = imagemURL //atribui novo objeto(imagem) com o atributo imagemURL

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno)) //atualiza o localStorage enviando o objeto cadastro de volta e o JSON converteRetorno em string

    window.location.href = '../pages/abrir-conta-form-3.html' //redireciona para outra página
})