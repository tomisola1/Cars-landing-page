const menu = document.querySelector('.menu')

menu.addEventListener('click', () =>{
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () =>{
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.toggle('change')
        })
    })
})