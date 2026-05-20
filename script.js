const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => revealObserver.observe(element));

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll(".work-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".work-grid").forEach((element) => barObserver.observe(element));

const cracks = document.querySelector(".cracks");

window.addEventListener(
  "scroll",
  () => {
    const scrolled = window.scrollY;

    if (cracks && scrolled < window.innerHeight) {
      cracks.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
  },
  { passive: true }
);
