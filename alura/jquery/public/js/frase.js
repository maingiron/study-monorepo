/*
 * Scrapbook
 *
 *
 * $.get("url", função)		-> Função para fazer a requisição AJAX
 *   fail 					-> Recebe uma função anônima com o código que é executado quando um erro acontece
 * data						-> Argumento que retorna da própria requisição -- Obs.: Pode ser qualquer nome
 *
 * Math.random() 			-> Retorna um número aleatório entre 0 a 1
 * Math.floor() 			-> Arredonda o número para baixo
 *
 */


$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria() {

	$("#spinner").toggle();

	// Função para fazer a requisição AJAX
	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	 // fail recebe uma função anônima com o código que é executado quando um erro acontece
	 .fail(function() {

	 	$("#erro").toggle();

	 	setTimeout(function() {
			$("#erro").toggle();
	 	}, 2000);
	 	
	 })
	 // always sempre invocar um código (independente se for erro ou sucesso) após da requisição AJAX
	 .always(function() {

	 	$("#spinner").toggle();
	 });

}

// data é o argumento que retorna da própria requisição -- Obs.: Pode ser qualquer nome
function trocaFraseAleatoria(data) {

	var frase = $(".frase");

	// Math.random() retorna um número aleatório entre 0 a 1
	// Math.floor() arredonda o número para baixo
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);

	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);

}


function buscaFrase() {

	$("#spinner").toggle();

	var fraseId = $("#frase-id").val();
	var dados = { id: fraseId };

	// O segundo argumento é o que será buscado no servidor. Precisa ser em forma de objeto
	$.get("http://localhost:3000/frases", dados, trocaFrase)
	 .fail(function() {

	 	$("#erro").toggle();

	 	setTimeout(function() {
			$("#erro").toggle();
	 	}, 2000);

	 })
	 .always(function() {

	 	$("#spinner").toggle();
	 });

}


function trocaFrase(data) {

	var frase = $(".frase");
	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data.tempo);

}