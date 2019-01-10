const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
console.log('Hello');

console.log('Hello I am a %s string', 'luck');

console.log('%c i am some great text', 'font-size:50px; background:red; ');

console.warn('oh no');

console.error('nguy hiem');

console.info('hihi abc');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'not select');

console.clear();

console.log(p);
console.dir(p);

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age}
        year old`);
    console.log(`${dog.name} is ${dog.age * 7} year old`);
    console.groupEnd(`${dog.name}`);
});


console.count('wes');

console.count('wes');
console.count('Steve');
console.count('wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');

console.count('wes');

console.count('wes');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);