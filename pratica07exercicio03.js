function media (valor01, valor02){
	valor01 = parseFloat (valor01);
	valor02 = parseFloat (valor02);

	if (valor01 > valor02) {
		alert ("Nota do aluno acima da média da disciplina em " + (valor01 - valor02) + " pontos");
	}

	else {
		alert ("Nota do aluno abaixo da média da disciplina em " + (valor01 - valor02) + " pontos");
	}
}