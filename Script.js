const panies = document.getElementById('panies');
const cart_title = document.querySelector('.cart-title');


const payes = document.getElementById('panierSidebar');

var isShowed = true
panies.addEventListener('click',()=>{
    if(!isShowed){
        payes.style.right = '-100%';
        isShowed = true;
    }else {
        payes.style.right = '0%';
        isShowed = false;
    }
})
cart_title.addEventListener('click',function(){
    payes.style.right = '-100%';
})
