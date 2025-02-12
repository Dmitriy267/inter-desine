// const btnPrev = document.querySelector('.prev');
// const btnNext = document.querySelector('.next');

// let images = document.querySelectorAll('#gallery .photos img');
// let i = 0;
// images[i].style.display = 'none';
// i++;
// if (i >= images.length) {
//     i = 0;
// }
// btnPrev.addEventListener('click', () => {
//     images[i].style.display = 'none';
//     i = i - 1;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     console.log(i);
//     images[i].style.display = 'block';
// });

// btnNext.addEventListener('click', () => {
//     images[i].style.display = 'none';
//     i++;
//     if (i >= images.length) {
//         i = 0;
//     }
//     console.log(i);
//     images[i].style.display = 'block';
// });

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const activeSlides = 'slide--active';
const slideCount = slides.length;
const controlButtons = slider.querySelectorAll('.button-radio');
const prevButton = slider.querySelector('.button-prev');
const nextButton = slider.querySelector('.button-next');
const activeButton = 'active';
const inactiveButton = 'aria-disabled';
const currentButton = 'aria-current';
let currentslide = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentslide) {
            slide.classList.add(activeSlides);
        } else {
            slide.classList.remove(activeSlides);
        }
    });
    controlButtons.forEach((button, index) => {
        if (index === currentslide) {
            button.classList.add(activeButton);
        } else {
            button.classList.remove(activeButton);
            button.removeAttribute(currentButton, true);
        }
        prevButton.setAttribute(inactiveButton, currentslide === 0);
        nextButton.setAttribute(
            inactiveButton,
            currentslide === slideCount - 1
        );
    });
}
controlButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index < slideCount) {
            currentslide = index;
            updateSlider();
        }
    });
});
prevButton.addEventListener('click', () => {
    if (currentslide > 0) {
        currentslide = currentslide - 1;
        updateSlider();
    }
});
nextButton.addEventListener('click', () => {
    if (currentslide < slideCount - 1) {
        currentslide = currentslide + 1;
        updateSlider();
    }
});
slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentslide > 0) {
        currentslide--;
        updateSlider();
    } else if (e.key === 'ArrowRight' < currentslide < slideCount - 1) {
        currentslide++;
        updateSlider();
    }
});
updateSlider();
console.log(slideCount);
