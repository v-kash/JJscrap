export const smoothScrollTo = (targetY, duration = 800) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start;

  const easeInOut = (t) =>
    t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startY + diff * easeInOut(percent));

    if (time < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export const handleSmoothNav = (e, href, router) => {
  if (!href.includes("#")) return;

  e.preventDefault();

  const id = href.split("#")[1];

  // If NOT homepage → go there first
  if (window.location.pathname !== "/") {
    router.push(`/#${id}`);
    return;
  }

  const el = document.getElementById(id);

  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    smoothScrollTo(y);
  }
};