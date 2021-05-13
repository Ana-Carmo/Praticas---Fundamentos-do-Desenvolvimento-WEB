function mostrar (div){
	var texto = div.children[0].children[1];
	if (texto.style.display == "none") {
		texto.style.display = "block";
	}
	 else {
	 	texto.style.display = "none";
	 }
}