window.addEventListener('DOMContentLoaded',function (  ){

    let menu = document.querySelector('.catalog-header')

    menu.addEventListener('click',function ( e ){
        const targetElement = (e.target)
        if(targetElement.closest('.menu-catalog__link')  ){
            let  submenu= document.querySelector('.menu-catalog__sub-menu')
            submenu.style.display = 'block'
        }
    })




})
