const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
const comments = [
    { text: 'Love this', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav found ever', id: 123523 },
    { text: 'Nice Nice Nice', id: 542328 }

];
/*const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
});

const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});
*/
const isAdult = people.some(person =>
    ((new Date()).getFullYear()) - person.year >= 19);
console.log({ isAdult });

const allAdult = people.every(person =>
    ((new Date()).getFullYear()) - person.year >= 19);
console.log({ allAdult });

/*const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
});*/
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//comments.splice(index, 1);
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)

];
console.table(newComments);