const newEl = (element, classes, ids) => {
   const node = document.createElement(element);
   if (classes) {
      node.classList.add(classes);
   }

   if (ids) {
      node.setAttribute('id', ids);
   }

   return node;
};
export default newEl;
