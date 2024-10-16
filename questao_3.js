/*
int INDICE = 12, SOMA = 0, K = 1;

enquanto K < INDICE faça { 
    K = K + 1; 
    SOMA = SOMA + K; 
 } 

 imprimir(SOMA);
 */

let indicie = 12;
let soma = 0;
let k = 1;

while (k < indicie) {
  k++;
  soma += k;
}

console.log(soma); // Imprime: 77

// >> O loop ocorrerá enquanto K(inicialmente=1) for menor que o INDICE(12)
// >> Primeiro passo é somar +1 a K
// >> Depois atualizar o novo valor de K à SOMA

// K = 1 + 1 = 2
// SOMA = 0 + 2 = 2

// K = 2 + 1 = 3
// SOMA = 2 + 3 = 5

// K = 3 + 1 = 4
// SOMA = 5 + 4 = 9

// K = 4 + 1 = 5
// SOMA = 9 + 5 = 14

// .......
