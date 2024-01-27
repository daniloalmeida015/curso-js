
const vetor = [22,4,1,90,34,7,3,54,14,1];


   
    //BUBBLE SORT - MUITAS TROCAS - MUITAS COMPARAÇÕES
    for (const i = 0; i < vetor.length; i++) { 
		
	
		for (const j= i; j < vetor.length-i+1; j++) {
			
            if(vetor[j] > vetor[j+1]){
                const aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
		} 
	
	}	

console.log(vetor);