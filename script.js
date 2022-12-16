const menu = document.querySelector('.menu');
const videos = document.querySelectorAll('.video');

menu.addEventListener('click', () =>{
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    });
});

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () =>{
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.toggle('change')
        });
    });
});

videos.forEach((video) => {
    video.addEventListener('mouseover', () =>{
        video.play()
    });
    video.addEventListener('mouseout', () =>{
        video.pause()
    });
});