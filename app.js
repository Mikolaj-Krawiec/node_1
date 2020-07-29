const fs = require('fs');

randChoice = arg => {
    return arg[Math.floor(Math.random() * arg.length)];
}

const gender = ['M', 'F'];
const maleNames = ['Tomasz', 'Filip', 'Mateusz', 'Michał', 'Jakub', 'Mikołaj', 'Szymon'];
const femaleNames = ['Wiktoria', 'Weronika', 'Sylwia', 'Ewelina', 'Justyna', 'Marta', 'Anna'];
const lastName = ['Kowal', 'Nowak', 'Kozioł', 'Ryś', 'Kot', 'Lis'];
const people = [];

for(let i = 0; i < 20; i++) {
      const person = {};
      person.gender = randChoice(gender);
      person.name = person.gender === 'M'? randChoice(maleNames) : randChoice(femaleNames);
      person.lastName = randChoice(lastName);
      person.age = Math.floor(Math.random() * 61 + 18);
    people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });