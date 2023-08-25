export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g , "") //substitui os caracteres especiais . e - por uma string vazia
    validaNumerosRepetidos(cpf) 

    console.log(validaNumerosRepetidos(cpf)) //chama a função e exibe retorno no console
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf) //compara o cpf com todos elementos da lista se retornar true encontrou um cpf com todos os números(inválidos) caso contrario retorna false 
}