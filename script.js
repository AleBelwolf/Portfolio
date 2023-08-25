function burguer() {
    /* Para fazer ativar a rotação e o X */
    let menuBtn = document.getElementById('burguer');
    menuBtn.classList.toggle('active');
 
    if (menu.style.display == 'block') {
        menu.style.display = 'none'   
          
    }
    else {
        menu.style.display = 'block'  
    }
}

function verMais() {
    let btnVerMais = document.getElementById('verMais')
    let screenTexto = document.querySelector('section.screenTexto')
    screenTexto.classList.toggle('maisProjetos')
    

    if (screenTexto.classList.contains('maisProjetos')) {
        btnVerMais.textContent = 'Ver menos'
    } else {
        btnVerMais.textContent = 'Ver mais'
    }
}