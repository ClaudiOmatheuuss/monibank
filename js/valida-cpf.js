export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g , "") //substitui os caracteres especiais . e - por uma string vazia
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log("Esse CPF não existe!")        
    } else {
        console.log("Esse CPF existe!")
    }
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
        '99999999999',
        '000000000000',
        '111111111111',
        '222222222222',
        '333333333333',
        '444444444444',
        '555555555555',
        '666666666666',
        '777777777777',
        '888888888888',
        '999999999999',
        '0000000000000',
        '1111111111111',
        '2222222222222',
        '3333333333333',
        '4444444444444',
        '5555555555555',
        '6666666666666',
        '7777777777777',
        '8888888888888',
        '9999999999999',
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999'
    ]

    return numerosRepetidos.includes(cpf) //compara o cpf com todos elementos da lista se retornar true encontrou um cpf com todos os números(inválidos) caso contrario retorna false 
}

function validaPrimeiroDigito(cpf){
    let soma = 0
    let multiplicador = 10

    for (let tamanho = 0; tamanho < 9; tamanho++){ //percorre toda a string do cpf
        soma += cpf[tamanho] * multiplicador //multiplicando cada digito pelo valor atual do multiplicador
        multiplicador-- //a cada vez que percorrer reduz o valor do multiplicador
    }

    soma = (soma * 10) % 11 //multiplica valor total por 10 e pega o resto(modulo) desse valor dividido por 11
    
    if(soma == 10 || soma == 11){   //se soma for == 10 ou 11 a variavel vai ser definida como 0
        soma = 0
    }

    return soma != cpf[9] //com base nesse calculo é possivel descobrir se qualquer cpf é valido: se soma for diferente de cpf[9] é valido caso contrário o CPF não é válido
}


function validaSegundoDigito(cpf){
    let soma = 0
    let multiplicador = 11

    for (let tamanho = 0; tamanho < 10; tamanho++){ 
        soma += cpf[tamanho] * multiplicador 
        multiplicador-- 
    }

    soma = (soma * 10) % 11 
    
    if(soma == 10 || soma == 11){  
        soma = 0
    }

    return soma != cpf[10]
}