async function loadGallery() {
  const c = document.querySelector(".gallery");

  try {
    const res = await fetch("images/gallery/photos.json");
    const files = await res.json();

    c.innerHTML = files.map(file =>
      `<img src="images/gallery/${file}" alt="">`
    ).join("");

  } catch (e) {
    c.innerHTML = "<p>Kon gallery niet laden.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadGallery);
