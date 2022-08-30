function mostrarDados() {
    // cria referência aos elementos da página
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");
    var outClassif = document.getElementById("outClassif");
    var outPrecoVenda = document.getElementById("outPrecoVenda");
  
    // obtém o conteúdo dos campos de entrada de dados
    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);
  
    // valida o preenchimento dos campos
    if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
      alert("Informe corretamente os dados do veículo");
      inModelo.focus();
      return;
    }
  
    var precoVenda1 = ccalcularPrecoAVista(preco);
  
    outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
  }
  // cria referência ao botão e associa ao evento click a função mostrarDados
  var btCalcular = document.getElementById("btCalcular");
  btCalcular.addEventListener("click", mostrarDados);
  
  
  // função recebe valor e status do veículo como parâmetro
  function calcularPrecoAVista(valor) {
    var resultado = valor - (valor*(5/100));
    return resultado; 
  }