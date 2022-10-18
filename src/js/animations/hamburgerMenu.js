const hamburgerMenu = document.querySelector('#hamburgerMenu')
const nav = document.querySelector('.mobile-nav')
const icon = document.querySelector('.hamburger-menu')


hamburgerMenu.addEventListener('click', (e) => {

    if(nav.classList.contains('opened')) {
        nav.classList.remove('opened')
        document.body.classList.remove('stop-scroll')
        icon.innerHTML = 'menu'
    } else {
        nav.classList.add('opened')
        document.body.classList.add('stop-scroll')
        icon.innerHTML = 'close'
        
    }
})