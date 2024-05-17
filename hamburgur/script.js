const hamburger = document.querySelector('.hamburger-icon')
const headContainer= document.querySelector('.header-container')
const closeIcon = document.querySelector('.cross-icon')

hamburger.addEventListener('click', (e) =>{
    e.stopPropagation()
    headContainer.classList.add("show-icon")
})

closeIcon.addEventListener('click', () =>{
    headContainer.classList.remove("show-icon")
    })

    window.addEventListener('click',()=> {
        headContainer.classList.remove("show-icon")
    })