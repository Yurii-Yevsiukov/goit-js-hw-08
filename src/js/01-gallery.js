// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class='gallery__item'>
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

gallery.style.listStyleType = 'none';

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
