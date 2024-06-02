
function mostrarProductoSeleccionado() {
    var productoSelect = document.getElementById('producto');
    var productoSeleccionado = document.getElementById('productoSeleccionado');
    var productoNombre = productoSelect.options[productoSelect.selectedIndex].text;
    productoSeleccionado.textContent = 'Seleccionado: ' + productoNombre;
}

// Llama a la función al cargar la página
mostrarProductoSeleccionado();

// Actualiza el producto seleccionado cuando cambia la selección
document.getElementById('producto').addEventListener('change', function() {
    mostrarProductoSeleccionado();
});

document.getElementById('comprarpipipi').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var producto = document.getElementById('producto').value;
    var cantidad = document.getElementById('cantidad').value;

    var datos = {
        nombre: nombre,
        email: email,
        producto: producto,
        cantidad: cantidad
    };
