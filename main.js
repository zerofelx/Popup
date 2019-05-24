function toggle() {
    const popup = document.getElementById('cambiar')

    popup.classList.toggle('desvanecerB')
    popup.classList.toggle('oculto')
    popup.classList.toggle('desvanecer')

}

function fadeOut() {
    const popup = document.getElementById('cambiar')

    popup.classList.toggle('desvanecerB')
    setTimeout(() => {
        popup.classList.toggle('oculto')
    }, 510);
    popup.classList.toggle('desvanecer')
}
