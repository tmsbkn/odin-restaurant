import './style.css';
import './reset.css';
import home from './loadHome.js';
import menu from './menu.js';
import about from './about.js';
const content = document.querySelector('#content');

const pages = [home, menu, about];
(() => {
   document.querySelectorAll('nav .button').forEach((button, index) => {
      button.addEventListener('click', (e) => {
         const pageToLoad = pages[index];
         loadPage(pageToLoad);
      });
   });
})();

const loadPage = (page) => {
   unloadPage();
   content.append(page);
};

const unloadPage = () => {
   content.innerHTML = '';
};
console.log("I'm running!");
loadPage(home);
