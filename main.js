import './style.css'

const imgSliders = document.querySelectorAll(".slider-slide");
const btnPrev = document.querySelector("#nav-button--prev");
const btnNext = document.querySelector("#nav-button--next");
const bullet = document.querySelectorAll(".slider__navlink");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let currIndex = 0;
setInterval(function () {

    const countDownDate = new Date("Oct 30, 2024 15:37:25").getTime();
    const now = new Date().getTime();
    const deadLine = countDownDate - now;

    let hours = Math.floor((deadLine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((deadLine % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((deadLine % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = seconds.toString().padStart(2, '0');
    }
    if (minutes < 10) {
        minutes = minutes.toString().padStart(2, '0');
    }
    if (hours < 10) {
        hours = hours.toString().padStart(2, '0');
    }
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}, 1000);


function showSlider(index) {

    imgSliders.forEach(imgSlide => imgSlide.classList.add("hidden"));
    imgSliders[index].classList.remove("hidden");
    bullet.forEach(bullet => {
        bullet.style.opacity = "0.5";
        bullet.style.width = "0.5rem";
    });
    bullet[index].style.opacity = "1";
    bullet[index].style.width = "1.5rem";

}

btnNext.addEventListener("click", function () {
    currIndex++;
    console.log(currIndex);
    if (currIndex === imgSliders.length) currIndex = 0;
    showSlider(currIndex);

});

btnPrev.addEventListener("click", function () {
    if (currIndex === 0) currIndex = imgSliders.length;
    currIndex--;
    showSlider(currIndex);


});
showSlider(currIndex);