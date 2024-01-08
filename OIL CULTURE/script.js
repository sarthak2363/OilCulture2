let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    clearInterval(interval);
    slideIndex += n;

    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }

    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);

document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
});

let interval = setInterval(showSlides, 2000000);

