document.addEventListener('DOMContentLoaded',()=>{
    const btnBurger = document.querySelector('.header__burger-btn img'),
    btnClose = document.querySelector('.burger-menu__btn-close'),
    burgerMenu = document.querySelector('.burger-menu');

    btnBurger.addEventListener('click', (e)=>{
        e.preventDefault();
        if(burgerMenu.classList.contains('hidden')){
            burgerMenu.classList.add('open');
            burgerMenu.classList.remove('hidden')

        }
        console.log(e.target)
    });
    btnClose.addEventListener('click',(e)=>{
        e.preventDefault();
        if(burgerMenu.classList.contains('open')){
            burgerMenu.classList.add('hidden');
            burgerMenu.classList.remove('open');
        }
    })
});