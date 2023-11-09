import {Click} from "./module/Click.js"

const menu = new Click({
    target: '.menu__icon',
    parent: '.menu',
    class: 'menu-open',
    lock: true
})

const address = new Click({
    target: '.header__adress-img',
    parent: '.header__adress',
    class: 'header-open',
    lock: true
})


address.listenEvent()
menu.listenEvent()


//Получаем все пункты меню
const menuItems = document.querySelectorAll('.menu__list-item')

menuItems.forEach(item=>{
    item.addEventListener('click', openListItem)

    function openListItem(click){
        item.classList.toggle('item-open')
    }
})
