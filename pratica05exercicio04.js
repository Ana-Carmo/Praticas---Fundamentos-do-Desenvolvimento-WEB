function imparesMenores () {

var imparesMenores = document.getElementById("n").value
var i = 0
var quebraLinha = "</br>"

for (i >= 0; i <= imparesMenores; i++) 
	if (i % 2 == 0) {
	
	//document.getElementById("declaracao1").innerHTML = i;
	//document.getElementById("declaracao2").innerHTML = quebraLinha;
	document.write(i)
	document.write (quebraLinha)
}
}
