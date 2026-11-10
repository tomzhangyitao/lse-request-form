const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

class Confetti {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.items = [];
    this.frame = null;
    this.lastTime = 0;
    this.width = 0;
    this.height = 0;
    this.ratio = 1;
    this.colors = ["#ffffff", "#d9e8ff", "#75b8ff", "#397dff", "#a99dff"];
    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * this.ratio);
    this.canvas.height = Math.round(this.height * this.ratio);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
  }

  start(count = 105) {
    if (reduceMotion) return;

    for (let index = 0; index < count; index += 1) {
      const angle = Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      const speed = 1.05 + Math.random() * 2.25;
      this.items.push({
        x: Math.random() * this.width,
        y: -18 - Math.random() * this.height * 0.3,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.45,
        vy: Math.sin(angle) * speed,
        gravity: 0.062 + Math.random() * 0.036,
        width: 2 + Math.random() * 3.5,
        height: 5 + Math.random() * 9,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.66 + Math.random() * 0.3,
        life: 0,
        maxLife: 250 + Math.random() * 140,
        circle: Math.random() > 0.9,
      });
    }

    this.animate();
  }

  burst(count = 150) {
    if (reduceMotion) return;

    for (let index = 0; index < count; index += 1) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.35;
      const speed = 4.2 + Math.random() * 7.2;
      this.items.push({
        x: this.width * 0.5 + (Math.random() - 0.5) * Math.min(this.width * 0.16, 120),
        y: this.height * 0.63 + (Math.random() - 0.5) * 36,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.095 + Math.random() * 0.045,
        width: 2.5 + Math.random() * 4,
        height: 6 + Math.random() * 11,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.19,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.74 + Math.random() * 0.26,
        life: 0,
        maxLife: 180 + Math.random() * 110,
        circle: Math.random() > 0.88,
      });
    }

    this.animate();
  }

  animate() {
    if (this.frame) return;
    this.lastTime = performance.now();
    this.frame = requestAnimationFrame(this.render);
  }

  render(time) {
    const delta = Math.min((time - this.lastTime) / 16.67, 2);
    this.lastTime = time;
    this.context.clearRect(0, 0, this.width, this.height);

    this.items = this.items.filter((item) => {
      item.life += delta;
      item.phase += 0.045 * delta;
      item.vy += item.gravity * delta;
      item.x += (item.vx + Math.sin(item.phase) * 0.2) * delta;
      item.y += item.vy * delta;
      item.rotation += item.spin * delta;

      const remaining = 1 - item.life / item.maxLife;
      const fade = item.life > item.maxLife * 0.76 ? Math.max(0, remaining / 0.24) : 1;

      this.context.save();
      this.context.translate(item.x, item.y);
      this.context.rotate(item.rotation);
      this.context.globalAlpha = item.opacity * fade;
      this.context.fillStyle = item.color;

      if (item.circle) {
        this.context.beginPath();
        this.context.arc(0, 0, item.width * 0.48, 0, Math.PI * 2);
        this.context.fill();
      } else {
        this.context.scale(Math.max(0.2, Math.abs(Math.cos(item.phase))), 1);
        this.context.fillRect(-item.width / 2, -item.height / 2, item.width, item.height);
      }

      this.context.restore();
      return item.life < item.maxLife && item.y < this.height + 50;
    });

    if (this.items.length) {
      this.frame = requestAnimationFrame(this.render);
    } else {
      this.frame = null;
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }
}

const confettiCanvas = document.querySelector("#confetti");
let homeConfetti = null;
if (confettiCanvas) {
  homeConfetti = new Confetti(confettiCanvas);
  window.addEventListener(
    "pageshow",
    () => window.setTimeout(() => homeConfetti.start(window.innerWidth < 700 ? 78 : 110), 120),
    { once: true },
  );
}

const enterLink = document.querySelector("#enterLink");
if (enterLink) {
  enterLink.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (document.body.classList.contains("is-celebrating")) return;

    document.body.classList.add("is-celebrating");
    homeConfetti?.burst(window.innerWidth < 700 ? 120 : 175);

    window.setTimeout(
      () => window.location.assign(enterLink.href),
      reduceMotion ? 0 : 820,
    );
  });
}

const story = document.querySelector("#story");
if (story) {
  const pages = [...document.querySelectorAll(".story-page")];
  const stage = document.querySelector(".story-stage");
  const progressBar = document.querySelector("#storyProgress");
  let scheduled = false;
  let currentPage = -1;

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function updateStory() {
    scheduled = false;
    const range = Math.max(1, story.offsetHeight - window.innerHeight);
    const progress = clamp(window.scrollY / range, 0, 1);
    const rawPosition = progress * (pages.length - 1);
    const basePage = Math.floor(rawPosition);
    const localProgress = rawPosition - basePage;
    let position = rawPosition;

    if (basePage >= pages.length - 1) {
      position = pages.length - 1;
    } else if (localProgress <= 0.38) {
      position = basePage;
    } else if (localProgress >= 0.62) {
      position = basePage + 1;
    } else {
      const transitionProgress = (localProgress - 0.38) / 0.24;
      const easedProgress = transitionProgress * transitionProgress * (3 - 2 * transitionProgress);
      position = basePage + easedProgress;
    }
    const nearest = Math.round(position);

    pages.forEach((page, index) => {
      const delta = index - position;
      const distance = Math.abs(delta);
      const opacity = clamp(1 - distance * 1.32, 0, 1);
      const translate = delta * 74;
      const scale = 1 - Math.min(distance, 1) * 0.028;
      const blur = Math.min(distance * 22, 22);

      page.style.opacity = opacity.toFixed(3);
      page.style.filter = `blur(${blur.toFixed(2)}px)`;
      page.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      page.classList.toggle("is-active", index === nearest);
      page.setAttribute("aria-hidden", index === nearest ? "false" : "true");
    });

    const springDistance = Math.abs(position - 4);
    const springWeight = clamp(1 - springDistance * 0.82, 0, 1);
    const introWeight = clamp(1 - position, 0, 1);
    stage.style.setProperty("--light-opacity", (0.06 + springWeight * 0.72 + introWeight * 0.08).toFixed(3));
    stage.style.setProperty("--light-scale", (0.78 + springWeight * 0.25 + introWeight * 0.05).toFixed(3));
    progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;

    if (nearest !== currentPage) currentPage = nearest;
  }

  function requestUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateStory);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  window.addEventListener("pageshow", updateStory);
  updateStory();
}
