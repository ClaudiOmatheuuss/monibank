import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"
const camposDoFormulario = document.querySelectorAll('[required]')//seleciona todos elementos com o atributo required
const formulario = document.querySelector('[data-formulario]') //seleciona formulario

formulario.addEventListener("submit" , (e) => { //ao ser enviado executa
    e.preventDefault()

    const listaRespostas = { //objeto que recebe as respostas do campo
        nome: e.target.elements["nome"].value ,
        email: e.target.elements["email"].value, 
        rg : e.target.elements["rg"].value ,
        cpf: e.target.elements["cpf"].value, 
        aniversario: e.target.elements["aniversario"].value, 
    }
    localStorage.setItem("cadastro" , JSON.stringify(listaRespostas)) //atribui item do objeto listaRespostas convertido em um json composto por strings para o localStorage

    window.location.href = './abrir-conta-form-2.html' //redireciona para prox sessão do cadastro
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))//quando o campo é desfocado a função verificaCampo é chamado com o campo como parametro
    campo.addEventListener("invalid", evento => evento.preventDefault()) //quando o campo estiver invalido o evento de pop-up é evitado
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = ''
    campo.setCustomValidity('') //inicializa verificação com mensagem vazia
    if (campo.name == "cpf" && campo.value.length >= 11) { //se o nome do campo for cpf e o tamanho dele for >= a 11
        ehUmCPF(campo);                                     // a função ehUmCPF irá ser executada
    }
    if (campo.name == "aniversario" && campo.value != ""){ //se o nome do campo for aniversario e não estiver vazio
        ehMaiorDeIdade(campo)                              //função ehMaiorDeIdade é executada
    }
    tiposDeErro.forEach(erro => { //para cada tipo de erro ele verifica se esse erro é verdade em campo.validity e imprime no console
        if(campo.validity[erro]){ //se esse erro for true
            mensagem = mensagens[campo.name][erro] //pega mensagem de acordo com o campo e o erro que ocorreu
            console.log(mensagem)   //exibe mensagem
        }
    })    
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro") //fica no escopo procurando o elemento com essa classe mais proximo do campo
    const validadorDeInput = campo.checkValidity() //checka se o input é válido

    if (!validadorDeInput) {  //se validador de input for false 
        mensagemErro.textContent = mensagem // a mensagem de erro respectiva É exibida
    } else {                        // se não
        mensagemErro.textContent = "" // mensagemErro(span recebe string vazia)
    }
}