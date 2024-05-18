
// script.js
document.getElementById('circleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    var radius = parseFloat(document.getElementById('radius').value);
    var circumference = calcularCircunferencia(radius);
    document.getElementById('result').textContent = "Circunferência: " + circumference.toFixed(2);
});

function calcularCircunferencia(raio) {
    return 2 * Math.PI * raio;
}