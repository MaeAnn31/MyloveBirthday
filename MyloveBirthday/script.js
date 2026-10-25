
const candles = document.getElementById("candles");
const cakeMessage = document.getElementById("cakeMessage");
const blowButton = document.getElementById("blowButton");
const relightButton = document.getElementById("relightButton");

// Blow out the birthday candles
blowButton.addEventListener("click", function () {
  candles.classList.add("blown");
  cakeMessage.textContent =
    "Wish made! May all your dreams come true. ❤️";

  blowButton.hidden = true;
  relightButton.hidden = false;

  showHearts();
});

// Light the candles again
relightButton.addEventListener("click", function () {
  candles.classList.remove("blown");
  cakeMessage.textContent =
    "Your birthday wish is waiting! ✨";

  blowButton.hidden = false;
  relightButton.hidden = true;
});

// Floating heart animation
function showHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > 0.5 ? "❤️" : "💕";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";
    heart.style.fontSize = "24px";
    heart.style.zIndex = "100";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 3s, opacity 3s";

    document.body.appendChild(heart);

    requestAnimationFrame(function () {
      heart.style.transform =
        `translateY(${window.innerHeight + 80}px) rotate(360deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(function () {
      heart.remove();
    }, 3100);
  }
}

// Open birthday letter
const letterDialog = document.getElementById("letterDialog");

document.getElementById("openLetter").addEventListener("click", function () {
  letterDialog.showModal();
});

// Close birthday letter
document.getElementById("closeLetter").addEventListener("click", function () {
  letterDialog.close();
});

// Close letter by clicking outside the letter
letterDialog.addEventListener("click", function (event) {
  if (event.target === letterDialog) {
    letterDialog.close();
  }
});

// Upload memory photos
const photoInput = document.getElementById("photoInput");
const memoryGrid = document.getElementById("memoryGrid");

function createMemoryCard(file = null) {
  const card = document.createElement("article");
  card.className = "memory-card";

  if (file) {
    const image = document.createElement("img");
    image.alt = "Our memory";
    image.src = URL.createObjectURL(file);
    card.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder";
    placeholder.innerHTML = "♡<br>A new memory";
    card.appendChild(placeholder);
  }

  const caption = document.createElement("p");
  caption.contentEditable = "true";
  caption.textContent = file
    ? file.name.replace(/\.[^.]+$/, "")
    : "A beautiful memory ❤️";

  card.appendChild(caption);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-memory";
  removeButton.textContent = "Remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const image = card.querySelector("img");

    if (image && image.src.startsWith("blob:")) {
      URL.revokeObjectURL(image.src);
    }

    card.remove();
  });

  card.appendChild(removeButton);
  memoryGrid.prepend(card);
}

// Choose photos from your computer or phone
photoInput.addEventListener("change", function () {
  Array.from(photoInput.files).forEach(function (file) {
    if (file.type.startsWith("image/")) {
      createMemoryCard(file);
    }
  });

  photoInput.value = "";
});

// Add an empty memory card
document.getElementById("addMemory").addEventListener("click", function () {
  createMemoryCard();
});

// Add remove buttons to the three sample cards
document.querySelectorAll(".memory-card").forEach(function (card) {
  const button = document.createElement("button");
  button.className = "remove-memory";
  button.textContent = "Remove";
  button.type = "button";

  button.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(button);
});

// Generate QR code from the published website link
document.getElementById("makeQr").addEventListener("click", function () {
  const urlInput = document.getElementById("siteUrl");
  const result = document.getElementById("qrResult");
  const downloadButton = document.getElementById("downloadQr");
  const url = urlInput.value.trim();

  downloadButton.hidden = true;

  if (!url) {
    result.textContent =
      "Please paste your published website link first.";
    return;
  }

  let websiteUrl;

  try {
    websiteUrl = new URL(url);
  } catch {
    result.textContent =
      "Invalid link. Please check your website URL.";
    return;
  }

  if (!["https:", "http:"].includes(websiteUrl.protocol)) {
    result.textContent = "Please enter a valid public website link.";
    return;
  }

  result.replaceChildren();

  const image = document.createElement("img");
  image.alt = "QR code for your birthday website";

  image.src =
    "https://api.qrserver.com/v1/create-qr-code/" +
    "?size=300x300&data=" +
    encodeURIComponent(websiteUrl.href);

  image.addEventListener("load", function () {
    downloadButton.hidden = false;
  });

  image.addEventListener("error", function () {
    result.textContent =
      "QR generation failed. Check your internet connection.";
  });

  const message = document.createElement("p");
  message.textContent = "Scan me to open your birthday surprise! ❤️";

  result.appendChild(image);
  result.appendChild(message);

  downloadButton.onclick = async function () {
    try {
      const response = await fetch(image.src);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const temporaryUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = temporaryUrl;
      link.download = "Mylove-Birthday-QR.png";
      link.click();

      URL.revokeObjectURL(temporaryUrl);
    } catch {
      window.open(image.src, "_blank");
      alert("Open the QR image, then save it to your device.");
    }
  };
});
