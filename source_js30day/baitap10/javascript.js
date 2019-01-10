const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


//console.log(checkboxes);
let lastChecked;

function handleCheck(e) {
    /*if (checkboxes.checked) {
        document.querySelectorAll('p').style."text-decoration" = 'line-through';
    
    };*/
    //console.log(e);
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('start-end');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));