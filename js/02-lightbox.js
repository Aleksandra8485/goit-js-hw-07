import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const photoItem = document.createElement("li");
  galleryEl.append(photoItem);

  photoItem.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__link" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  alt="${item.description}"
/>
</a>`
  );
});
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
