import loadHeader, {loadFooter} from './header';
import loadHome from './home';
import loadMenu from './menu'
import loadContact from './contact'

loadHeader()
loadHome()
document.querySelector('.home-header-option').addEventListener('click', function(event) {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    loadHome()
})
document.querySelector('.menu-header-option').addEventListener('click', function(event) {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    loadMenu()
})
document.querySelector('.contact-header-option').addEventListener('click', function(event) {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    loadContact()
})
loadFooter()
//loadContact()
//loadMenu()
