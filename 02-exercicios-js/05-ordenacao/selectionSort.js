
const vetor = [22,4,1,90,34,7,3,54,14,1];


    //SELECTION SORT - POUCAS TROCAS - MUITAS COMPARAÇÕES
    for (const i = 1; i < vetor.length; i++) { 
		
		for(const j = i+1; j <= vetor.length; j++){

            if(vetor[i] > vetor[j]){
                const aux = vetor[j];
                vetor[j] = vetor[i];
                vetor[i] = vetor[aux];
            }
        }
	
	}
    

    console.log(vetor);	

