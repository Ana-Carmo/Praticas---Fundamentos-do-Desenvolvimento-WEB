/************************************************
 *** Considerando um carrossel com 4 figuras. ***
 ************************************************/
var numero = 1;

function anterior() {
  numero = numero - 1;
  if (numero < 1)
    numero = 4;
  mostrarFigura(numero);
}

function posterior() {
  numero = numero + 1;
  if (numero > 4)
    numero = 1;
  mostrarFigura(numero);
}

function mostrarFigura(numero) {
  var titulo, figura;
  switch (numero) {
    case 1:
      titulo = "Desenho 01";
      figura = "<img src='desenho01.jpg'>";
      break;
    case 2:
      titulo = "Desenho 02";
      figura = "<img src='desenho02.jpg'>";
      break;
    case 3:
      titulo = "Desenho 03";
      figura = "<img src='desenho03.jpg''>";
      break;
    case 4:
      titulo = "Desenho 04";
      figura = "<img src='desenho04.jpg''>";
      break;
    default:
      titulo = "Desenho 01";
      figura = "<img src='desenho01.jpg'>";
    }
    cabecalho.innerHTML = titulo;
    imagem.innerHTML = figura;
}
