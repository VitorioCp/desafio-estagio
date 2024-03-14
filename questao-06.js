function pertenceSequenciaFibonacci(numero) {
    let valor1 = 0;
    let valor2 = 1;
  
    while (valor1 <= numero) {
      if (valor1 === numero) {
        return true;
      }
      let temp = valor2;
      valor2 = valor1 + valor2;
      valor1 = temp;
    }
    return false;
  }
  
  const verificarNumero = 21;
  
  if (pertenceSequenciaFibonacci(verificarNumero)) {
    console.log('O número ' + verificarNumero + ' é uma sequência de Fibonacci');
  } else {
    console.log('O número ' + verificarNumero + ' não é uma sequência de Fibonacci');
  }