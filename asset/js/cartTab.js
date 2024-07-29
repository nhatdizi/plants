/*-----------------MENU BAR-----------------*/
const menu = document.querySelector('.menubar')
const closeMenu = document.querySelector('.close-menu')
const sideBarList = document.querySelector('.sidebar-list')

/*-----------------CART TAB-----------------*/
const cartIcon = document.querySelector('.header__cart i')
const cartTab = document.querySelector('.cart-tab')
const closeCartTab = document.querySelector('.cart-tab-close')
const body = document.querySelector('body')

/*-----------------MENU BAR-----------------*/
menu.addEventListener('click', function(){
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
    sideBarList.style.display = 'flex';
})

closeMenu.addEventListener('click', function(){
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
    sideBarList.style.display = 'none';
})

/*-----------------CART TAB-----------------*/

cartIcon.addEventListener('click', function(){
    cartTab.classList.add('show')
    body.style.overflow = 'hidden' //ngăn cuộn trang
    body.style.pointerEvents = 'none'   //ngăn click vào các phần tử khác không phải là cartTab
    event.stopPropagation(); // Ngăn chặn sự kiện click truyền lên các phần tử cha
})

closeCartTab.addEventListener('click', function(){
    cartTab.classList.remove('show')
    body.style.overflow = '' 
    body.style.pointerEvents = ''   
})

document.addEventListener('click', function(event) {
    if (!cartTab.contains(event.target) && !cartIcon.contains(event.target)) {
        cartTab.classList.remove('show');
        body.style.overflow = '' 
        body.style.pointerEvents = ''
    }
});

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        cartTab.classList.remove('show')
        body.style.overflow = '' 
        body.style.pointerEvents = ''
    }
})