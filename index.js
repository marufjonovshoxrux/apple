document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('image');
    const naturalButton = document.querySelector('.naturaltitanium');
    const blackButton = document.querySelector('.blacktitanium');
    const blueButton = document.querySelector('.bluetitanium');
    const whiteButton = document.querySelector('.whitetitanium');

    naturalButton.addEventListener('click', function () {
        image.src = './img/naturaltitanium.png';
    });

    blackButton.addEventListener('click', function () {
        image.src = './img/blacktitanium_1.png';
    });

    blueButton.addEventListener('click', function () {
        image.src = './img/bluetitanium_1.png';
    });

    whiteButton.addEventListener('click', function () {
        image.src = './img/whitetitanium_1.png';
    });
});





