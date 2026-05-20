const root = document.documentElement;
const panels = [...document.querySelectorAll(".section-panel")];
const workCards = [...document.querySelectorAll(".work-card")];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateDepth = () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const depth = progress * 100;

  root.style.setProperty("--floor-depth-z", `${(-6 - depth * 0.18).toFixed(2)}rem`);
  root.style.setProperty("--floor-depth-y", `${(depth * -0.8).toFixed(2)}rem`);
  root.style.setProperty("--ceiling-depth-z", `${(-5 - depth * 0.16).toFixed(2)}rem`);
  root.style.setProperty("--ceiling-depth-y", `${(depth * 0.66).toFixed(2)}rem`);
  root.style.setProperty("--wall-depth-z", `${(-2 - depth * 0.18).toFixed(2)}rem`);
  root.style.setProperty("--left-wall-depth-x", `${(depth * -0.42).toFixed(2)}rem`);
  root.style.setProperty("--right-wall-depth-x", `${(depth * 0.42).toFixed(2)}rem`);
  root.style.setProperty("--end-depth-z", `${(-36 + depth * 0.82).toFixed(2)}rem`);
  root.style.setProperty("--end-depth-scale", (0.92 + depth * 0.004).toFixed(3));
  root.style.setProperty("--beam-one-z", `${(-4 + depth * 0.54).toFixed(2)}rem`);
  root.style.setProperty("--beam-two-z", `${(-13 + depth * 0.66).toFixed(2)}rem`);
  root.style.setProperty("--beam-three-z", `${(-28 + depth * 0.78).toFixed(2)}rem`);

  panels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    const centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
    const scale = 1 - clamp(Math.abs(centerOffset) * 0.08, 0, 0.11);
    const offset = clamp(centerOffset * -34, -42, 42);

    panel.style.setProperty("--panel-scale", scale.toFixed(3));
    panel.style.setProperty("--panel-offset-y", `${offset.toFixed(1)}px`);
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
