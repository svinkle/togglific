import {data, selectors} from '../app.config';

const image = {
  resume(document) {
    const images = document.querySelectorAll(selectors.imageElem);
    let i = 0;

    for (const thisImage of Array.from(images)) {
      if (document.querySelector(`[${data.image}="${i}"]`) != null) {
        document.querySelector(`[${data.image}="${i}"]`).remove();
        thisImage.style.display = 'block';
        thisImage.setAttribute('aria-hidden', false);
        i++;
      }
    }
  },
  pause(document, window) {
    const images = document.querySelectorAll(selectors.imageElem);

    let imageCanvas = null,
      imagePlaceholder = null,
      imageWidth = 0,
      imageHeight = 0,
      i = 0;

    for (const thisImage of Array.from(images)) {
      if (document.querySelector(`[${data.image}="${i}"]`) != null) {
        continue;
      }

      imageCanvas = document.createElement('canvas');
      imagePlaceholder = document.createElement('div');
      imageWidth = thisImage.width || window.getComputedStyle(thisImage).width;
      imageHeight =
        thisImage.height || window.getComputedStyle(thisImage).height;

      if (thisImage.id) {
        imagePlaceholder.id = thisImage.id;
      }

      if (thisImage.getAttribute('class') != null) {
        imagePlaceholder.setAttribute('class', thisImage.getAttribute('class'));
      }

      if (thisImage.getAttribute('alt') != null) {
        imagePlaceholder.setAttribute('alt', thisImage.getAttribute('alt'));
      }

      imagePlaceholder.setAttribute(data.image, i);
      imagePlaceholder.setAttribute('role', 'img');

      imageCanvas.width = imageWidth;
      imageCanvas.height = imageHeight;
      imageCanvas
        .getContext('2d')
        .drawImage(thisImage, 0, 0, imageWidth, imageHeight);

      thisImage.parentNode.insertBefore(
        imagePlaceholder,
        thisImage.nextSibling
      );
      imagePlaceholder.appendChild(imageCanvas);

      thisImage.style.display = 'none';
      thisImage.setAttribute('aria-hidden', true);

      i++;
    }
  }
};

export {image};
