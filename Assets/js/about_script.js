let ham = document.getElementById('ham')
let cross_white = document.getElementById('cross_white')

let ul_aya = document.getElementById('ul_aya')

ham.addEventListener('click' , nav_aya)

function nav_aya(){
    ul_aya.style.top = 0 ;
}

cross_white.addEventListener('click' , nav_gya)

function nav_gya(){
    ul_aya.style.top = '-200%' ;
}