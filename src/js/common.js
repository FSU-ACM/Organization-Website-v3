addCurrent();
calcHeight();
window.addEventListener('scroll', () => {
    let fsu = document.querySelector('div.fsu') || document.querySelector('div.fsu-hide');
    if (window.scrollY > 150)
        fsu.className = 'fsu-hide';
    else
        fsu.className = 'fsu';
});

document.querySelector('div.to-content').addEventListener('click', () => {
    document.querySelector('div.content').scrollIntoView({
        behavior: 'smooth'
    });
});

function calcHeight() {
    document.querySelector('div.hero').style.height = String(window.innerHeight - 80) + 'px';
    document.querySelector('div.content').style.height = String(window.innerHeight - 80) + 'px';
};

function addCurrent() {
    let current = document.querySelector('a');

    if (current == window.location.href)
        current.classList.add('current');
};


