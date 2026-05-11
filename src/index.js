import './style.css';
import './reset.css';
import './loadHome.js';

const content = document.querySelector('#content');

const loadPage = (page) => {
   unloadPage();
   page.forEach((element) => {
      content.appendChild(element);
   });
};

const unloadPage = () => {
   content.innerHTML = '';
};
console.log("I'm running!");
