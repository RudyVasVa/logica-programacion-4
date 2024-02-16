function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function calcularFibonacci() {
    let numero = document.getElementById("numeroInput").value;
    
    if (!esNumero(numero)) {
        alert("Error: Por favor ingrese un número válido.");
        return;
    }

    let n = parseInt(numero);
    if (n <= 0) {
        alert("Error: Por favor ingrese un número positivo.");
        return;
    }

    let resultado = "";
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        resultado += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
    }

    document.getElementById("resultado").innerText = "Serie de Fibonacci: " + resultado;
}