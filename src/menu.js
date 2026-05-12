import newEl from './elementClass.js';
import menuItems from './menuItems.json' assert { type: 'json' };
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

menuItems.items.forEach((item, index) => {
   const menuItem = newEl('div', 'menu-item', item.id);
   const itemTitle = newEl('h3', 'item-title');
   itemTitle.innerText = item.name;
   const itemPrice = newEl('span', 'price');
   itemPrice.innerText = item.price;
   itemTitle.append(' ', itemPrice);
   const itemDescription = newEl('p', 'item-description');
   itemDescription.innerText = item.description;
   const itemAddon = newEl('p', 'add-on');
   itemAddon.innerText = item.addOn;
   const itemAddonPrice = newEl('span', 'add-on-price');
   itemAddonPrice.innerText = item.addOnPrice;
   itemAddon.append(' ', itemAddonPrice);

   menuItem.append(itemTitle, itemDescription, itemAddon);
   menuSection.append(menuItem);
});
menu.append(hero, menuSection);

export default menu;
