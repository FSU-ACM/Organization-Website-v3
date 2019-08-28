var index = 0,
    slides = document.querySelector('.caro_slides').children,
    btns = document.querySelectorAll('.btn'),
    info = document.querySelectorAll('.slide_info');

init();

function init() {
    document.querySelector('.caro_arrows > .next').addEventListener('click', next);
    document.querySelector('.caro_arrows > .prev').addEventListener('click', prev);
    initBtns();
    setTimeout(show, 4000);
}

function show() {
    next();
    setTimeout(show, 4000);
}

function next() {
    slides[index].id = '';
    btns[index].id = '';
    info[index].id = '';
    index = ++index % slides.length; 
    slides[index].id = 'active';
    info[index].id = 'active';
    btns[index].id = 'active';   
}

function prev() {
    slides[index].id = '';
    btns[index].id = '';
    info[index].id = '';
    if (index == 0)
        index = slides.length - 1;
    else
        index--; 
    slides[index].id = 'active';
    btns[index].id = 'active';
    info[index].id = 'active'; 
}

function initBtns() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            slides[index].id = '';
            btns[index].id = '';
            info[index].id = '';
            slides[i].id = 'active';
            btns[i].id = 'active';
            info[i].id = 'active';
            index = i;
        })
    }
}