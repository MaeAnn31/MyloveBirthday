
document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // 1. BIRTHDAY CANDLES
  // ========================================
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
      heart.style.zIndex = "9999";
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

      if (relightButton) {
        relightButton.hidden = false;
      }

      showHearts();
    });
  }

  if (relightButton && candles && cakeMessage) {
    relightButton.addEventListener("click", function () {
      candles.classList.remove("blown");
      cakeMessage.textContent = "Your birthday wish is waiting! ✨";

      relightButton.hidden = true;

      if (blowButton) {
        blowButton.hidden = false;
      }
    });
  }

  // ========================================
  // 2. BIRTHDAY LETTER
  // ========================================
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

  // ========================================
  // 3. PERMANENT MEMORY PHOTOS
  // Photos are in the repository root.
  // Filenames must match GitHub exactly.
  // ========================================
  const permanentMemories = [
    {
      src: "Pandemic pani gakuha ata kog card or module ba.jpg",
      caption: "A memory with you ❤️"
    },
    {
      src: "bag o nahuman ug suyop hahaha.jpg",
      caption: "One of our funny moments 😂"
    },
    {
      src: "cute ko.jpg",
      caption: "Cute memories 💕"
    },
    {
      src: "dakos gyud ug mata.jpg",
      caption: "A moment to remember 🖤"
    },
    {
      src: "gi ulagan.jpg",
      caption: "Our special memory ❤️"
    },
    {
      src: "haysssttt.jpg",
      caption: "A memory close to my heart 💌"
    },
    {
      src: "hayssstttmissyousomuch.jpg",
      caption: "Missing you so much 🥹"
    },
    {
      src: "inlove man kaayu.jpg",
      caption: "In love with you ❤️"
    },
    {
      src: "lain kaayu christian na cgeg panilap ewwssss.jpg",
      caption: "Our funny moments 😂"
    },
    {
      src: "mura ng buros hahaha.jpg",
      caption: "Another funny memory 😆"
    },
    {
      src: "my2.jpg",
      caption: "My favorite memory ❤️"
    },
    {
      src: "pogi ng lalove ko.jpg",
      caption: "My pogi love 🖤"
    }
  ];

  const photoInput = document.getElementById("photoInput");
  const memoryGrid = document.getElementById("memoryGrid");
  const addMemoryButton = document.getElementById("addMemory");

  function createMemoryCard(file = null, memory = null) {
    const card = document.createElement("article");
    card.className = "memory-card";

    let imageSource = null;

    if (memory) {
      // Encode spaces and special filename characters safely.
      imageSource = encodeURI(memory.src);
    } else if (file) {
      imageSource = URL.createObjectURL(file);
    }

    if (imageSource) {
      const image = document.createElement("img");
      image.src = imageSource;
      image.alt = memory ? memory.caption : "Our memory";
      image.loading = "lazy";

      image.addEventListener("error", function () {
        console.error("Photo failed to load:", imageSource);
        image.alt = "Photo could not be loaded";
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
    caption.textContent = memory
      ? memory.caption
      : file
        ? file.name.replace(/\.[^.]+$/, "")
        : "A beautiful memory ❤️";

    card.appendChild(caption);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-memory";
    removeButton.type = "button";
    removeButton.textContent = "Remove";

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
    // Keep the original sample cards from index.html.
    memoryGrid.querySelectorAll(".memory-card").forEach(function (card) {
      if (card.querySelector(".remove-memory")) return;

      const button = document.createElement("button");
      button.className = "remove-memory";
      button.type = "button";
      button.textContent = "Remove";

      button.addEventListener("click", function () {
        card.remove();
      });

      card.appendChild(button);
    });

    // Add the permanent photos only once.
    permanentMemories.forEach(function (memory) {
      const alreadyExists = Array.from(
        memoryGrid.querySelectorAll("img")
      ).some(function (image) {
        return image.getAttribute("src") === encodeURI(memory.src);
      });

      if (!alreadyExists) {
        memoryGrid.appendChild(createMemoryCard(null, memory));
      }
    });
  }

  // Add photos selected from a phone or computer.
  // Note: these previews are temporary and are not uploaded to GitHub.
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

  // ========================================
  // 4. QR CODE GENERATOR
  // ========================================
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
        result.textContent =
          "Invalid link. Please check your website URL.";
        return;
      }

      if (websiteUrl.protocol !== "https:") {
        result.textContent =
          "Please enter your public HTTPS website link.";
        return;
      }

      result.replaceChildren();

      const qrImage = document.createElement("img");
      qrImage.alt = "QR code for your birthday website";
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        encodeURIComponent(websiteUrl.href);

      const message = document.createElement("p");
      message.textContent =
        "Scan me to open your birthday surprise! ❤️";

      result.appendChild(qrImage);
      result.appendChild(message);

      qrImage.addEventListener("load", function () {
        downloadButton.hidden = false;
      });

      qrImage.addEventListener("error", function () {
        result.textContent =
          "QR generation failed. Check your internet connection.";
      });

      downloadButton.onclick = async function () {
        try {
          const response = await fetch(qrImage.src);

          if (!response.ok) {
            throw new Error("QR download failed");
          }

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
          window.open(qrImage.src, "_blank");
          alert("Open the QR image, then save it to your device.");
        }
      };
    });
  }
});
