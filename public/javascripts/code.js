let boton = document.querySelector('.descargar-ahora');
let menu = document.querySelector('.contenedor-off-canvas');
let cerrarMenu = document.querySelector('.cerrar-menu')

if (boton && menu && cerrarMenu) {
    boton.addEventListener('click', () => {
        menu.classList.add('visible');
    })
    cerrarMenu.addEventListener('click', () => {
        menu.classList.remove('visible');
    })
}


