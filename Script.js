//VARIAVEIS GLOBAIS
let valores = [0]; 
var total = Number(); 
//FUNÇÃO QUE VAI GERENCIAR GASTOS
function gerenciarGastos() {
  //VARIAVEIS PARA CAUCULAR VALOR
  let valor = document.querySelector("#valor").value
  let valorConvert = parseFloat(valor); 
  let tipoDado = document.getElementsByName("tipoDado");
  //VARIAVEIS DO HISTORICO DE GASTOS
  let listaGastos = document.querySelector("#listaGastos")
  let item = document.createElement('option')
  let descricao = document.querySelector("#descricao").value
  
  if (valorConvert <= 0){
    alert("ERRO:ADICIONE UM NÚMERO" )
 //CONDICAO PARA ESCOLHER CASO SEJA PARA ADICIONAR OU RETIRAR VALOR
  }else if (tipoDado[0].checked) {
    //INSERE VALOR AO ARRAY
    valores.push(valorConvert)
    //VARIAVEIS QUE COLETAM OS ULTIMOS VALORES DO ARRAY
    const ultimoValor = parseFloat(valores[valores.length - 1])
    const penultimoValor = parseFloat(valores[valores.length - 2]) 
    //SOMA QUANTO VOCE TINHA AO QUE VOCE ADICIONOU
    total = penultimoValor + ultimoValor
    //ADICIONA O VALOR QUE VOCE TEM AO ARRAY
    valores.push(total)
    //REGISTRA NA LISTA O VALOR ADICIONADO
    item.text = `${descricao} +R$ ${ultimoValor.toFixed(2)}`
    listaGastos.appendChild(item)
 //CONDICAO CASO TENHA RETIRADO ALGUM VALOR
  } else {
    //ADICIONA VALOR AO ARRAY
    valores.push(valorConvert)
    //VARIAVEIS QUE COLETAM OS ULTIMOS VALORES DO ARRAY
    const ultimoValor = parseFloat(valores[valores.length - 1])
    const penultimoValor = parseFloat(valores[valores.length - 2])
    //REGISTRA A DIFERENÇA DE QUANTO TINHA E O VALOR RETIRADO
    total = penultimoValor - ultimoValor
    //ADICIONA O VALOR QUE VOCE TEM AO ARRAY
    valores.push(total)
    //REGISTRA NA LISTA O VALOR GASTO
    item.text  = `${descricao} -R$ ${ultimoValor.toFixed(2)}` 

    listaGastos.appendChild(item)
  }
  //MOSTRA QUAL VALOR VOCÊ POSSUI AUTOMATICAMENTE AO ADICIONAR O VALOR
  //SEM PRECISAR RECARREGAR A PÁGINA
  atualizarTotal()
}

//FUNÇAO QUE MOSTRA O VALOR DISPONIVEL 
function atualizarTotal(){
    let valorDisponivel = document.querySelector("#valorDisponivel");
    valorDisponivel.innerHTML = `R$${total.toFixed(2)}`
    if(total < 0){
      valorDisponivel.style.color = "#E21818"
    }
  }
