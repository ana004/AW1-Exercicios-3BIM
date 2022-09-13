function recebeDados() {
    var inData = document.getElementById("inDataInfracao");
    var inMulta = document.getElementById("inMulta");

    var data = inData.value;

    // declara variável do tipo date
    var dataLimite = new Date();

    // obtém as partes da data da multa
    var partes = data.split("-");
    // "seta" as partes da data
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

    var dia = dataLimite.getDate();    // obtém o dia da multa

    dataLimite.setDate(dia + 90);      // aumenta 90 dias na data da multa

    var dia = dataLimite.getDate();
    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();
    outDataLimite.textContent = "Data limite: " + dataLimite;
}

var btCalcularMulta = document.getElementById("btCalcularMulta");
btCalcularMulta.addEventListener("click", recebeDados);
