function calculadora(numero1,numero2,opcao){

    let valor1 = numero1
    let valor2 = numero2
    let operacao = opcao
    let resultado

    switch (operacao) {
        case "SOMAR":
        case '+':    
            resultado = valor1 + valor2                        

            break;

        case "SUBTRAIR":
        case '-':    
            resultado = valor1 - valor2
            
            break;

        case "MULTIPLICAR":
        case '*':    
            resultado = valor1 * valor2
            
            break;

        case "DIVIDIR":
        case '/':    
            if (valor2 == 0)
            console.log('Não é possivel dividir por 0')
            
            else resultado = valor1 / valor2;
            
            break;
    
        default:
            console.log('ERRO')

            break;
    }

    if (resultado != undefined)
        return Number (resultado).toFixed(2)

}

module.exports={
    calculadora
}