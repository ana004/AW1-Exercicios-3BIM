function calcularPeso()
{
    var inAltura = document.getElementById("inAltura");
    var inSexo = document.getElementById("inSexo");

    var altura = Number(inAltura.value);
    var sexo = inSexo.value;

    var resultado;

    if (sexo == "feminino") 
    {
        resultado = 21*altura*altura;
    } else if(sexo == "masculino")
    {
        resultado == 22*altura*altura;
    }

    outPesoIdeal.textContent = "Peso ideal: " + resultado;
} 

var btCalcularPeso = document.getElementById("btCalcularPeso");
btCalcularPeso.addEventListener("click", calcularPeso);

function limparCampos() {
    // Limpa os conteúdos dos elementos
    document.getElementById("inName").value = "";
    document.getElementById("inSexo").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outPesoIdeal").textContent = "";
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inName").focus();
    }
    var btLimpar = document.getElementById("btLimpar");
    btLimpar.addEventListener("click", limparCampos);
    