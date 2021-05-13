function resultado () {
var log1base = document.getElementById("n1").value;
var log2 = document.getElementById("n2").value;
var resultado = Math.log (log2) / Math.log(log1base);

document.getElementById("declaracao").innerHTML = "Resultado: " + resultado;
//document.write(resultado);
}