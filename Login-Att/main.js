function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('span#burg-mobile').innerHTML = 'menu'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('span#burg-mobile').innerHTML = 'close'
    }
}
