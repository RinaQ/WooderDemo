let progress = document.querySelector('.progressbar')
window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let percent = scrollY / (document.body.offsetHeight - window.innerHeight) * 100
    progress.style.width = `${percent}%`
})

function addBackgroundHeader() {
    const header = document.querySelector('.header')
    let sectionSlider = document.querySelector('.slider')
    let heightSlider = sectionSlider.offsetHeight;
    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset
        if (scrollY >= heightSlider) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    })
}
addBackgroundHeader()

let menus = document.querySelectorAll('.header .header__menu a')
let header = document.querySelector('.header')
let heightHeader = header.offsetHeight; //gom padding + border

let sections = []

function removeActiveMenu() {
    menus.forEach(function (element, index) {
        element.classList.remove('active')
    })
}
menus.forEach(function (element, index) {
    let href = element.getAttribute('href')
    let className = href.replace('#', '')
    let section = document.querySelector('.' + className)
    sections.push(section)

    element.addEventListener('click', function (event) {
        event.preventDefault();

        //lay vij tri section
        let positionSection = section.offsetTop;
        window.scrollTo({
            top: positionSection - heightHeader + 1,
            behavior: "smooth"

        })
        removeActiveMenu()
        element.classList.add('active')
    })
})

window.addEventListener('scroll', function (e) {
    let scrollY = window.pageYOffset
    sections.forEach(function (section, index) {
        if (scrollY > section.offsetTop - heightHeader && scrollY < section.offsetTop + section.offsetHeight) {
            removeActiveMenu()
            menus[index].classList.add('active')
        } else {
            menus[index].classList.remove('active')
        }
    })
})
//BACK TO TOP
const backtotop = document.querySelector('.backtop')
const backtop = document.querySelector('.backtotop p')
function showBackToTop() {
    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset
        if (scrollY >= 500) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    })
}
showBackToTop()

function clickBackToTop() {
    backtotop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}
clickBackToTop()

function clickBackTop() {
    backtop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}
clickBackTop()
const lang = document.querySelector('.language')
lang.addEventListener('click', function (event) {
    event.stopPropagation();
    lang.classList.toggle('active')
})

const langItems = document.querySelectorAll('.language .language-option .item')
lang
const langCurrent = document.querySelector('.language .language-current span')

langItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;
    })
})
document.addEventListener('click', function () {
    lang.classList.remove('active')
})

// NEWS TAB
function handleTabsNews() {
    let tabs = document.querySelectorAll('.news__tabs-item')
    let list = document.querySelectorAll('.news__list-items')

    tabs.forEach(function (item) {
        item.addEventListener('click', function (event) {
            //Xóa class active hiện tại
            tabs.forEach(function (item) {
                item.classList.remove('active')
            })
            //Thêm class active vào item đã chọn
            this.classList.add('active')

            list.forEach(function (item) {
                item.classList.remove('active')
            })

            let id = this.getAttribute('data-tab')
            let newlist = document.querySelector('.news__list-items-' + id)
            newlist.classList.add('active')
        })
    })
}
handleTabsNews()
// VIDEO
function handleVideo() {
    let videos = document.querySelectorAll('.quality__video .quality__video-item .item-img')
    let popupvideo = document.querySelector('.popupvideo')
    let iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe')
    let close = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe .closepopup')

    videos.forEach(function (item) {
        item.addEventListener('click', function () {
            //Hien popupvideo
            popupvideo.classList.add('active')
            //Lay id video
            let id = this.getAttribute('data-src-video')
            //Gan id video vao iframe
            iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`)
        })
    })

    function closePopupVideo() {
        popupvideo.classList.remove('active')
    }

    close.addEventListener('click', function () {
        closePopupVideo()
    })
    popupvideo.addEventListener('click', function () {
        closePopupVideo()
    })
}
handleVideo()

//SLIDER
// function handleSlider() {
//     let slides = document.querySelectorAll('.slider__img-item')
//     let currentSlide = 0;
//     let number = document.querySelector('.slider__bottom-page .number')
//     let dots = document.querySelectorAll('.slider__bottom-page .dotted li')

//     slides.forEach(function (item, index) {
//         if (item.classList.contains('active')) {
//             currentSlide = index;

//         }
//     })
//     console.log(currentSlide + 1);

//     function showNumber(index) {
//         number.innerHTML = (index).toString().padStart(2, '0')
//     }
//     function goTo(index) {
//         //Xoa active hien tai
//         slides[currentSlide].classList.remove('active')
//         dots[currentSlide].classList.remove('selected');
//         //Them active slide vi tri index
//         slides[index].classList.add('active')
//         currentSlide = index;
//         //Thay doi number bang vi tri index +1
//         showNumber(index + 1);
//         dots[index].classList.add('selected');
//     }
//     //default active
//     showNumber(currentSlide + 1)
//     dots[currentSlide].classList.add('selected');

//     //Bat event click btn Next
//     let btnNext = document.querySelector('.slider__bottom-control .btncontrol.--next')
//     btnNext.addEventListener('click', function () {
//         if (currentSlide < slides.length - 1) {
//             goTo(currentSlide + 1)
//         } else {
//             goTo(0)
//         }
//     })
//     //Bat event click btn Pre
//     let btnPre = document.querySelector('.slider__bottom-control .btncontrol.--prev')
//     btnPre.addEventListener('click', function () {
//         if (currentSlide > 0) {
//             goTo(currentSlide - 1)
//         } else {
//             goTo(slides.length - 1)
//         }
//     })

//     //Bat event dot
//     dots.forEach(function (dot, index) {
//         dot.addEventListener('click', function () {
//             goTo(index)
//         })
//     })
// }
// handleSlider()

function handleSlider() {
    var slider = document.querySelector('.slider__img');
    var flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        on: {
            ready: function () {
                console.log('Flickity is ready');
                handleDots();

            },
            change: function (index) {
                console.log('Slide changed to' + index);
                handlePageNumber(index)
            }
        }
    });
    //Bat event click btn Next-Pre
    let btnNext = document.querySelector('.btncontrol.--next')
    let btnPre = document.querySelector('.btncontrol.--prev')
    btnPre.addEventListener('click', function () {
        flktySlider.previous(true)
    })
    btnNext.addEventListener('click', function () {
        flktySlider.next(true)
    })
    // DOts
    function handleDots() {
        let dots = document.querySelector('.flickity-page-dots')
        let dotsSliderBottom = document.querySelector('.slider__bottom-page')
        dotsSliderBottom.appendChild(dots)
    }
    //Page Number
    function handlePageNumber(index) {
        let number = document.querySelector('.number')
        number.innerHTML = (index + 1).toString().padStart(2, '0')
    }

}
handleSlider()
function handlePhotoSlider() {
    var slider = document.querySelector('.photoslider');
    var flktySlider = new Flickity(slider, {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        lazyLoad: true,
        on: {
            ready: function () {
                console.log('Flickity is ready');
            }
        }
    });
    var progressBar = document.querySelector('.progress-bar')

    flktySlider.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });

}
handlePhotoSlider()

Fancybox.bind("[data-fancybox]", {
    // Your custom options
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    }
});

