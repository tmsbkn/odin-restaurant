const newEl = (element) => {
   const node = document.createElement(element);
   return node;
};

const home = newEl('div');
home.setAttribute('id', 'home');

let hero = newEl('div');
hero.className = 'hero';
let heroTitle = newEl('h1');

home.append(hero);
export default home;
//  <div id="content" data-page="home">
//      <div class="hero">
//         <span class="hero-text">123 Maple Park Blvd, Mapleville, ON</span>
//         <h1 class="hero-title">The Wipes and Laps Pub</h1>
//         <span class="hero-text">EST 2015</span>
//      </div>
//      <div class="hero-img"></div>
//   </div>
