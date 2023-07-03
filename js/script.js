const menuIcon = document.querySelector('.mobile-menu>i');
menuIcon.addEventListener('click',function(){
    const nav = document.querySelector('header nav')
    nav.classList.add("active");
    document.querySelector(".menu-background-shadwo").classList.add('d-block')
})

function closemenu(){
    const nav = document.querySelector('header nav')
    nav.classList.remove("active");
    document.querySelector(".menu-background-shadwo").classList.remove('d-block')
}
const closeIcon = document.querySelector('header .close');
closeIcon.addEventListener('click',closemenu)
document.querySelector(".menu-background-shadwo").addEventListener('click',closemenu)


































document.querySelector('[data-serial="1"]').classList.add("d-block");

  const dataSerials=[];

document.querySelectorAll("[data-serial]").forEach(function(image){
   const data = image.getAttribute('data-serial');
   dataSerials.push(Number(data));
})

const min = dataSerials[0];
const max = dataSerials[dataSerials.length-1];
console.log(min,max);

document.querySelector('#next').addEventListener('click',function(){
   const selectedImage = document.querySelector(".d-block");

   const data = selectedImage.getAttribute("data-serial");
    
   document.querySelector(`[data-serial="${data}"]`).classList.remove("d-block");
   
   if(Number(data) !== max){
    const nextBanner = document.querySelector(`[data-serial="${Number(data) + 1}`);

   nextBanner.classList.add("d-block");
   }
   else{
    const nextBanner = document.querySelector(`[data-serial="${min}"`);

   nextBanner.classList.add("d-block");
   }
})


document.querySelector('#prev').addEventListener('click',function(){
    const selectedImage = document.querySelector(".d-block");
 
    const data = selectedImage.getAttribute("data-serial");
     
    document.querySelector(`[data-serial="${data}"]`).classList.remove("d-block");
    
    if(Number(data) !== min){
     const nextBanner = document.querySelector(`[data-serial="${Number(data) - 1}`);
 
    nextBanner.classList.add("d-block");
    }
    else{
     const nextBanner = document.querySelector(`[data-serial="${max}"`);
 
    nextBanner.classList.add("d-block");
    }
 })