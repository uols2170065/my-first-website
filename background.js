const images = ["img.png","1img.png","2img.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");
backImage.src = `img/${chosenImage}`;
document.body.appendChild(backImage);