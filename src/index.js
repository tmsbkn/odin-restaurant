import './style.css';
import './reset.css';
import home from './loadHome.js';

const content = document.querySelector('#content');

const loadPage = (page) => {
   unloadPage();
   content.append(page);
};

const unloadPage = () => {
   content.innerHTML = '';
};
console.log("I'm running!");
loadPage(home);
