const slider = document.querySelector('.items');
//console.log(slider);
let isDown = false;
let starX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    starX = e.pageX - slider.offsetLeft;
    console.log(starX);
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    console.count(isDown);
    //  console.log('do work');
    // console.log(starX);
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({ x, starX });
    const walk = (x - starX) * 3;
    slider.scrollLeft = scrollLeft - walk;


})