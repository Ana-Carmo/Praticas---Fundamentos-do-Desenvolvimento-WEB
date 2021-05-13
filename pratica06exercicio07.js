function converterTemperatura(farh){
    var farh = document.getElementById("farh").value;
    
    farh = parseFloat(farh);
    
    var celsius = (5/9) * (farh - 32);
    
    document.getElementById("resultado").innerHTML = celsius + "º Celsius";
}
    