import './style.css'

const imgSliders = document.querySelectorAll(".slider-slide");
const btnPrev = document.querySelector("#nav-button--prev");
const btnNext = document.querySelector("#nav-button--next");
const bullet = document.querySelectorAll(".slider__navlink");
let currIndex = 0;

function showSlider(index) {

    imgSliders.forEach(imgSlide => imgSlide.classList.add("hidden"));
    imgSliders[index].classList.remove("hidden");
    bullet.forEach(bullet=>
    {
        bullet.style.opacity="0.5";
        bullet.style.width="0.5rem";
    });
    bullet[index].style.opacity="1";
    bullet[index].style.width="1.5rem";

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