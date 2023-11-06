const menuList = document.querySelector('.menu-list')
const openBtn = document.querySelector('#open-btn')
const closeBtn= document.querySelector('#close-btn')
const nav = document.querySelector('nav')
const navHeight = nav.getBoundingClientRect().height
const topLink = document.querySelector('.toplink')



window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navHeight) {
        nav.classList.add('fixedNav')
    } else {
        nav.classList.remove('fixedNav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})


openBtn.addEventListener("click", ()=>{
    menuList.classList.add('show-sidebar')
})

closeBtn.addEventListener("click", ()=>{
    menuList.classList.remove('show-sidebar')
})

const links= document.querySelectorAll('.link')

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href')
        const element = document.querySelector(id)
        let position = element.offsetTop - navHeight
        window.scrollTo(0, position)
        menuList.classList.remove('show-sidebar')
    })
})