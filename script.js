
//Scroll Buttons
const scrollButtons = document.querySelectorAll('.scroll-btn');
const scrollAmountHorizontal = 1000;

document.addEventListener('click', (event) => {

    if (event.target.classList.contains('scroll-btn')) {

        const targetId = event.target.dataset.target;
        const direction = event.target.dataset.direction;

        const gallery = document.getElementById(targetId);

        if (gallery) {
            let scrollValue = 0;
            if (direction === 'left') {
                scrollValue = -scrollAmountHorizontal;
            } else if (direction === 'right') {
                scrollValue = scrollAmountHorizontal;
            }

            gallery.scrollBy({
                left: scrollValue,
                behavior: 'smooth'
            });
        }
    }
});

window.addEventListener('load', () => {

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("img-preview");
  const captionText = document.getElementById("caption");
  const span = document.getElementsByClassName("close")[0];

  const galleryImages = document.querySelectorAll('.item img');

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
