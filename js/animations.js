// Reveals each .reveal-img as it scrolls into view: slides in from
// the side (left by default, or right if it has the "from-right" class)
// and fades in. Plays once per image.

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".reveal-img");
  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  images.forEach((img) => observer.observe(img));
});

// Nav bar: hides when scrolling down, reappears when scrolling up.
// Stays visible while near the top of the page, or while the mobile
// dropdown is open.
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const menu = document.querySelector(".nav-links");
  if (!nav) return;

  let lastY = window.scrollY;
  const hideAfter = 80; // px scrolled before the nav is allowed to hide

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const menuOpen = menu && menu.classList.contains("open");

    if (menuOpen || y < hideAfter) {
      nav.classList.remove("nav-hidden");
    } else if (y > lastY) {
      nav.classList.add("nav-hidden"); // scrolling down
    } else {
      nav.classList.remove("nav-hidden"); // scrolling up
    }

    lastY = y;
  }, { passive: true });
});

// Mobile burger: toggles the dropdown, closes on link tap or outside tap.
// The button itself morphs into an X while the dropdown is open.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!menu.classList.contains("open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== btn) {
      setOpen(false);
    }
  });
});

// Lightbox: click any element with .lightbox-trigger (an image, or a
// button with data-src) to see the full image enlarged in an overlay.
// A data-caption attribute (or the image's own alt text) shows as a
// caption under the enlarged image. If there's more than one trigger
// on the page (the Foto gallery), prev/next buttons and the left/right
// arrow keys step through them all, looping at both ends — no swipe
// gesture, by design. Closes on the X, on clicking outside the image,
// or on Escape.
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".lightbox-overlay");
  if (!overlay) return;

  const overlayImg = overlay.querySelector("img");
  const overlayCaption = overlay.querySelector(".lightbox-caption");
  const closeBtn = overlay.querySelector(".lightbox-close");
  const prevBtn = overlay.querySelector(".lightbox-prev");
  const nextBtn = overlay.querySelector(".lightbox-next");

  const items = Array.from(document.querySelectorAll(".lightbox-trigger"));
  let currentIndex = -1;

  const showIndex = (index) => {
    if (!items.length) return;
    currentIndex = (index + items.length) % items.length; // loop both ends
    const el = items[currentIndex];
    const src = el.dataset.src || el.src;
    const alt = el.dataset.alt || el.alt || "";
    const caption = el.dataset.caption || el.alt || "";
    overlayImg.src = src;
    overlayImg.alt = alt;
    if (overlayCaption) overlayCaption.textContent = caption;
  };

  const open = (index) => {
    showIndex(index);
    overlay.classList.add("open");
  };

  const close = () => {
    overlay.classList.remove("open");
    overlayImg.src = "";
    if (overlayCaption) overlayCaption.textContent = "";
    currentIndex = -1;
  };

  const hasMultiple = items.length > 1;
  if (prevBtn) prevBtn.style.display = hasMultiple ? "" : "none";
  if (nextBtn) nextBtn.style.display = hasMultiple ? "" : "none";

  items.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      open(index);
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", () => showIndex(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showIndex(currentIndex + 1));

  closeBtn.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft" && hasMultiple) showIndex(currentIndex - 1);
    if (e.key === "ArrowRight" && hasMultiple) showIndex(currentIndex + 1);
  });
});

// "Un discorso" hint: visible only at the very top of the page, fades
// out as soon as the user scrolls, reappears if they scroll back up
// to the top.
document.addEventListener("DOMContentLoaded", () => {
  const hint = document.querySelector(".discorso-hint");
  if (!hint) return;

  const update = () => {
    hint.classList.toggle("hidden", window.scrollY > 0);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
});
