/* Character data */
const friends = [
  {
    name: "Rachel Green",
    image: "assets/images/cast/rachel.jpg",
    accent: "#ef7c9a",
    description: "Elegant, fashionable, sweet, and always ready with support.",
    message: `Dear Bianca,

Happy 30th birthday! Okay, first of all, thirty looks absolutely amazing on you. Like, if thirty had a runway, you would be the entire show. I hope today makes you feel as loved, admired, and celebrated as you truly are. You have this beautiful way of making people feel seen, and that is such a rare gift.

I hope this new chapter brings you confidence, joy, little luxuries, big dreams, and the kind of happiness that makes your heart feel full. Please wear something fabulous, take too many pictures, accept every compliment, and remember that you deserve all the lovely things coming your way.

You are stylish, strong, sweet, and unforgettable.

Love,
Rachel ❤️`
  },
  {
    name: "Monica Geller",
    image: "assets/images/cast/monica.jpg",
    accent: "#34b7a7",
    description: "Caring, loving, motherly, organized, and deeply heartwarming.",
    message: `Dear Bianca,

Happy 30th birthday! I need you to know that I prepared everything perfectly for your special day. The balloons are balanced, the cake is centered, the gifts are arranged by emotional impact, and yes, I checked the banner three times. Because someone as wonderful as you deserves a celebration with no crumbs out of place.

But beyond the decorations, I hope you feel the love behind every tiny detail. You bring warmth, kindness, and laughter into the lives of the people lucky enough to know you. That is worth celebrating in the biggest, brightest way.

May this year give you comfort, success, good health, sweet memories, and a home full of love.

Love,
Monica ❤️`
  },
  {
    name: "Phoebe Buffay",
    image: "assets/images/cast/phoebe.jpg",
    accent: "#f8ca5a",
    description: "Funny, random, wholesome, unique, and wonderfully cute.",
    message: `Dear Bianca,

Happy birthday, you magical birthday muffin! Thirty is such a powerful number. It is like three tens standing in a trench coat, pretending to be very mature. But do not worry, maturity is optional, joy is mandatory, and cake is basically emotional furniture.

I hope your day is full of surprises, happy singing, shiny things, and people telling you how amazing you are until your heart does a tiny dance. You have such a kind spirit, and the world is better because you are in it. Also, I asked the universe for extra blessings for you, and it said, "Absolutely, she is one of our favorites."

Stay weird, stay sweet, stay beautifully you.

Love,
Phoebe ❤️`
  },
  {
    name: "Joey Tribbiani",
    image: "assets/images/cast/joey.jpg",
    accent: "#f06f61",
    description: "Funny, friendly, food-loving, and full of big brother energy.",
    message: `Dear Bianca,

Happy 30th birthday! First question: where is the cake? Second question: is there pizza? Third question: can I have both? Because a birthday this important needs serious food support. And okay, turning thirty is a big moment, so I have to say it: "Why God, why? We had a deal!" Classic Joey. But honestly, Bianca, thirty looks great on you.

But really, Bianca, today is all about you. You are kind, fun, beautiful, and the kind of person people are lucky to have in their lives. I hope your birthday is packed with laughter, hugs, great food, and moments that make you smile so hard your cheeks need a nap.

Thirty is a big deal, but you make it look easy. Keep enjoying life, keep loving big, and never let anyone take the last slice unless they really, really deserve it.

Love,
Joey ❤️`
  },
  {
    name: "Chandler Bing",
    image: "assets/images/cast/Chandler.jpg",
    accent: "#8a4eb3",
    description: "Sarcastic, funny, caring, and packed with classic Chandler humor.",
    message: `Dear Bianca,

Could you be any more thirty? Seriously, happy birthday! This is the age where people start saying things like "new chapter" and "personal growth," while secretly hoping their back does not make a sound when they stand up.

But joking aside, you deserve a day that is every bit as wonderful as you are. You bring so much kindness, laughter, and light to the people around you, and that is not a small thing. It is actually huge, which is inconvenient for me because sincere emotions make me want to hide behind sarcasm.

I hope your 30th year is filled with love, success, ridiculous laughter, and happiness that sticks around longer than my awkward pauses.

Love,
Chandler ❤️`
  },
  {
    name: "Ross Geller",
    image: "assets/images/cast/ross.jpg",
    accent: "#6db7e8",
    description: "Emotional, intelligent, kind, sweet, and sincerely proud.",
    message: `Dear Bianca,

Happy 30th birthday! Turning thirty is not just a milestone; it is another exciting chapter in life. Historically speaking, chapters are very important. Emotionally speaking, this one is going to be beautiful.

You have grown into someone thoughtful, loving, strong, and truly special. I hope you take a moment today to appreciate not only where you are going, but everything you have already become. The people who love you are so proud of you, and I hope this year reminds you again and again how cherished you are.

May your next chapter be filled with discovery, happiness, good health, meaningful success, and the kind of love that makes every ordinary day feel extraordinary.

Love,
Ross ❤️`
  }
];

/* Birthday compliments */
const compliments = [
  "You're Amazing!",
  "Happy Birthday!",
  "Keep Smiling!",
  "You're Incredible!",
  "Stay Beautiful!",
  "30 Looks Amazing On You!",
  "You Light Up Every Room!",
  "You Are So Loved!",
  "Shine Bright Today!",
  "You Deserve The Best!",
  "Your Heart Is Gold!",
  "You're A Gift!",
  "Celebrate Big!",
  "You Are Unforgettable!",
  "Dreams Look Good On You!",
  "You're Pure Joy!",
  "This Is Your Year!",
  "You Make Life Sweeter!",
  "You Are Radiant!",
  "Cheers To Bianca!",
  "You Are Magical!",
  "Happiness Loves You!",
  "Stay Wonderful!",
  "You Are A Star!",
  "Thirty And Thriving!",
  "You Bring The Sparkle!",
  "You Are Loved Deeply!",
  "More Joy Is Coming!",
  "You Make Us Proud!",
  "Best Sister Ever!"
];

/* Element references */
const openDoorBtn = document.querySelector("#openDoorBtn");
const doorStage = document.querySelector("#doorStage");
const landing = document.querySelector("#landing");
const celebration = document.querySelector("#celebration");
const castGrid = document.querySelector("#castGrid");
const modal = document.querySelector("#letterModal");
const modalImage = document.querySelector("#modalImage");
const modalName = document.querySelector("#modalName");
const modalMessage = document.querySelector("#modalMessage");
const closeModal = document.querySelector("#closeModal");
const balloonLayer = document.querySelector("#balloonLayer");
const toast = document.querySelector("#complimentToast");
const doorAudio = document.querySelector("#doorAudio");
const birthdayAudio = document.querySelector("#birthdayAudio");
const popAudio = document.querySelector("#popAudio");
const playMusic = document.querySelector("#playMusic");
const pauseMusic = document.querySelector("#pauseMusic");
const muteMusic = document.querySelector("#muteMusic");
const volumeSlider = document.querySelector("#volumeSlider");
const doorImage = document.querySelector(".door-image");

/* Sparkle setup */
function createSparkles() {
  const field = document.querySelector(".sparkle-field");
  const sparkleCount = 44;

  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 110}%`;
    sparkle.style.animationDuration = `${6 + Math.random() * 8}s`;
    sparkle.style.animationDelay = `${Math.random() * 6}s`;
    field.appendChild(sparkle);
  }
}

/* Cast card rendering */
function renderCastCards() {
  friends.forEach((friend, index) => {
    const card = document.createElement("article");
    card.className = "cast-card reveal-card";
    card.style.setProperty("--accent", friend.accent);
    card.style.transitionDelay = `${index * 90}ms`;

    const image = document.createElement("img");
    image.className = "cast-photo";
    image.src = friend.image;
    image.alt = friend.name;

    const title = document.createElement("h3");
    title.textContent = friend.name;

    const description = document.createElement("p");
    description.textContent = friend.description;

    const button = document.createElement("button");
    button.className = "letter-btn";
    button.type = "button";
    button.textContent = "💌 Open Birthday Letter";
    button.addEventListener("click", () => openLetter(friend));

    card.append(image, title, description, button);
    castGrid.appendChild(card);
  });
}

/* Door animation */
function openDoor(event) {
  const rect = openDoorBtn.getBoundingClientRect();
  openDoorBtn.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
  openDoorBtn.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
  openDoorBtn.classList.add("rippling", "hidden-btn");
  doorStage.classList.add("open");
  playSound(doorAudio);

  setTimeout(() => {
    doorStage.classList.add("zoom-in");
    fireConfetti(220);
  }, 850);

  setTimeout(() => {
    landing.classList.add("hidden");
    celebration.classList.remove("hidden");
    celebration.classList.add("visible");
    fireConfetti(260);
    startBalloons();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1900);
}

/* Letter modal */
function openLetter(friend) {
  const letterBackground = friend.name === "Joey Tribbiani" ? modal.dataset.joeyBackground : "";

  modalImage.src = friend.image;
  modalImage.alt = friend.name;
  modalName.textContent = friend.name;
  modalMessage.textContent = friend.message;
  modal.classList.toggle("character-bg", Boolean(letterBackground));
  modal.style.setProperty("--modal-bg", letterBackground ? `url("${letterBackground}")` : "none");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  fireConfetti(120);
}

function closeLetter() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* Audio controls */
function playSound(audio) {
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function setupMusic() {
  birthdayAudio.volume = Number(volumeSlider.value);

  playMusic.addEventListener("click", () => {
    birthdayAudio.play().catch(() => {});
  });

  pauseMusic.addEventListener("click", () => {
    birthdayAudio.pause();
  });

  muteMusic.addEventListener("click", () => {
    birthdayAudio.muted = !birthdayAudio.muted;
    muteMusic.textContent = birthdayAudio.muted ? "🔈" : "🔇";
  });

  volumeSlider.addEventListener("input", () => {
    birthdayAudio.volume = Number(volumeSlider.value);
    birthdayAudio.muted = false;
    muteMusic.textContent = "🔇";
  });
}

/* Balloons */
function startBalloons() {
  if (balloonLayer.childElementCount > 0) {
    return;
  }

  const colors = ["#ef7c9a", "#f8ca5a", "#34b7a7", "#f06f61", "#8a4eb3", "#6db7e8"];

  for (let index = 0; index < 18; index += 1) {
    const balloon = document.createElement("button");
    balloon.className = "balloon";
    balloon.type = "button";
    balloon.setAttribute("aria-label", "Pop a birthday balloon");
    balloon.style.left = `${Math.random() * 94}%`;
    balloon.style.background = colors[index % colors.length];
    balloon.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
    balloon.style.animationDuration = `${11 + Math.random() * 9}s`;
    balloon.style.animationDelay = `${Math.random() * 8}s`;
    balloon.addEventListener("click", () => popBalloon(balloon));
    balloonLayer.appendChild(balloon);
  }
}

function popBalloon(balloon) {
  balloon.classList.add("pop");
  playSound(popAudio);
  showCompliment();
  fireConfetti(42);

  setTimeout(() => {
    balloon.classList.remove("pop");
    balloon.style.left = `${Math.random() * 94}%`;
    balloon.style.animationDelay = "0s";
  }, 450);
}

function showCompliment() {
  toast.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  toast.classList.add("show");
  clearTimeout(showCompliment.timeout);
  showCompliment.timeout = setTimeout(() => toast.classList.remove("show"), 1800);
}

/* Intersection animations */
function setupObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal-section, .reveal-card").forEach((element) => {
    observer.observe(element);
  });
}

/* Confetti */
const confettiCanvas = document.querySelector("#confettiCanvas");
const confettiContext = confettiCanvas.getContext("2d");
let confettiPieces = [];

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
}

function fireConfetti(amount) {
  const colors = ["#f8ca5a", "#ef7c9a", "#34b7a7", "#f06f61", "#ffffff", "#8a4eb3"];

  for (let index = 0; index < amount; index += 1) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: -20,
      size: 5 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 2 + Math.random() * 5,
      drift: -2 + Math.random() * 4,
      rotation: Math.random() * Math.PI,
      spin: -0.12 + Math.random() * 0.24,
      life: 160 + Math.random() * 80
    });
  }
}

function animateConfetti() {
  confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiPieces = confettiPieces.filter((piece) => {
    piece.x += piece.drift * window.devicePixelRatio;
    piece.y += piece.speed * window.devicePixelRatio;
    piece.rotation += piece.spin;
    piece.life -= 1;

    confettiContext.save();
    confettiContext.translate(piece.x, piece.y);
    confettiContext.rotate(piece.rotation);
    confettiContext.fillStyle = piece.color;
    confettiContext.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.55);
    confettiContext.restore();

    return piece.life > 0 && piece.y < confettiCanvas.height + 40;
  });

  requestAnimationFrame(animateConfetti);
}

/* Fireworks */
const fireworksCanvas = document.querySelector("#fireworksCanvas");
const fireworksContext = fireworksCanvas.getContext("2d");
let fireworks = [];

function launchFirework() {
  const colors = ["#f8ca5a", "#ef7c9a", "#34b7a7", "#ffffff"];
  const x = Math.random() * fireworksCanvas.width;
  const y = Math.random() * fireworksCanvas.height * 0.55;

  for (let index = 0; index < 46; index += 1) {
    const angle = (Math.PI * 2 * index) / 46;
    const speed = 1.2 + Math.random() * 3.5;
    fireworks.push({
      x,
      y,
      vx: Math.cos(angle) * speed * window.devicePixelRatio,
      vy: Math.sin(angle) * speed * window.devicePixelRatio,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 70 + Math.random() * 24
    });
  }
}

function animateFireworks() {
  fireworksContext.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  fireworks = fireworks.filter((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.018 * window.devicePixelRatio;
    particle.life -= 1;

    fireworksContext.globalAlpha = Math.max(particle.life / 90, 0);
    fireworksContext.fillStyle = particle.color;
    fireworksContext.beginPath();
    fireworksContext.arc(particle.x, particle.y, 2.2 * window.devicePixelRatio, 0, Math.PI * 2);
    fireworksContext.fill();

    return particle.life > 0;
  });

  fireworksContext.globalAlpha = 1;
  requestAnimationFrame(animateFireworks);
}

function setupFireworks() {
  setInterval(() => {
    const finale = document.querySelector(".finale");
    const finaleBox = finale.getBoundingClientRect();
    const isVisible = finaleBox.top < window.innerHeight && finaleBox.bottom > 0;

    if (isVisible) {
      launchFirework();
      fireConfetti(28);
    }
  }, 1000);
}

/* Golden particles */
function createGoldParticles() {
  const field = document.querySelector(".gold-particles");

  for (let index = 0; index < 28; index += 1) {
    const dot = document.createElement("span");
    dot.className = "gold-dot";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDuration = `${7 + Math.random() * 8}s`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    field.appendChild(dot);
  }
}

/* App initialization */
function initialize() {
  createSparkles();
  createGoldParticles();
  renderCastCards();
  setupObservers();
  setupMusic();
  resizeCanvas(confettiCanvas);
  resizeCanvas(fireworksCanvas);
  animateConfetti();
  animateFireworks();
  setupFireworks();

  doorImage.addEventListener("error", () => {
    doorImage.classList.add("image-missing");
    doorStage.querySelector(".door-frame").classList.add("fallback-door");
  });
  if (doorImage.complete && doorImage.naturalWidth === 0) {
    doorImage.classList.add("image-missing");
    doorStage.querySelector(".door-frame").classList.add("fallback-door");
  }

  openDoorBtn.addEventListener("click", openDoor);
  closeModal.addEventListener("click", closeLetter);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeLetter();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLetter();
    }
  });
  window.addEventListener("resize", () => {
    resizeCanvas(confettiCanvas);
    resizeCanvas(fireworksCanvas);
  });
}

initialize();
