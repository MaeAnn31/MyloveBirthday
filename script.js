
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
      if (!letterDialog.open &&
          typeof letterDialog.showModal === "function") {
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
  // 3. MEMORY WALL - 27 PHOTOS
  // Folder: MyloveBirthday/MyloveBirthday/memories/
  // ========================================
  const PHOTO_BASE =
    "https://maeann31.github.io/MyloveBirthday/MyloveBirthday/memories/";

  const permanentMemories = [
    {
      src: "HAHAHAHA magkatawa man ko ani uy - Copy.jpg",
      caption: "Hahahaha, magkatawa man ko ani uy! 😂❤️"
    },
    {
      src: "HAHAHAHA magkatawa man ko ani uy.jpg",
      caption: "Our funny memories 😂💕"
    },
    {
      src: "Pandemic pani gakuha ata kog card or module ba.jpg",
      caption: "A memory from the pandemic ❤️"
    },
    {
      src: "anniversary nato ni",
      caption: "Our anniversary memory ❤️"
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
      src: "dakog mata.jpg",
      caption: "Those eyes! 👀❤️"
    },
    {
      src: "dakos gyud ug mata.jpg",
      caption: "A moment to remember 🖤"
    },
    {
      src: "ga putos ug gift para sa iyang binata.jpg",
      caption: "A little gift and a lot of love 🎁"
    },
    {
      src: "ganahan ko ani.jpg",
      caption: "One of my favorite pictures ❤️"
    },
    {
      src: "gapa cute ang mga buang hahah.jpg",
      caption: "Gapa-cute ang mga buang! 😂"
    },
    {
      src: "gapa cute gagagaga.jpg",
      caption: "Cute moments together 💕"
    },
    {
      src: "gi ulagan.jpg",
      caption: "Our special memory ❤️"
    },
    {
      src: "gubot kaayug background haha.jpg",
      caption: "Gubot ang background, pero happy ta! 😂"
    },
    {
      src: "haysssttt.jpg",
      caption: "A memory close to my heart 💌"
    },
    {
      src: "hayssstttmissyousomuch.jpg",
      caption: "I miss you so much 🥹❤️"
    },
    {
      src: "inlove man kaayu.jpg",
      caption: "In love man kaayo ❤️"
    },
    {
      src: "kaluod naay laway.jpg",
      caption: "Hahaha, kaluod! 😂"
    },
    {
      src: "lain kaayu christian na cgeg panilap ewwssss.jpg",
      caption: "Our silly moments 😂💕"
    },
    {
      src: "maligo na sad unta ta sunod.jpg",
      caption: "Hopefully, next time magkuyog na ta ❤️"
    },
    {
      src: "missyou part.jpg",
      caption: "Missing you, Part 🥹💕"
    },
    {
      src: "mura ng buros hahaha.jpg",
      caption: "Hahaha, mura nag buros! 😂"
    },
    {
      src: "my1.jpg",
      caption: "A special memory ❤️"
    },
    {
      src: "my2.jpg",
      caption: "My favorite memory with you 💕"
    },
    {
      src: "nawong sa iro.jpg",
      caption: "Nawong sa iro! Hahaha 😂"
    },
    {
      src: "nice.jpg",
      caption: "Such a nice memory ❤️"
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

    let imageSource = "";

    if (memory) {
      imageSource = PHOTO_BASE + encodeURIComponent(memory.src);
    } else if (file) {
      imageSource = URL.createObjectURL(file);
    }

    if (imageSource) {
      const image = document.createElement("img");
      image.src = imageSource;
      image.alt = memory ? memory.caption : "Our memory";
      image.loading = "lazy";

      image.addEventListener("error", function () {
        console.error("Cannot load photo:", imageSource);
        image.alt = "Photo could not be loaded";
      });

      card.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder";
      placeholder.textContent = "♡ A new memory";
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
      if (file && imageSource.startsWith("blob:")) {
        URL.revokeObjectURL(imageSource);
      }

      card.remove();
    });

    card.appendChild(removeButton);

    return card;
  }

  if (memoryGrid) {
    // Remove the old placeholder cards from index.html.
    // The 27 permanent photos below will replace them.
    memoryGrid.innerHTML = "";

    permanentMemories.forEach(function (memory) {
      memoryGrid.appendChild(createMemoryCard(null, memory));
    });
  }

  // Add photos from a phone or computer.
  // Selected photos are temporary browser previews.
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
          "QR generation failed. Please check your internet connection.";
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
        } catch (error) {
          window.open(qrImage.src, "_blank");
          alert("Open the QR image in a new tab, then save it.");
        }
      };
    });
  }
});
