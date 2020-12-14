const images = [
  'corina-ardeleanu-sWIxCweDzzs-unsplash.jpg',
  'sergey-shmidt-koy6FICCy5s-unsplash.jpg',
  'sharon-mccutcheon-SavQfLRm4Do-unsplash.jpg',
  'timp-vijn-yjiZAdTDkik-unsplash.jpg',
];

const btnLeft = document
  .querySelector('.btn-left')
  .addEventListener('click', leftSide);

const btnRight = document
  .querySelector('.btn-right')
  .addEventListener('click', rightSide);

let count = 0;

const picture = document.querySelector('img');

function leftSide(e) {
  if (e.target.parentElement.classList.contains('btn-left')) {
    console.log('Left');
  }
}

function rightSide(e) {
  if (e.target.parentElement.classList.contains('btn-right')) {
    console.log('Right');
  }
}
