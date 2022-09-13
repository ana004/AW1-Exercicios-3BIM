function calcularPreco() {
    var inQuilo = document.getElementById("inQuilo");
    var inGramas  = document.getElementById("inGramas");

    var quiloPreco = Number(inQuilo.value);
    var gramas = Number(inGramas.value);

    var preco = quiloPreco * (gramas / 1000);

    outPreco.textContent = "Valor: " + preco;
}

var btCalcularPreco = document.getElementById("btCalcularPreco");
btCalcularPreco.addEventListener("click", calcularPreco);