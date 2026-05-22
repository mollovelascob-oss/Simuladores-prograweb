/**
 * EJERCICIO 1: SIMULADOR DE TRANSFERENCIA DE CALOR
 * Fórmula: T = Ts + (T0 - Ts) * e^(-k * t)
 */
function calcularCalor() {
    // Captura estricta de datos por ID mediante .value
    var t0 = parseFloat(document.getElementById('t0').value);
    var ts = parseFloat(document.getElementById('ts').value);
    var k = parseFloat(document.getElementById('k').value);
    var t = parseFloat(document.getElementById('t').value);
    
    var contenedor = document.getElementById('resultado-calor');

    // Validaciones nativas y lógicas de consistencia
    if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        contenedor.innerHTML = "⚠️ Por favor, complete todos los campos numéricos.";
        return;
    }
    if (t < 0) {
        contenedor.innerHTML = "⚠️ El tiempo (t) no puede ser un valor negativo.";
        return;
    }

    // Procesamiento matemático usando Math.exp()
    var exponente = -k * t;
    var resultadoExacto = ts + (t0 - ts) * Math.exp(exponente);
    
    // Redondeo obligatorio al entero más cercano con Math.round()
    var resultadoFinal = Math.round(resultadoExacto);

    // Renderizado dinámico de la respuesta
    contenedor.innerHTML = "✨ Temperatura Final Estimada: " + resultadoFinal + " °C";
    
    // Dispara el destello interactivo en el contenedor
    animarContenedor(contenedor);
}


/**
 * EJERCICIO 2: CALCULADOR DE COMBINACIONES COMPLEJAS
 * Fórmula General: C(n, r) = n! / (r! * (n - r)!)
 */

// Función propia obligatoria para el cálculo del factorial de manera iterativa
function calcularFactorial(numero) {
    if (numero < 0) return 0;
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularCombinaciones() {
    // Captura estricta de datos por ID mediante .value
    var n1 = parseInt(document.getElementById('n1').value);
    var r1 = parseInt(document.getElementById('r1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var r2 = parseInt(document.getElementById('r2').value);

    var contenedor = document.getElementById('resultado-combinaciones');

    // Validaciones obligatorias para evitar desbordamientos o incompatibilidades (r > n)
    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {
        contenedor.innerHTML = "⚠️ Todos los campos de los grupos son obligatorios.";
        return;
    }
    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        contenedor.innerHTML = "⚠️ Los valores de los grupos no pueden ser negativos.";
        return;
    }
    if (r1 > n1) {
        contenedor.innerHTML = "⚠️ Error Grupo 1: El valor 'r1' no puede ser mayor que 'n1'.";
        return;
    }
    if (r2 > n2) {
        contenedor.innerHTML = "⚠️ Error Grupo 2: El valor 'r2' no puede ser mayor que 'n2'.";
        return;
    }
    // Límite de seguridad para evitar desbordamientos numéricos en JavaScript (Infinity)
    if (n1 > 170 || n2 > 170) {
        contenedor.innerHTML = "⚠️ Use números menores o iguales a 170 para evitar que el factorial supere el límite numérico.";
        return;
    }

    // Aplicar la ecuación de combinación a ambos grupos de forma independiente
    var combGrupo1 = calcularFactorial(n1) / (calcularFactorial(r1) * calcularFactorial(n1 - r1));
    var combGrupo2 = calcularFactorial(n2) / (calcularFactorial(r2) * calcularFactorial(n2 - r2));

    // Efectuar el producto total de combinaciones
    var resultadoTotal = combGrupo1 * combGrupo2;

    // Formatear el resultado con separadores de miles legibles
    var totalFormateado = resultadoTotal.toLocaleString();

    // Desplegar resultado formateado dinámicamente en la interfaz
    contenedor.innerHTML = "🎉 Combinaciones Totales: <br><span style='font-size: 1.4rem; color: #ff0066;'>" + totalFormateado + "</span>";
    
    // Dispara el destello interactivo en el contenedor
    animarContenedor(contenedor);
}

// Función auxiliar para generar retroalimentación visual al usuario cuando calcula
function animarContenedor(elemento) {
    elemento.classList.add('pop-effect');
    setTimeout(function() {
        elemento.classList.remove('pop-effect');
    }, 300);
}