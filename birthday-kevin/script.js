const body = document.body;
const letter = document.querySelector("#letter");
const openButton = document.querySelector("#openLetter");
const canvas = document.querySelector("#confetti");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

class Confetti {
  constructor(target) {
    this.canvas = target;
    this.context = target.getContext("2d");
    this.items = [];
    this.frame = null;
    this.lastTime = 0;
    this.width = 0;
    this.height = 0;
    this.ratio = 1;
    this.colors = ["#ffffff", "#d9e8ff", "#73b7ff", "#3178ff", "#a99cff"];
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

  burst({ count = 90, center = false } = {}) {
    if (reduceMotion) return;

    for (let index = 0; index < count; index += 1) {
      const x = center
        ? this.width * 0.5 + (Math.random() - 0.5) * Math.min(this.width * 0.2, 180)
        : Math.random() * this.width;
      const y = center
        ? this.height * 0.47 + (Math.random() - 0.5) * 56
        : -16 - Math.random() * this.height * 0.26;
      const angle = center
        ? -Math.PI / 2 + (Math.random() - 0.5) * 1.75
        : Math.PI / 2 + (Math.random() - 0.5) * 0.55;
      const speed = center ? 4.3 + Math.random() * 5.5 : 1.1 + Math.random() * 2.4;

      this.items.push({
        x,
        y,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed,
        gravity: 0.07 + Math.random() * 0.035,
        drag: 0.992,
        width: 2 + Math.random() * 4,
        height: 5 + Math.random() * 10,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.13,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.68 + Math.random() * 0.3,
        life: 0,
        maxLife: 300 + Math.random() * 180,
        circle: Math.random() > 0.86,
      });
    }

    if (!this.frame) {
      this.lastTime = performance.now();
      this.frame = requestAnimationFrame(this.render);
    }
  }

  render(time) {
    const delta = Math.min((time - this.lastTime) / 16.67, 2.2);
    this.lastTime = time;
    this.context.clearRect(0, 0, this.width, this.height);

    this.items = this.items.filter((item) => {
      item.life += delta;
      item.phase += 0.05 * delta;
      item.vx *= Math.pow(item.drag, delta);
      item.vy += item.gravity * delta;
      item.x += (item.vx + Math.sin(item.phase) * 0.24) * delta;
      item.y += item.vy * delta;
      item.rotation += item.rotationSpeed * delta;

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
        const flip = Math.max(0.22, Math.abs(Math.cos(item.phase)));
        this.context.scale(flip, 1);
        this.context.fillRect(-item.width / 2, -item.height / 2, item.width, item.height);
      }

      this.context.restore();

      return item.life < item.maxLife && item.y < this.height + 60 && item.x > -60 && item.x < this.width + 60;
    });

    if (this.items.length) {
      this.frame = requestAnimationFrame(this.render);
    } else {
      this.context.clearRect(0, 0, this.width, this.height);
      this.frame = null;
    }
  }
}

const confetti = new Confetti(canvas);
let opened = false;

function observeSlides() {
  const slides = [...document.querySelectorAll(".slide")];

  if (reduceMotion || !("IntersectionObserver" in window)) {
    slides.forEach((slide) => slide.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: letter,
      threshold: 0.38,
      rootMargin: "-4% 0px -4% 0px",
    },
  );

  slides.forEach((slide) => observer.observe(slide));
}

function openLetter() {
  if (opened) return;
  opened = true;
  letter.scrollTop = 0;
  letter.removeAttribute("inert");
  body.classList.add("is-letter-open");
  history.replaceState(null, "", `${window.location.pathname}${window.location.search}#letter`);
  observeSlides();

  window.setTimeout(() => {
    confetti.burst({ count: window.innerWidth < 700 ? 70 : 95, center: true });
  }, reduceMotion ? 0 : 420);
}

openButton.addEventListener("click", openLetter);

window.addEventListener(
  "pageshow",
  () => {
    window.setTimeout(() => {
      confetti.burst({ count: window.innerWidth < 700 ? 80 : 120 });
    }, 140);
  },
  { once: true },
);
