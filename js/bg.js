function setRandomBg() {
  const bg = document.querySelector(".todo-wrap");
  const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
  ];
  const bgImg = images[Math.floor(Math.random() * images.length)];
  bg.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url(./img/${bgImg})`;
}

setRandomBg();
