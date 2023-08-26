export default function ehMaiorDeIdade(campo) {
    const dataDeNascimento = new Date(campo.value) //recebe o valor do campo de data e o reconhece como uma data
    validaIdade(dataDeNascimento) //executa funcao com o valor digitado no campo
    console.log(validaIdade(dataDeNascimento))
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) //recebe a data informada e soma os anos em 18

    return dataAtual >= dataMais18 
}