const fs = require("fs");
const path = require("path");

const galleryPath = path.join(__dirname, "images/gallery");
const jsonPath = path.join(galleryPath, "photos.json");

const files = fs.readdirSync(galleryPath)
  .filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));

fs.writeFileSync(jsonPath, JSON.stringify(files, null, 2));

console.log("Generated photos.json with", files.length, "images.");
