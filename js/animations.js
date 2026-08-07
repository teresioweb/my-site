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

// Gallery lightbox: click any image inside .gallery-grid to see it
// enlarged in an overlay. Closes on the X, on clicking outside the
// image, or on Escape.
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".lightbox-overlay");
  const gallery = document.querySelector(".gallery-grid");
  if (!overlay || !gallery) return;

  const overlayImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".lightbox-close");

  const open = (src, alt) => {
    overlayImg.src = src;
    overlayImg.alt = alt || "";
    overlay.classList.add("open");
  };

  const close = () => {
    overlay.classList.remove("open");
    overlayImg.src = "";
  };

  gallery.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => open(img.src, img.alt));
  });

  closeBtn.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
