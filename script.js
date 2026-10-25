
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Birthday, Christian Jay Balagas❤️</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <a href="#home" class="logo">♥ FOR Christian Jay Balagas</a>
    <nav>
      <a href="#cake">Cake</a>
      <a href="#letter">My Letter</a>
      <a href="#memories">Memories</a>
      <a href="#wishes">My Wishes</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div>
        <p class="eyebrow">A LITTLE SURPRISE, MADE WITH LOVE</p>
        <h1>Happy Birthday,<br>
          <span>Part</span> ❤️
        </h1>
        <p class="intro">
          Another year, another reason to love you more.
          I made this little surprise especially for you Part. 💗
        </p>
        <a href="#cake" class="btn">Start Your Surprise →</a>
      </div>
      <div class="hero-heart">❤️<p>Made with love</p></div>
    </section>

    <section id="cake" class="section">
      <p class="eyebrow"> PLEASE MAKE A WISH</p>
      <h2>A Cake Just for <span>You</span></h2>
      <p>Make a wish, then blow out your birthday candles!</p>

      <div class="cake-area">
        <div id="candles" class="candles">
          <span class="flame">🔥</span>
          <span class="flame">🔥</span>
          <span class="flame">🔥</span>
          <span class="flame">🔥</span>
          <span class="flame">🔥</span>
        </div>
        <div class="cake-top">♥ ♥ ♥</div>
        <div class="cake">
          <h3>HAPPY BIRTHDAY</h3>
          <h2>MYLOVE</h2>
          <p>❤️ ❤️ ❤️</p>
        </div>
        <div class="plate"></div>
      </div>

      <button class="btn" id="blowButton">🕯️ Blow the Candles</button>
      <button class="btn" id="relightButton" hidden>Light Again ✨</button>
      <p id="cakeMessage">Your birthday wish is waiting! ✨</p>
    </section>

    <section id="letter" class="section">
      <p class="eyebrow">A MESSAGE FROM MY HEART</p>
      <h2>A Letter for <span>You</span> 💌</h2>
      <p>There's something special I want you to read.</p>
      <button class="envelope" id="openLetter">
        💌<br>
        Tap to Read Your Birthday Message
      </button>
    </section>

    <section id="memories" class="section">
      <p class="eyebrow">LITTLE MOMENTS, BIG FEELINGS</p>
      <h2>Our <span>Memory Wall</span> 📸</h2>
      <p>Add your favorite photos and edit their captions.</p>

      <label class="btn upload-btn">
        + Add Our Photos
        <input type="file" id="photoInput" accept="image/*" multiple hidden>
      </label>
      <button class="btn" id="addMemory">+ Add Memory Card</button>
      <div id="memoryGrid" class="memory-grid">
        <article class="memory-card">
          <div class="placeholder">♡<br>Our photo goes here</div>
          <p contenteditable="true">Our favorite moment ❤️</p>
        </article>
        <article class="memory-card">
          <div class="placeholder">♡<br>Add a lovely memory</div>
          <p contenteditable="true">You and me, always 💗</p>
        </article>
        <article class="memory-card">
          <div class="placeholder">♡<br>A memory to treasure</div>
          <p contenteditable="true">Simple moments, big happiness</p>
        </article>
      </div>
      <p class="small-note">Tip: Tap the captions to edit them.</p>
    </section>

    <section id="wishes" class="section">
      <p class="eyebrow">A FEW THINGS I WISH FOR YOU</p>
      <h2>My Wishes <span>for You</span> 🌹</h2>
      <div class="wish-grid">
        <article class="wish-card">
          <h3>❤️ Happiness</h3>
          <p>May you always have reasons to smile bahalag unsa pana ang imong mga naagian na lisud and find peace in every season of life Part.</p>
        </article>
        <article class="wish-card">
          <h3>✨ Your Dreams</h3>
          <p>May your hard work lead you to success puhon part and bring you closer sa imong pangandoy sa kinabuhi. I wish nga dli ka mo give up kong unsa man nga mga pagsubok ang moabot sa imong kinabuhi, salig lang permi sa ginoo.</p>
        </article>
        <article class="wish-card">
          <h3>🌹 Good Health</h3>
          <p>May you always be healthy, safe, strong, and surrounded by people nga nag care sa imo.</p>
        </article>
        <article class="wish-card">
          <h3>💗 Our Future</h3>
          <p>May we continue learning, laughing, growing, and making beautiful memories together.</p>
        </article>
      </div>
      <div class="final-message">
        <h2>Happy Birthday, Part! ❤️</h2>
        <p>I'm so lucky nga naa kas akong kinabuhi.</p>
        <p>Today, tomorrow, and always ikaw ra permi. 💋</p>
      </div>
    </section>

    <section id="share" class="section">
      <p class="eyebrow">SHARE YOUR SURPRISE</p>
      <h2>Your Birthday <span>QR Code</span> 💌</h2>
      <p>Publish your website first, then paste its public link here.</p>
      <div class="qr-box">
        <input id="siteUrl" type="url"
          placeholder="https://yourname.github.io/MyloveBirthday/">
        <button class="btn" id="makeQr">Create QR Code</button>
        <div id="qrResult">Your QR code will appear here.</div>
        <button class="btn" id="downloadQr" hidden>Download QR</button>
      </div>
    </section>
  </main>

  <dialog id="letterDialog">
    <button id="closeLetter" class="close-btn">✕</button>
    <p class="eyebrow">TO MYLOVE PART</p>
    <h2>Happy Birthday, My Love! ❤️</h2>
    <div class="letter-text">
      <p>Hi, ,Happy birthday, my love! 🥹❤️</p>
      <p>Tigulang naka part hahahah unta dli ka sad karong adlawa labaw na kay dli ka makauli kay pit os kaayu pero i hope nga malipayon gyapon ka.</p>
      <p>Grateful ko nga part kas akong life part. Bisag wala ta gauban permi ga update-update lang pero malipayon na kaayu ko makabalo lang ko okay ka, and ug malipayon ka malipay na sad ko part. </p>
      <p>I know nga gikapoy nakag pagpaningkamot, usahay gakawad an naka ug pag asa sa kinabuhi but still wala ka nagpadala ug nilaban pa gyapon ka. Proud kos imoa part in every way Christian.</p>
      <p>Kabalo ko nga daghan ug plano ang ginoo sa imo/ato busa let's be patience lang part ug lets continue nga magtoo&salig sa ginoo</p>
      <p>I wish you good health, peace of mind, success, and the courage to chase every dream na gusto nmo sa imong kinabuhi. Even when life gets difficult, I hope dli nmo malimtan how capable, strong and loved you are.</p>
      <p>Thank you sa tanan memories, the laughter, and sa mga gamay na butang just to make our relationship special. I hope we continue growing together and maghimo pa ug mga chada na memories. I love you always part</p>
      <p>Enjoy your special day basta piskay ang lawas okay nana, make a wish, and never forget that someone is always cheering for you with all her heart. ❤️</p>
      <p class="signature">With all my love,<br>Your girl, always. 💋</p>
    </div>
  </dialog>

  <footer>Made with ❤️ for Christian Jay Balagas, Mylove</footer>
  <script src="script.js"></script>
</body>
</html>
