// APEX EDITZ — main website script

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navlinks");

  // Mobile menu
  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("show"));
  }

  // Only one video plays at a time
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(other => {
        if (other !== video) {
          other.pause();
        }
      });
    });
  });

  // Active navigation
  const current =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navlinks a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
