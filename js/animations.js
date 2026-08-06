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
// Stays visible while near the top of the page.
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  let lastY = window.scrollY;
  const hideAfter = 80; // px scrolled before the nav is allowed to hide

  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y < hideAfter) {
      nav.classList.remove("nav-hidden");
    } else if (y > lastY) {
      nav.classList.add("nav-hidden"); // scrolling down
    } else {
      nav.classList.remove("nav-hidden"); // scrolling up
    }

    lastY = y;
  }, { passive: true });
});
