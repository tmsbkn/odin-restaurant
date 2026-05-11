const newEl = (element, classes, ids) => {
   const node = document.createElement(element);
   node.classList.add(classes);
   node.setAttribute('id', ids);
   return node;
};

const home = newEl('div', null, 'home');

const hero = newEl('div', 'hero', null);

const heroTitle = newEl('h1', 'hero-title', null);
heroTitle.textContent = 'The Wipes and Laps Pub';

const address = newEl('span', 'hero-text');
address.textContent = '123 Maple Park Blvd, Mapleville, ON';

const established = newEl('span', 'hero-text');
established.textContent = 'EST 2015';

hero.append(address, heroTitle, established);
let heroImg = newEl('div');
heroImg.className = 'hero-img';

home.append(hero, heroImg);
export default home;
//  <div id="content" data-page="home">
//      <div class="hero">
//         <span class="hero-text">123 Maple Park Blvd, Mapleville, ON</span>
//         <h1 class="hero-title">The Wipes and Laps Pub</h1>
//         <span class="hero-text">EST 2015</span>
//      </div>
//      <div class="hero-img"></div>
//   </div>
