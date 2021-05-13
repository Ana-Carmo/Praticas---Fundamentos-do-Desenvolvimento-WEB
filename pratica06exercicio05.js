function verificaDesconto(){
    
    var i; 
    var desconto = 0;
    var vetor = new Array();
    vetor[0] = document.getElementById("n1").value;
    vetor[1] = document.getElementById("n2").value;
    vetor[2] = document.getElementById("n3").value;
    vetor[3] = document.getElementById("n4").value;
    vetor[4] = document.getElementById("n5").value;
    
    for(i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i] - ((vetor[i] * 10) / 100);
        
        document.getElementById("desconto").innerHTML = document.getElementById("desconto").innerHTML + vetor[i] + "</br>";
        
    }
}
        