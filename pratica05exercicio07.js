function soma () {
//Coleta das informações fornecidas pelo usuário
var n1 = document.getElementById ("n1").value; //prompt ("Informe o primeiro número:")
var n2 = document.getElementById ("n2").value; //prompt ("Informe o segundo número:")

//Soma dos valores
var minimo = Math.floor(n1) + Math.floor(n2);
var maximo = Math.ceil(n1) + Math.ceil(n2);

//Conversão dos valores para número inteiro
minimo = parseInt (minimo);
maximo = parseInt (maximo);

//Apresentação dos resultados
document.getElementById("declaracao1").innerHTML = "Soma do mínimo: " + minimo;
document.getElementById("declaracao2").innerHTML = "Soma do máximo: " + maximo;
//document.write("<div id='minimo'> Soma Mínimo: " + minimo + ". </div>");
//document.write("<div id='minimo'> Soma Máximo: " + maximo + ". </div>");
}