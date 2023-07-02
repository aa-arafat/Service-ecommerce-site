const menuIcon = document.querySelector('.mobile-menu>i');
menuIcon.addEventListener('click',function(){
    const nav = document.querySelector('header nav')
    nav.classList.add("active");
})

const closeIcon = document.querySelector('header .close');
closeIcon.addEventListener('click',function(){
    const nav = document.querySelector('header nav')
    nav.classList.remove("active");
})