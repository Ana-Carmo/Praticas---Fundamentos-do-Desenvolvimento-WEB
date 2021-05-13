function calculaVolume(){
    
    var raio = document.getElementById("raio").value;
    
    raio = parseFloat(raio);
    
    
    
    var volume = (4 * 3.14 * (Math.pow(raio, 3))) / 3;
    
    document.getElementById("resultado").innerHTML = "O volume é: " + volume;
    
    
}