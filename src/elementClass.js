const newEl = (element, classes, ids) => {
   const node = document.createElement(element);
   node.classList.add(classes);
   node.setAttribute('id', ids);
   return node;
};
export default newEl;
