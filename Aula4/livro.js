function addPrice(amount) {
    this.price = amount;
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.price = 0;
    this.addPrice = addPrice;
}

function mostraLivro(){
	var titulo = document.getElementById("titulo").value;
	var autor = document.getElementById("autor").value;
	var preco = document.getElementById("preco").value;
	var novoLivro = new book(titulo, autor);
         novoLivro.addPrice(preco);
         document.getElementById("resposta").innerHTML = "Título: " + novoLivro.title + "<br>" + 
		 "Autor: " + novoLivro.author + "<br>" + "Preço: " + novoLivro.price + "<br>";
}

var mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", mostraLivro);