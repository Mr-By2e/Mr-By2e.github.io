window.addEventListener('load', () => {
  //buttons
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  //carousel
  const slider = document.querySelector('.caorusel_slide');

  // Function to fetch JSON data and load images
  async function loadImagesFromJSON() {
    try {
      const response = await fetch('js/images.json');
      const data = await response.json();
      data.forEach((item) => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.description;
        slider.appendChild(img);
      });
      return data;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  }

  // Initialize the carousel with loaded images
  let images = [];
  loadImagesFromJSON().then((data) => {
    images = document.querySelectorAll('.caorusel_slide img');
    let counter = 0;
    let stepSize = 0;

    // Convert NodeList to an array
    const imageArray = Array.from(images);

    // Calculate image size after all images have been loaded
    Promise.all(imageArray.map((img) => {
      return new Promise((resolve) => {
        img.addEventListener('load', () => {
          stepSize = img.clientWidth;
          resolve();
        });
      });
    })).then(() => {
      slider.style.transform = `translateX(${-stepSize * counter}px)`;

      next.addEventListener('click', () => {
        counter >= images.length - 1 ? (counter = -1) : null;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = `translateX(${-stepSize * counter}px)`;
      });

      prev.addEventListener('click', () => {
        if (counter <= 0) counter = images.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = `translateX(${-stepSize * counter}px)`;
      });
    });
  });
});