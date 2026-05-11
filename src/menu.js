import newEl from './elementClass.js';

const menu = newEl('div', null, 'home');

const hero = newEl('div', 'hero', null);

const heroTitle = newEl('h1', 'hero-title', null);
heroTitle.textContent = 'The Wipes and Laps Pub';

const address = newEl('span', 'hero-text');
address.textContent = '123 Maple Park Blvd, Mapleville, ON';

const established = newEl('span', 'hero-text');
established.textContent = 'EST 2015';

hero.append(address, heroTitle, established);
let heroImg = newEl('div', 'hero-img');

menu.append(hero, heroImg);

export default menu;
