function calcularTotal() {

    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precioUnitario = parseFloat(document.getElementById('precio').value);
    const total = cantidad * precioUnitario;
    document.getElementById('mensajeModal').textContent = `${nombre}, compraste ${cantidad} productos, en total debes: $${total.toFixed(2)}.`;

    document.getElementById('miModal').style.display = "block";
    
    return false;
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}
