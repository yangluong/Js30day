const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed; // speed null
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; // heading null
}, (err) => {
    console.error(err);
    alert('HEY HIHI');
});