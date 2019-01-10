let age = 100;
let age2 = 100;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'vang';
let name2 = name;
console.log(name, name2);
name2 = 'hello';
console.log(name, name2);
//console.clear();

const player = ['nhat', 'loc', 'son', 'sang'];
console.log(player);
const team = player;
console.log(player, team);

team[3] = 'my';

team2 = player.slice();

team3 = [].concat(player);
team4 = [...player];
team4[3] = 'phuc';
team5 = Array.from(player);


const person = {
    name: 'webos',
    age: 80
}

console.log(person);

const captain = person;
captain.number = 99;

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

cap3 = {...person };

const wes = {
    name: 'wes',
    age: 80,
    social: {
        youtube: 'ytb',
        facebook: 'fbc'
    }
}
const dev = Object.assign({}, wes);

console.log(wes);
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);