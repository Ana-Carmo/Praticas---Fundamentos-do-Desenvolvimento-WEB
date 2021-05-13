function resultado () {
var resultado = document.getElementById("numero").value;

if (resultado % 2 == 0) {
	document.getElementById ("declaracao").innerHTML = "O número" + resultado + "é par";
	//document.write ("O número é par");
}

else {
	document.getElementById("declaracao").innerHTML = "O número" + resultado + "é ímpar";
	//document.write ("O número é impar");
}
}