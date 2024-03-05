window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    let a = document.querySelector('#started')
    if(window.scrollY > 300){
        header.classList.add('white-background')
        a.classList.add('green-background')
    }else{
        header.classList.remove('white-background')
        a.classList.remove('green-background')
    }
})


//animazione delle M
