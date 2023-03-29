import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

for (let item of galleryItems) {
  const imageItem = document.createElement("li");
  galleryEl.append(imageItem);

  imageItem.insertAdjacentHTML(
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
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {}
  );

  instance.show();
});

//są zdjecia i odstępy , nie otwieraja sie duże po kliknięciu
// const galleryEl = document.querySelector(".gallery");

// for (const item of galleryItems) {
//   galleryEl.insertAdjacentHTML(
//     "beforeend",
//     `<li class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//       <img
//         class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"
//       />
//     </a>
//   </li>`
//   );
// }

// galleryEl.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// galleryEl.onclick = () => {
//   basicLightbox
//     .create(
//       `<img width="1400" height="900" src="https://placehold.it/1400x900">`
//     )
//     .show();
// };

// duze zdjecia
// const LiElement = document.createElement("li");
// console.log(LiElement);
// const ul = document.querySelector(".gallery");
// console.log(galleryItems);

// for (const gallery of galleryItems) {
//   const li = document.createElement("li");

//   document.body.innerHTML = galleryItems.map(
//     (gallery) =>
//       `<div class="gallery__item">
//       <a class "gallery__link" href="${gallery.original}">
//         <img

//           class="gallery__image"
//           src="${gallery.preview}"
//           data-source="${gallery.original}"
//           alt="${gallery.description}"
//         />
//       </a>
//     </div>`
//   );
// }
// ul.addEventListener("click", (ev) => {
//   ev.preventDefault();

//   window.basicLightbox.create(
//     `<img style="width:500px; height:500px" src=${gallery.preview} ${gallery.original} ${gallery.description}/>`
//   );
//   gallery.show();
// });

//3 zdjecia bez odstepów
// let gallerylist = document.querySelector(".gallery");

// galleryItems.forEach((item) => {
//   let listelement = document.createElement("li");
//   listelement.innerHTML = `<div class="galleryitem">
//         <a class="gallerylink" href="${item.original}">
//           <img
//             class="galleryimage"
//             src="${item.preview}"
//             data-source="${item.original}"
//             alt="${item.description}"
//           />
//         </a>
//       </div>`;
//   gallerylist.appendChild(listelement);
// });

// gallerylist.style.flex;
// gallerylist.style.gap = "50px";

// let zdjecia = document.querySelectorAll(".gallery li");
// for (const zdjecie of zdjecia)
//   zdjecie.addEventListener("click", (event) => {
//     event.preventDefault();
//     const instance = window.basicLightbox.create(
//       `<img src="${event.target.dataset.source}" width="800" height="600" />
//     `
//     );

//     instance.show();
//   });

//sa juz odstepy i zdjecia sie wczytuja
// const ul = document.querySelector(".gallery");

// for (const gallery of galleryItems) {
//   const Elementli = `<div class= "gallery__item">
//       <a class = "gallery__link" href="${gallery.original}">
//         <img

//           class="gallery__image"
//           src="${gallery.preview}"
//           data-source="${gallery.original}"
//           alt="${gallery.description}"
//         />
//       </a>
//     </div>`;
//   const listElement = document.createElement("li");
//   listElement.innerHTML = Elementli;
//   ul.appendChild(listElement);
// }
// console.log(galleryItems);

// ul.addEventListener("click", (ev) => {
//   ev.preventDefault();

//   const instance = window.basicLightbox.create(
//     ` <img src="${event.target.dataset.source}" width="800" height="600">`
//   );
//   instance.show();
// });
