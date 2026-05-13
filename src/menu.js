import newEl from './elementClass.js';
import menuItems from './menuItems.json' assert { type: 'json' };

const menuWrapper = newEl('div', 'pageWrapper');

const menu = newEl('div', 'main', 'menu');

const hero = newEl('div', 'hero');

const heroTitle = newEl('h1', 'hero-title');
heroTitle.textContent = menuItems.name;

const address = newEl('span', 'hero-text');
address.textContent = menuItems.address;

const established = newEl('span', 'hero-text');
established.textContent = 'EST 2015';

hero.append(address, heroTitle, established);
let heroImg = newEl('div', 'hero-img');
const menuSection = newEl('section');

menuItems.menu.forEach((category, index) => {
   const cat = newEl('div', 'category', category.id);
   const catHeading = newEl('h2', 'catHeading');
   catHeading.textContent = category.name;
   category.items.forEach((item, index) => {
      const menuItem = newEl('div', 'item', item.id);
      const heading = newEl('h3', 'item-name');
      const price = newEl('span', 'price');
      const description = newEl('p', 'item-description');
      description.textContent = item.description;
      heading.textContent = item.name;
      price.textContent = item.price;
      heading.append(' ', price);
      menuItem.append(heading, description);
      cat.append(menuItem);
   });

   menuSection.append(catHeading, cat);
});
menu.append(menuSection);
menuWrapper.append(hero, menu);

export default menuWrapper;
