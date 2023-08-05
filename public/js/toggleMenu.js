
const burguerMenu = document.querySelector('i')
const navDiv = document.querySelector('.navDiv')


burguerMenu.addEventListener('click', ()=> {
    navDiv.classList.toggle('displayNone')
})