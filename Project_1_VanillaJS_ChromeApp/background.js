const body = document.querySelector("body");

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

const IMG_NUMBER = 3;

function generateRandomNum() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  // console.log(number);
  return number;
}

function init() {
  const randomNumber = generateRandomNum();
  paintImage(randomNumber);
};

init();
