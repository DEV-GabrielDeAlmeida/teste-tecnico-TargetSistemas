/*
 * Sequência de Fibonacci
 * inicio por 0 e 1
 * próximo valor será a soma dos 2 anteriores
 * (0,1,1,2,3,5,8,13,21,34)
 * >> Informe um número
 * >> Calcule a sequência de Fibonacci
 * >> Retorna uma mensagem avisando se o número pertence ou não a sequência
 */

function pertenceFibonacci(n) {
  let fibonacci = [0, 1];

  if (n < 0) {
    return `${n} não pertence a sequência de Fibonacci.`;
  }

  while (fibonacci[fibonacci.length - 1] < n) {
    let proxFibonacci =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proxFibonacci);
  }

  if (fibonacci.includes(n)) {
    return `O número ${n} pertence a sequência de Fibonacci.`;
  } else {
    return `O número ${n} não pertence a sequência de Fibonacci.`;
  }
}

let numeroTeste = 34; // << DIGITE O NÚMERO QUE DESEJA TESTAR
let resultado = pertenceFibonacci(numeroTeste);

console.log(resultado);
