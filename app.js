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

function leftSide(e) {
  console.log(e.target);
}

function rightSide(e) {
  console.log(e.target);
}
