


console.log("Carregou o script");

	const opcao01 = "Camarão";
	const opcao02 = "Carne seca";
	
	var selectElem = document.getElementById('escolha-o-sabor');
	var res = document.querySelector('div#res'); // pega o id da DIV pela #
	//var pElem = document.getElementById('p')
	// When a new <option> is selected
	selectElem.addEventListener('change', function() { //função para pegar o select de um formulárui
		var index = selectElem.selectedIndex;
		// Add that data to the <p>
		//pElem.innerHTML = 'selectedIndex: ' + index;

		if (index == [1]) { // Vê a igualdade  é imprime no console e insere na DIV #res o resultado
			console.log(`O sabor escolhido foi ${opcao01}.`);
			//res.innerHTML = `O sabor escolhido foi ${opcao01}.`;

		} else if (index == [2]) { // Vê a igualdade  é imprime no console e insere na DIV #res o resultado
			console.log(`O sabor escolhido foi ${opcao02}.`);
			//res.innerHTML = `O sabor escolhido foi ${opcao02}.`;
		}
		
	})

	var sabor01 = document.write(`O sabor escolhido foi ${opcao02}.`);

	var quantidade = document.querySelector("#quantity_5ebf0cf443c40");
	console.log(quantidade);
	