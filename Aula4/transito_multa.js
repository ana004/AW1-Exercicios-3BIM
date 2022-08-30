function recebeDados() {
    var inData = document.getElementById("dataInfracao");
    var inMulta = document.getElementById("multa");

    var data = Date(inData);
    var dataLimite = calculaDataLimite(data);

    outDataLimite.textContent = "Data limite: " + dataLimite;
}

function calculaDataLimite(dataInfracao) {
    var resultado = new Date(dataInfracao);
    return resultado.setDate(dataInfracao.getDate() + 90);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", recebeDados);

