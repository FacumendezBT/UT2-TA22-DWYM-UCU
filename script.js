window.onload = () => {
    const imagenDispositivo = document.getElementById('imagen-dispositivo');
    const nombreDispositivo = document.getElementById('nombre-dispositivo');
    const descripcionDispositivo = document.getElementById('descripcion-dispositivo');

    function updateWindowSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width <= 600) {
            imagenDispositivo.src = 'iphone.png';
            nombreDispositivo.textContent = 'iPhone';
            descripcionDispositivo.textContent = `Tamaño: ${width}px x ${height}px`;
        } else if (width <= 1024) {
            imagenDispositivo.src = 'ipad.png';
            nombreDispositivo.textContent = 'iPad';
            descripcionDispositivo.textContent = `Tamaño: ${width}px x ${height}px`;
        } else {
            imagenDispositivo.src = 'macbook.png';
            nombreDispositivo.textContent = 'MacBook';
            descripcionDispositivo.textContent = `Tamaño: ${width}px x ${height}px`;
        }
    }

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
}
