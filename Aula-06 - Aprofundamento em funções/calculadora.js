function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (x)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'))

if (!operacao || operacao >= 7) { // se operacao for diferente ou operecao for maior que 7, não execute.
    alert('Erro - operação inválida!')
    calculadora();
} else { 
    
let n1 = Number(prompt('Insira o primeiro valor')) // Se tudo ok, faça...
let n2 = Number(prompt('Insira o segundo valor'))
let resultado;

if(!n1 || !n2 ){ // Verificação de variáveis: Se estiver algo errado não resposta, não execute
    alert('Erro - parâmentros inválidos!')
    calculadora()
} else { // Senão, execute!
    function Soma(){
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
    }
    
    function Sub(){
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
    }
    
    
    function Mult(){
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
    }
    
    
    function DivR(){
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
    }
    
    
    function DivInt(){
        resultado = n1 % n2
        alert(` O resto da divisão inteira entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
    }
    
    
    function Pont(){
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual ${resultado}`)
        novaOperacao()
    }
    
    function novaOperacao(){
        let opcao = prompt('Deseje fazer outra operação?\n 1 - Sim\n 2 - Não')
    
        if (opcao == 1){
            calculadora()
        } else if (opcao == 2){
            alert('Até mais!')
        } else{
            alert('Digite uma opção válida!')
            novaOperacao()
        }
    }


}

/*
if (operacao == 1){
        Soma()
        } else if (operacao == 2){
        Sub()
        } else if(operacao == 3){
         Mult()
        }else if(operacao == 4){
         DivR()
        } else if(operacao == 5){
        DivInt()
        }else if(operacao == 6){
        Pont()
        }
    }
}
*/

switch(operacao)  {
    case 1:
        Soma();
        break
        case 2:
            Sub();
            break
            case 3:
                Mult();
                break
                case 4:
                    DivR();
                    break
                    case 5:
                        DivInt();
                        break
                        case 6:
                            Pont();
                            break
                    }
                }
            }

            
calculadora()


