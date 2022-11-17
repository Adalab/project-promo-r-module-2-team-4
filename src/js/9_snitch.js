// function AnimateIt() {
//   var theDiv = document.querySelector('#the-div');
//   var theContainer = document.querySelector('#container');
//   (maxLeft = theContainer.width() - theDiv.width()),
//     (maxTop = theContainer.height() - theDiv.height()),
//     (leftPos = Math.floor(Math.random() * maxLeft)),
//     (topPos = Math.floor(Math.random() * maxTop));

//   if (theDiv.position().left < leftPos) {
//     theDiv.classList.remove('left').classList.add('right');
//   } else {
//     theDiv.classList.remove('right').classList.add('left');
//   }

//   theDiv.animate(
//     {
//       left: leftPos,
//       top: topPos,
//     },
//     1200,
//     AnimateIt
//   );
// }
// AnimateIt();

const root = document.querySelector(':root'); // we first get the root element
root.style.setProperty('--rando', `${Math.floor(Math.random() * 20) + 1}px`); // inject the CSS with JavaScript
