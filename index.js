var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}


var currentIndex = 0;
var images = document.querySelectorAll('.testi');

function showSlide(index) {
    images.forEach(function(image, i) {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

// Change slide every 2 seconds (adjust as needed)
setInterval(nextSlide, 2000);
