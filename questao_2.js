/*
 * VERIFICAR STRING
 * verifica a existência da letra "a"
 * seja maiúscula ou minuscula
 * quantidade de vezes que aparece
 * >> Informa a string
 * >> realiza a verificação
 * >> Retorna uma mensagem com as informações
 */

function quantasVezesA(txt) {
  let lowerTxt = txt.toLowerCase();
  let count = 0;

  for (let i = 0; i < lowerTxt.length; i++) {
    if (lowerTxt[i] == 'a') {
      count++;
    }
  }

  return `A letra 'a' aparece ${count} vezes na string "${txt}".`;
}

let stringTeste = "A inteligência artificial evolui cada dia mais." // << STRING QUE DESEJA TESTAR
let resultado = quantasVezesA(stringTeste);

console.log(resultado);
