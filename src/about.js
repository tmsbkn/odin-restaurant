import newEl from './elementClass.js';

const about = newEl('div', null, 'about');

const infoSection = newEl('div', 'info-section');
const infoText = [
   'The Wipes and Laps',
   '123 Maple Park Blvd, Mapleville ON',
   'Located behind the Big Box store',
   '333-404-4311',
];

infoText.forEach((line) => {
   const newLine = newEl('p');
   newLine.textContent = line;
   infoSection.append(newLine);
});

about.append(infoSection);
export default about;
