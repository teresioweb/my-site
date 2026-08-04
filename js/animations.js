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
