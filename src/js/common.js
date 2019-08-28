addCurrent();
calcHeight();
logoScrollEvent();
mobMenuClickEvent();
heroClickEvent();
resizeEvent();


function getHeight(element, keywords = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']) {
    var elementStyle = window.getComputedStyle(element),
        elementHeight = keywords
        .map(key => {
            return parseInt(elementStyle.getPropertyValue(key), 10)
        })
        .reduce((prev, curr) => {
           return (prev + curr)
        });

    return elementHeight;
}  

function getWidth(element) {
    var elementStyle = window.getComputedStyle(element),
        elementWidth = ['width', 'padding-left', 'padding-right', 'margin-left', 'margin-right']
        .map(key => {
            return parseInt(elementStyle.getPropertyValue(key), 10)
        })
        .reduce((prev, curr) => {
           return (prev + curr)
        });

    return elementWidth;
}

function getLeaderHeight() {
    var profiles = document.querySelector('.profile_wrapper'),
        elements = Array.from(profiles.children),
        leaderHeight = 0;

    elements.forEach((element) => {
        if (element.className.includes('header'))
            leaderHeight += getHeight(element);
        else {
            Array.from(element.children).forEach((profile) => {
                leaderHeight += getHeight(profile);
            });
        }
    });

    return leaderHeight;
}

function calcHeight() {
    var navHeight = document.querySelector('header').getBoundingClientRect().height,
        footerHeight = document.querySelector('footer').getBoundingClientRect().height;

    if (window.location.pathname.includes('index'))
    { 
        //document.querySelector('div.hero').style.height = String(window.innerHeight - navHeight) + 'px';
        //document.querySelector('div.content').style.height = String(window.innerHeight - navHeight - footerHeight) + 'px';
    } 
    else if (!window.location.pathname.includes('leadership'))
    {    
        var container = document.querySelector('div.content'),
            count = container.childElementCount,
            containerHeight = (count != 0 ? getHeight(container.firstElementChild) : getHeight(container));

        if ((containerHeight + navHeight + footerHeight) < window.innerHeight)
            container.style.height = String(window.innerHeight - navHeight - footerHeight) + 'px';
        else {
            container.style.height = String(containerHeight + 
                    ['margin-top', 'margin-bottom']
                    .map((key) => {
                        return parseInt(window.getComputedStyle(container).getPropertyValue(key), 10);
                    })
                    .reduce((prev, curr) => {
                        return  (prev + curr);
                    }) 
                    + 40) 
                    + 'px'; 
        } 
    }
}

function resizeEvent() {
  
    if (window.location.pathname.includes('past')) {
        var items = document.querySelectorAll('li.past input'),
            content = document.querySelector('div.content'),
            wrapper = document.querySelector('div.past_wrapper');

        items.forEach( (item) => {
            item.addEventListener('click', () => {
                var contentHeight = parseInt(window.getComputedStyle(content).getPropertyValue('height'), 10),
                    wrapperHeight =  parseInt(window.getComputedStyle(wrapper).getPropertyValue('height'), 10),
                    itemHeight = getHeight(document.querySelector('li.past table'));
                
                if (item.checked == false) {
                    content.style.height = String(contentHeight + itemHeight) + "px";
                    wrapper.style.height = String(wrapperHeight + itemHeight) + "px";                    
                }
                else {
                    content.style.height = String(contentHeight - itemHeight) + "px";
                    wrapper.style.height = String(wrapperHeight - itemHeight) + "px";
                }
            });
        });
    }
}

function logoScrollEvent() {
    window.addEventListener('scroll', () => {
        var fsu = document.querySelector('div.fsu') || document.querySelector('div.fsu_hide');
        if (window.scrollY > 100)
            fsu.className = 'fsu_hide';
        else
            fsu.className = 'fsu';
    });
}

function mobMenuClickEvent() {
    var innerMenu = document.querySelector('div#mobile'),
        menu = document.querySelector('div.menu');
    document.querySelector('div.menu_icon').addEventListener('click', () => {
            if (!innerMenu.className.includes('active')) {
                innerMenu.className += '_active';
                menu.className += '_show';
            }
            else {
                innerMenu.className = 'inner';
                menu.className = 'menu';
            }
        }
    );
}

function heroClickEvent() {
    if (window.location.href.includes('index')) {
        document.querySelector('div.to_content').addEventListener('click', () => {
            document.querySelector('div.content').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

function addCurrent() {
    if (window.location.href.includes('leadership') || window.location.href.includes('past')) {
        let current = document.querySelector('.dropdown#hover p');
                    
        current.style.borderBottom = '1px solid #e4e4e4';
    }
    else {
        
        let current = document.querySelectorAll('.menu > ul > li > a') ||
            document.querySelectorAll('.menu_show > ul > li > a');
        
        for (let i = 0; i < current.length; i++) {
            if (current[i].href == window.location.href) {
                current[i].classList.add('current');
        }
    }   
    }
}

