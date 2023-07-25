import { imageSets } from "../scripts/main.js";

const displayImgae = (list) => {
  const leftSideContainer = document.querySelector(
    ".image-form-grid-container"
  );
  const allImages = list.map((item) => {
    return `<div class="image">
<img src=${item.images[0]} alt=${item.name} class="image" />
<div class="image-info">
    <p class="image-info-text">${item.name} - ${item.title}</p>
    <a id="image-detail" href="./detail.html?id=${item.id}">see more</a>
</div>
</div>`;
  });
  leftSideContainer.innerHTML = allImages.join("");
};

window.onload = function () {
  displayImgae(imageSets);
};

// submit form

const submitForm = document.querySelector(".submit-image-form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements["name"].value;
  const title = e.target.elements["title"].value;
  const imageUrls = [
    e.target.elements["image-url-one"].value,
    e.target.elements["image-url-two"].value,
    e.target.elements["image-url-three"].value,
    e.target.elements["image-url-four"].value,
    e.target.elements["image-url-five"].value,
  ];

  const image = {
    name,
    title,
    images: imageUrls.filter((url) => url.trim() !== ""),
  };

  const newImage = document.createElement("div");
  newImage.innerHTML = `
  <div class="image">
    <img src="${image.images[0]}" alt="${image.name}" class="image" />
    <div class="image-info">
      <p class="image-info-text">${image.name} - ${image.title}</p>
      <a id="image-detail" href="./detail.html?id=${image.id}">see more</a>
    </div>
  </div>
`;
  const imageFormGridContainer = document.querySelector(
    ".image-form-grid-container"
  );
  imageFormGridContainer.insertBefore(
    newImage,
    imageFormGridContainer.firstChild
  );

  submitForm.reset();
});
