const root = document.documentElement;
const panels = [...document.querySelectorAll(".section-panel")];
const workCards = [...document.querySelectorAll(".work-card")];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateDepth = () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const depth = Math.round(progress * 100);

  root.style.setProperty("--scroll-depth", depth);

  panels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    const centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
    const scale = 1 - clamp(Math.abs(centerOffset) * 0.08, 0, 0.11);
    const offset = clamp(centerOffset * -34, -42, 42);

    panel.style.setProperty("--panel-scale", scale.toFixed(3));
    panel.style.setProperty("--panel-offset", offset.toFixed(1));
  });

  workCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const lift = clamp((window.innerHeight - rect.top) * 0.035, 0, 28);
    card.style.setProperty("--card-lift", `${(lift * (index + 1) * -0.22).toFixed(1)}px`);
  });
};

let ticking = false;

const requestDepthUpdate = () => {
  if (ticking) return;

  window.requestAnimationFrame(() => {
    updateDepth();
    ticking = false;
  });

  ticking = true;
};

updateDepth();
window.addEventListener("scroll", requestDepthUpdate, { passive: true });
window.addEventListener("resize", requestDepthUpdate);
