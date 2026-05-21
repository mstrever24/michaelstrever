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

const mediaTypes = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  m4a: "audio/mp4",
  ogg: "audio/ogg",
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime"
};

const getExtension = (path) => path.split(".").pop()?.toLowerCase() || "";

const renderMediaSlot = (slot) => {
  const type = slot.dataset.mediaType === "audio" ? "audio" : "video";
  const src = slot.dataset.mediaSrc?.trim();
  const poster = slot.dataset.mediaPoster?.trim();
  const label = slot.dataset.mediaLabel || `${type} preview`;
  const file = slot.dataset.mediaFile || (type === "audio" ? "sample.mp3" : "sample.mp4");
  const folder = slot.dataset.mediaFolder || "assets/work";

  slot.replaceChildren();

  const frame = document.createElement("div");
  frame.className = `media-frame media-frame--${type}`;

  if (!src) {
    const placeholder = document.createElement("div");
    const kicker = document.createElement("span");
    const title = document.createElement("span");
    const note = document.createElement("span");

    placeholder.className = "media-placeholder";
    kicker.className = "media-kicker";
    title.className = "media-title";
    note.className = "media-note";

    kicker.textContent = label;
    title.textContent = `Add ${file}`;
    note.textContent = `Place the file in ${folder}, then set data-media-src to ${folder}/${file}.`;

    placeholder.append(kicker, title, note);
    frame.append(placeholder);
    slot.append(frame);
    return;
  }

  const player = document.createElement(type);
  player.className = "media-player";
  player.controls = true;
  player.preload = "metadata";

  if (type === "video" && poster) {
    player.poster = poster;
  }

  const source = document.createElement("source");
  source.src = src;
  source.type = mediaTypes[getExtension(src)] || `${type}/${getExtension(src)}`;
  player.append(source, "Your browser does not support this media player.");
  frame.append(player);
  slot.append(frame);
};

document.querySelectorAll(".work-media").forEach(renderMediaSlot);

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
