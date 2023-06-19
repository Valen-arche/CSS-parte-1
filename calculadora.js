document.addEventListener('DOMContentLoaded', function() {
    const formulario1 = document.getElementById('formulario1');
    const metrosInput = document.getElementById('metros');
    const resultadoElement = document.getElementById('resultado');
  
    formulario1.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const metros = parseInt(metrosInput.value);
  
      let transporte = '';
  
      if (metros > -1 && metros <= 1000) {
        transporte = 'Pie';
      } else if (metros > 1001 && metros <= 10000) {
        transporte = 'Bicicleta';
      } else if (metros > 10001 && metros <= 30000) {
        transporte = 'Colectivo';
      } else if (metros > 30001 && metros <= 100000) {
        transporte = 'Auto';
      } else if (metros > 100001) {
        transporte = 'Avion';
      }
  
      console.log(`Para ${metros} metros recomendamos ir en ${transporte}`);
      resultadoElement.innerHTML = `El medio de transporte recomendado es: ${transporte}`;
    });
  });
  function calcularMayor() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const numero3 = parseInt(document.getElementById('numero3').value);
    const numero4 = parseInt(document.getElementById('numero4').value);
  
    const mayor = Math.max(numero1, numero2, numero3, numero4);
  
    document.getElementById('resultado2').textContent = `El número mayor es: ${mayor}`;
  }
