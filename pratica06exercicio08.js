function mediaAritmetica(){
    
    var tam = prompt("Quantos números serão informados?");
    
       var vet=[tam];
        var media;
        var soma = 0;
        
        
        for(var i = 0; i < tam; i++){
            
            
            vet[i] = prompt("Informe um número: ");
            
            vet[i] = parseFloat(vet[i]);
             
        soma = soma + vet[i];
                            
        }
        
    media = soma;
    
                document.getElementById("resultado").innerHTML = "A média aritmética é: " + media;
}
