const dineroInput = document.getElementById('slider');
const totalSpan = document.getElementById('importe');
const dineroInput2 = document.getElementById('slider-2');
const totalSpan2 = document.getElementById('num2');

dineroInput.addEventListener('input', () => {
  const valor = dineroInput.value;
  // Convertir a número
  const total = parseInt(valor);
  // Formatear con puntos de separación
  const totalFormateado = total.toLocaleString('es-CO');
  // Mostrar el total
  totalSpan.textContent = totalFormateado;
});

dineroInput2.oninput = ()=> {
totalSpan2.innerHTML = dineroInput2.value;
}