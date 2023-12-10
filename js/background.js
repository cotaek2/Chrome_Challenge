// background.js
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// bgDiv 생성
const bgDiv = document.getElementById("bgDiv");

// bgImage 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// bgImage를 bgDiv에 추가
bgDiv.appendChild(bgImage);
