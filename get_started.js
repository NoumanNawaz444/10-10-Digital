let card_one = document.getElementById('card_one');
let card_two = document.getElementById('card_two');
let card_three = document.getElementById('card_three');

let continue_one = document.getElementById('continue_one');
let continue_two = document.getElementById('continue_two')
let back_two = document.getElementById('back_two')
let back_three = document.getElementById('back_three')

let s_1 = document.getElementById('s_1')
let s_2 = document.getElementById('s_2')
let s_3 = document.getElementById('s_3')

continue_one.addEventListener('click', twoaya)

function twoaya() {
  s_1.style.backgroundColor = 'white'
  s_1.style.color = '#E81F6C'
  s_2.style.opacity = 1

  card_one.style.display = 'none'
  card_two.style.display = 'flex'
  card_three.style.display = 'none'
}

back_two.addEventListener('click', oneaya)

function oneaya() {
  s_1.style.backgroundColor = 'transparent'
  s_1.style.color = 'white'
  s_2.style.opacity = .5

  card_one.style.display = 'flex'
  card_two.style.display = 'none'
  card_three.style.display = 'none'
}

continue_two.addEventListener('click', threeaya)

function threeaya() {
  s_1.style.backgroundColor = 'white'
  s_1.style.color = '#E81F6C'
  s_2.style.backgroundColor = 'white'
  s_2.style.color = '#E81F6C'
  s_3.style.opacity = 1

  card_one.style.display = 'none'
  card_two.style.display = 'none'
  card_three.style.display = 'flex'
}

back_three.addEventListener('click', two_aya)

function two_aya() {
  s_1.style.backgroundColor = 'white'
  s_1.style.color = '#E81F6C'
  s_2.style.backgroundColor = 'transparent'
  s_2.style.color = 'white'
  s_3.style.opacity = .5

  card_one.style.display = 'none'
  card_two.style.display = 'flex'
  card_three.style.display = 'none'
}



// script.js

