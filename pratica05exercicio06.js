function resultado () {
var codigo = document.getElementById("numero").value;

// Cálculo area do retângulo
if (codigo == 1) {
	var n1 = prompt  ("Informe a base:");
	var n2 = prompt ("Informe a altura:");

	var resultado = n1 * n2;
	resultado = parseInt(resultado);

	document.getElementById("declaracao").innerHTML = "A área do retângulo é:" +  resultado;

	//document.write(resultado);
	}

	// Cálculo da área do triângulo
	else
		if (codigo == 2) {
		var n1 = prompt  ("Informe a base:");
		var n2 = prompt ("Informe a altura:");

		var resultado = n1 * n2 / 2;
		resultado = parseInt(resultado);

		document.getElementById("declaracao").innerHTML = "A área do triângulo é:" + resultado;
		//document.write(resultado);
		}

		//Cálculo da área do círculo
		else
			if (codigo == 3) {
			var n1 = prompt  ("Informe o raio:");

			var resultado = Math.PI * (n1) * 2;
			resultado = parseInt(resultado);

			document.getElementById("declaracao").innerHTML = "A área do círculo é:" + resultado;
			//document.write(resultado);	
			}

			// Cálculo da área do trapézio
			else
				if (codigo == 4) {
				var n1 = prompt  ("Informe a base maior:");
				var n2 = prompt ("Informe a base menor:");
				var n3 = prompt ("Informe a altura:");

				var resultado = [(n1 + n2) * n3];
				resultado = parseInt(resultado);

				document.getElementById("declaracao").innerHTML = "A área do trapézio é:" + resultado;
				//document.write(resultado);		
				}
}