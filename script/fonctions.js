/**
 * @param {HTMLElement} obj
 * @param {Integer} duration
 * @param {String} ouverture
 */

export function startSliding(obj, duration, ouverture) {
  let start = null;
  let progress;
  let percentage;
  let objWidthAdded;
  let objWidth = obj.clientWidth;
  const windowWidth = window.innerWidth;
  function sliding(timestamp) {
    if (!start) start = timestamp;
    progress = timestamp - start;
    percentage = Math.min(progress / duration, 1);
    objWidthAdded = windowWidth * percentage;
    ouverture === "open"
      ? (obj.style.width = `${objWidth + objWidthAdded}px`)
      : (obj.style.width = `${objWidth - objWidthAdded}px`);

    if (progress < duration) {
      requestAnimationFrame(sliding);
    }
  }
  requestAnimationFrame(sliding);
}

/**
 * @param {HTMLElement} container_diapo
 * @param {String} images
 */
let currentIndex = 0

export function changeBackground(container_diapo, images = []) {
        currentIndex = (currentIndex + 1) % images.length;
        container_diapo.style.backgroundImage = images[currentIndex];
    }
