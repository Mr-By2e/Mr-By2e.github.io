
// Fetch the JSON data
fetch('js\\images.json')
  .then(response => response.json())
  .then(data => displayImages(data))
  .catch(error => console.error('Error fetching data:', error));

// Display the images
function displayImages(data) {
  const gallery = document.getElementById('gallery');
  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <a href="${item.url}" target="_blank">
        <img src="${item.url}" alt="${item.description}" class="thumbnail">
        <div class="caption">${item.description}</div>
      </a>
    `;
    gallery.appendChild(div);
  });
}
