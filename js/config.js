var navegation = document.getElementsByClassName('navegation')[0];
var header = document.getElementsByTagName('header')[0];

window.onscroll = () => {
  if (window.scrollY > navegation.offsetTop) {
    navegation.setAttribute('class', 'fixar');
  } else {
    navegation.setAttribute('class', 'e');
  }
};
