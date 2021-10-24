let position = 0;
const slidesToShow = 1;
const slidesToScroll =1 ;
const container = document.querySelector('.slider_container');
const track = document.querySelector('.slider_track');
const item = document.querySelector('.slider_box');
const items = document.querySelectorAll('.slider_box');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length - 3 ;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow*itemWidth)/ itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position  === -(itemsCount -slidesToShow) * itemWidth ;
};

checkBtns();