let img = [
  'aaron-burden-GVnUVP8cs1o-unsplash.jpg',
  'annie-spratt-WBpr_yH0Frg-unsplash.jpg',
  'gerome-bruneau-RPmWEtZLh7U-unsplash.jpg',
];

let count = 0;

const buttonRight = document.querySelector('.btn-right');
const buttonLeft = document.querySelector('.btn-left');

buttonLeft.addEventListener('click', leftClick);
buttonRight.addEventListener('click', rightClick);

function leftClick(e) {
  if (e.target.parentElement.classList.contains('btn-left')) {
    document.querySelector('.flowers').src = `../images/${img[count--]}`;
    if (count < 0) {
      count = img.length - 1;
    }
  }

  console.log(e.target);
  e.preventDefault();
}

function rightClick(e) {
  if (e.target.parentElement.classList.contains('btn-right')) {
    document.querySelector('.flowers').src = `../images/${img[count++]}`;
    if (count > img.length - 1) {
      count = 0;
    }
  }
  console.log('Right');
  e.preventDefault();
}
console.log(buttonRight);
console.log(buttonLeft);
