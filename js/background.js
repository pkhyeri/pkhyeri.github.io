const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const choosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement('img');

bgImage.src = `img/${choosenImage}`;
const lastEle = document.querySelector('#quotes')
document.body.insertBefore(bgImage, lastEle);