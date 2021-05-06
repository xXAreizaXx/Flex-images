const panels = document.querySelectorAll('.panel');

function Abrir() {
    this.classList.toggle('open');
}

function Transicion(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }    
}

panels.forEach(panel => panel.addEventListener('click' , Abrir))
panels.forEach(panel => panel.addEventListener('transitionend' , Transicion))