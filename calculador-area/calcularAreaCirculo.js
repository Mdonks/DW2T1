const prompt = require('prompt-sync')();

function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

function main() {
    console.log("Calculadora de área de círculo");
    const radio = parseFloat(prompt("Ingrese el radio del círculo: "));
    
    if (!isNaN(radio) && radio > 0) {
        const area = calcularAreaCirculo(radio);
        console.log(`El área del círculo con radio ${radio} es: ${area}`);
    } else {
        console.log("Por favor, ingrese un número válido para el radio del círculo.");
    }
}

main();
