function burguer() {
    let menu = document.querySelector('#menu')

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
