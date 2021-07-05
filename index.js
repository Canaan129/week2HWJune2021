let position = 0;

const nextSlide = function () {
    const imageSlider = document.getElementById('imageSliderNature');
    if (position == -600) {
        position += 600;
    } else {
        position -= 300;
    }
    imageSlider.style.transform = `translateX(${position}px)`;
}

const prevSlide = function () {
    const imageSlider = document.getElementById('imageSliderNature');
    if (position == 000) {
        position = -600;
    } else {
        position += 300;
    }
    imageSlider.style.transform = `translateX(${position}px)`;
}