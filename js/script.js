import ehUmCPF from "./valida-cpf.js"
const camposDoFormulario = document.querySelectorAll('[required]')//seleciona todos elementos com o atributo required

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))//quando o campo é desfocado a função verificaCampo é chamado com o campo como parametro
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) { //se o nome do campo for cpf e o tamanho dele for >= a 11
        ehUmCPF(campo);                                     // a função ehUmCPF irá ser executada
    }
}