var pacientes = []; // declara vetor global
function adicionarPaciente() {
    // cria referência aos elementos de entrada e saída de dados da página
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    var nome = inPaciente.value; // obtém nome do paciente
    // verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.push(nome); // adiciona o nome no final do vetor
    var lista = ""; // string para concatenar pacientes
    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
// cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function atenderPaciente() {

    pacientes.shift();

    var lista = ""; // string para concatenar pacientes
    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);

function adicionarUrgencia() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    var nome = inPaciente.value; // obtém nome do paciente
    // verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.unshift(nome); // adiciona o nome no final do vetor
    var lista = ""; // string para concatenar pacientes
    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista;
    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);