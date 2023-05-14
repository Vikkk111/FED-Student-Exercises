let celsium = document.getElementById('celsium');
let farenheit = document.getElementById('farenheit');

celsium.oninput = () => {
    let output = (parseFloat(celsium.value) * 9) / 5 + 32;
    farenheit.value = parseFloat(output.toFixed(2));
}

farenheit.oninput = () => {
    let output = ((parseFloat(farenheit.value) - 32) * 5) / 9;
    farenheit.value = parseFloat(output.toFixed(2));
}