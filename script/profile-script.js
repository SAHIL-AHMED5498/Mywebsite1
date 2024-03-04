document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('cardContainer');
    const flipCard = document.getElementById('flipCard');
    let isFlipped = false;

    flipCard.addEventListener('click', function () {
        isFlipped = !isFlipped;
        flipCard.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    });
});
