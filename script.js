//declarando o id (DOM)
 
const btnMob = document.querySelector('#btnMob');
 
function toggleMenu(){
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active");
}
btnMob.addEventListener('click', toggleMenu);

// Para declarar as variaveis podemos usar o const ou let 
const $html = document.querySelector('html')
const $checkBox = document.querySelector('#switch')
 
$checkBox.addEventListener('change', function(){
    $html.classList.toggle('light-theme')
})