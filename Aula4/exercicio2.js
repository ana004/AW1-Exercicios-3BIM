function recebeDados() 
{
    var inMarca = document.getElementById("inMarca");
    var inPreco = document.getElementById("inPreco");

    var marca = inMarca.value;
    var preco = Number(inPreco.value);

    var resultado1 = precoAVista(preco);
    var resultado2 = precoAPrazo(preco);

    outPrecoAVista.textContent = "Preço a vista: " + resultado1;
    outPrecoAPrazo.textContent = "Preço a prazo: " + resultado2;
}

var btCalcularPrecos = document.getElementById("btCalcularPrecos");
btCalcularPrecos.addEventListener("click", recebeDados);

function precoAVista(preco)
{
    var resultado = preco - (preco*5/100);
    return resultado;
}

function precoAPrazo(preco)
{
    var metade1 = preco - (preco*50/100);
    var metade2 = metade1 / 12;
    return "Entrada: " + metade1 + "\nRestante Parcelado: " + metade2;
}