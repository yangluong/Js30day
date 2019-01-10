const triggers = document.querySelectorAll('.cool >li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

//console.log(triggers);
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        // console.log(this);
        this.classList.contains('trigger-enter') &&
            this.classList.add('trigger-enter-active');
    }, 150);
    //  console.log('enter');
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.log(navCoords);
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
    //  console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));