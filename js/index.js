// Your code goes here

// simple debounce/delay function to keep scroll from going crazy
function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId = setTimeout(function () {
    method();
  }, delay);
}

// 1) changes background on scroll, but scroll will only fire a few times every few seconds
function changeBackground() {
  if (!document.body.style.backgroundColor) {
    document.body.style.backgroundColor = 'red';
  } else document.body.style.backgroundColor = null;
}

window.addEventListener('scroll', () => {
  //   if (!document.body.style.backgroundColor) {
  //     document.body.style.backgroundColor = 'red';
  //   } else document.body.style.backgroundColor = null;
  debounce(changeBackground, 100);
});

// 2) on `mouseover`, the images will have a border over them
// 3) on 'mouseout', any image with border has it removed
const images = document.querySelectorAll('img');

console.log(images);

// images.addEventListener('mouseover')

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    console.log('border: ', image.style.border);
    if (!image.style.border) {
      image.style.border = 'thick solid #0000FF';
    } else image.style.border = null;
  });
});

images.forEach((image) => {
  image.addEventListener('mouseout', () => {
    if (image.style.border) {
      image.style.border = null;
    }
  });
});

// 4) on `click`, each nav element will change color to pink
const nav = document.querySelectorAll('a');

nav.forEach((navElement) => {
  navElement.addEventListener('click', () => {
    if (!navElement.style.color) {
      navElement.style.color = 'pink';
    } else navElement.style.color = '';
  });
  //   navElement.style.color = 'pink';
});

// 5) on 'load', console.log a message
window.addEventListener('load', () => {
  //   alert('Sayo is the best wifey in the world!');
  console.log('Sayo is the best wifey in the world!');
});

// 6) when on a separate tab in browser, `blur` is triggered and the document.title will be changed to random message
// 7) when back on original tab, 'focus' event resets the document.title to its original state
let title = document.title;

var blurMessage = [
  'SAYO COME BACCCKKKK! :-( ',
  "Don't you love me anymore? :-(",
  'i want sandwich sayo bayo? ',
  "I'm feeling lonely :-( ",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.addEventListener('blur', function () {
  document.title = blurMessage[getRandomInt(4)];
});

window.addEventListener('focus', function () {
  document.title = title;
});

// 8) select event -> console log highlighted text

document.addEventListener('mouseup', () => {
  let selectedText = window.getSelection().toString();
  if (selectedText) {
    console.log('Selected Text: ' + selectedText);
    alert('Selected Text: ' + selectedText);
  } else {
    console.log('No Text Selected');
  }
});
