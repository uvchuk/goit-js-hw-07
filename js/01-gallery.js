import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const createMarkup = markup();
const showModal = modal();

function markup() {
	const markupArr = galleryItems
		.map(({original, preview, description}) => {
			return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"></img></div>`;
		})
		.join("");
	galleryRef.insertAdjacentHTML("afterbegin", markupArr);
	galleryRef.addEventListener("click", evt => evt.preventDefault());
}

function modal() {
	galleryRef.addEventListener("click", evt => {
		if (evt.target.nodeName === "IMG") {
			evt.target.setAttribute("src", evt.target.dataset.source);
			const instance = basicLightbox.create(evt.target.outerHTML);
			instance.show();
		}
	});
}
