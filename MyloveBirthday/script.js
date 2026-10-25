
document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // BIRTHDAY CANDLES
  // =========================
  const candles = document.getElementById("candles");
  const cakeMessage = document.getElementById("cakeMessage");
  const blowButton = document.getElementById("blowButton");
  const relightButton = document.getElementById("relightButton");

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

  if (blowButton && candles && cakeMessage) {
    blowButton.addEventListener("click", function () {
      candles.classList.add("blown");
      cakeMessage.textContent =
        "Wish made! May all your dreams come true. ❤️";

      blowButton.hidden = true;
      if (relightButton) relightButton.hidden = false;

      showHearts();
    });
  }

  if (relightButton && candles && cakeMessage) {
    relightButton.addEventListener("click", function () {
      candles.classList.remove("blown");
      cakeMessage.textContent = "Your birthday wish is waiting! ✨";

      relightButton.hidden = true;
      if (blowButton) blowButton.hidden = false;
    });
  }

  // =========================
  // BIRTHDAY LETTER
  // =========================
  const letterDialog = document.getElementById("letterDialog");
  const openLetter = document.getElementById("openLetter");
  const closeLetter = document.getElementById("closeLetter");

  if (openLetter && letterDialog) {
    openLetter.addEventListener("click", function () {
      if (typeof letterDialog.showModal === "function") {
        letterDialog.showModal();
      }
    });
  }

  if (closeLetter && letterDialog) {
    closeLetter.addEventListener("click", function () {
      letterDialog.close();
    });
  }

  if (letterDialog) {
    letterDialog.addEventListener("click", function (event) {
      if (event.target === letterDialog) {
        letterDialog.close();
      }
    });
  }

  // =========================
  // MEMORY WALL
  // =========================
  const photoInput = document.getElementById("photoInput");
  const memoryGrid = document.getElementById("memoryGrid");
  const addMemoryButton = document.getElementById("addMemory");

  const permanentMemories = [
    {
      src: "./Pandemic%20pani%20gakuha%20ata%20kog%20card%20or%20module%20ba.jpg",
      caption: "A memory with you ❤️"
    },
    {
      src: "./bag%20o%20nahuman%20ug%20suyop%20hahaha.jpg",
      caption: "One of our funny moments 😂"
    },
    {
      src: "./cute%20ko.jpg",
      caption: "Cute memories 💕"
    },
    {
      src: "./dakos%20gyud%20ug%20mata.jpg",
      caption: "A moment to remember 🖤"
    },
    {
      src: "./gi%20ulagan.jpg",
      caption: "Our special memory ❤️"
    },
    {
      src: "./haysssttt.jpg",
      caption: "A memory close to my heart 💌"
    },
    {
      src: "./hayssstttmissyousomuch.jpg",
      caption: "Missing you so much 🥹"
    },
    {
      src: "./inlove%20man%20kaayu.jpg",
      caption: "In love with you ❤️"
    },
    {
      src: "./lain%20kaayu%20christian%20na%20cgeg%20panilap%20ewwssss.jpg",
      caption: "Our funny moments 😂"
    },
    {
      src: "./mura%20ng%20buros%20hahaha.jpg",
      caption: "Another funny memory 😆"
    },
    {
      src: "./my2.jpg",
      caption: "My favorite memory ❤️"
    },
    {
      src: "./pogi%20ng%20lalove%20ko.jpg",
      caption: "My pogi love 🖤"
    }
  ];

  function createMemoryCard(file = null, permanentMemory = null) {
    const card = document.createElement("article");
    card.className = "memory-card";

    const imageSource = permanentMemory
      ? permanentMemory.src
      : file
        ? URL.createObjectURL(file)
        : null;

    if (imageSource) {
      const image = document.createElement("img");
      image.src = imageSource;
      image.alt = permanentMemory
        ? permanentMemory.caption
        : "Our memory";
      image.loading = "lazy";

      image.addEventListener("error", function () {
        image.alt = "Photo could not be loaded";
        console.error("Could not load photo:", imageSource);
      });

      card.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder";
      placeholder.innerHTML = "♡<br>A new memory";
      card.appendChild(placeholder);
    }

    const caption = document.createElement("p");
    caption.contentEditable = "true";
    caption.textContent = permanentMemory
      ? permanentMemory.caption
      : file
        ? file.name.replace(/\.[^.]+$/, "")
        : "A beautiful memory ❤️";

    card.appendChild(caption);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-memory";
    removeButton.textContent = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
      if (file && imageSource && imageSource.startsWith("blob:")) {
        URL.revokeObjectURL(imageSource);
      }
      card.remove();
    });

    card.appendChild(removeButton);
    return card;
  }

  if (memoryGrid) {
    // Keep the sample cards already in index.html.
    // Add Remove buttons to them if they do not have one yet.
    memoryGrid.querySelectorAll(".memory-card").forEach(function (card) {
      if (card.querySelector(".remove-memory")) return;

      const button = document.createElement("button");
      button.className = "remove-memory";
      button.textContent = "Remove";
      button.type = "button";
      button.addEventListener("click", function () {
        card.remove();
      });
      card.appendChild(button);
    });

    // Add permanent photos only if they are not already present.
    permanentMemories.forEach(function (memory) {
      const alreadyExists = Array.from(
        memoryGrid.querySelectorAll("img")
      ).some(function (image) {
        return image.getAttribute("src") === memory.src;
      });

      if (!alreadyExists) {
        memoryGrid.appendChild(createMemoryCard(null, memory));
      }
    });
  }

  // Photos selected from a device are temporary previews.
  if (photoInput && memoryGrid) {
    photoInput.addEventListener("change", function () {
      Array.from(photoInput.files || []).forEach(function (file) {
        if (file.type.startsWith("image/")) {
          memoryGrid.prepend(createMemoryCard(file));
        }
      });
      photoInput.value = "";
    });
  }

  if (addMemoryButton && memoryGrid) {
    addMemoryButton.addEventListener("click", function () {
      memoryGrid.prepend(createMemoryCard());
    });
  }

  // =========================
  // QR CODE GENERATOR
  // =========================
  const makeQrButton = document.getElementById("makeQr");

  if (makeQrButton) {
    makeQrButton.addEventListener("click", function () {
      const urlInput = document.getElementById("siteUrl");
      const result = document.getElementById("qrResult");
      const downloadButton = document.getElementById("downloadQr");

      if (!urlInput || !result || !downloadButton) return;

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
        result.textContent = "Invalid link. Please check your website URL.";
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
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        encodeURIComponent(websiteUrl.href);

      const message = document.createElement("p");
      message.textContent =
        "Scan me to open your birthday surprise! ❤️";

      result.appendChild(image);
      result.appendChild(message);

      image.addEventListener("load", function () {
        downloadButton.hidden = false;
      });

      image.addEventListener("error", function () {
        result.textContent =
          "QR generation failed. Check your internet connection.";
      });

      downloadButton.onclick = async function () {
        try {
          const response = await fetch(image.src);
          if (!response.ok) throw new Error("Download failed");

          const blob = await response.blob();
          const temporaryUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");

          link.href = temporaryUrl;
          link.download = "Mylove-Birthday-QR.png";
          document.body.appendChild(link);
          link.click();
          link.remove();

          setTimeout(function () {
            URL.revokeObjectURL(temporaryUrl);
          }, 1000);
        } catch {
          window.open(image.src, "_blank");
          alert("Open the QR image, then save it to your device.");
        }
      };
    });
  }
});
