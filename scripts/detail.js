import { imageSets } from "../scripts/main.js";

let currentId;

function showImage(id) {
  const newId = Number(id);
  if (newId >= 1 && newId <= imageSets.length) {
    const currentImg = imageSets.filter((item) => item.id === newId)[0];
    const img = `<div class="current-img-container">
                  <div class="current-img-info">
                    <h2>${currentImg.title}</h2>
                    <p class="current-img-category">${currentImg.name}</p>
                  </div>
                  <img src=${currentImg.images} alt=${currentImg.name} class="current-image" />
                  <div class="current-total-count"><p>${newId} of ${imageSets.length}</p></div>
                </div>`;
    const imgContainer = document.querySelector(".img-info-container");
    imgContainer.innerHTML = img;
    currentId = newId;
  }
}

const previousBtn = document.querySelector(".previous-btn");
previousBtn.addEventListener("click", () => showImage(Number(currentId) - 1));

const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => showImage(Number(currentId) + 1));

// first page
const urlParams = new URLSearchParams(window.location.search);
currentId = urlParams.get("id");
showImage(currentId);

// i just want remember my refactoring journey dont wanna remove these codes

// let currentId;
// let currentName;
// let currentTitle;

// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   currentId = urlParams.get("id");
//   const currentImg = imageSets.filter((item) => item.id === Number(currentId));
//   const img = `<div class="current-img-container">
//   <div class="current-img-info">
//     <h2>${currentImg[0].title}</h2>
//     <p class="current-img-category">${currentImg[0].name}</p>
//   </div>
//   <img src=${currentImg[0].images} alt=${
//     currentImg[0].name
//   } class="current-image" />
//   <div class="current-total-count"><p>${Number(currentId)} of ${
//     imageSets.length
//   }</p></div>
// </div>`;

//   const imgContainer = document.querySelector(".img-info-container");
//   imgContainer.innerHTML = img;
// };

// function showPrevious() {
//   const previousId = Number(currentId) - 1;
//   if (previousId >= 1) {
//     window.location.href = `?id=${previousId}`; // redireaction
//   }
// }

// const previousBtn = document.querySelector(".previous-btn");
// previousBtn.addEventListener("click", showPrevious);

// function showNext() {
//   const nextId = Number(currentId) + 1;
//   if (nextId <= imageSets.length) {
//     window.location.href = `?id=${nextId}`; // redireaction
//   }
// }

// const nextBtn = document.querySelector(".next-btn");
// nextBtn.addEventListener("click", showNext);
