// Smooth scrolling
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.href)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});



// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target as HTMLElement
      target.style.animation = "fadeInUp 0.8s ease-out forwards";
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll<HTMLElement>(".stat-card, .feature-card").forEach((card) => {
  observer.observe(card);


});

// Add some interactive hover effects
document.querySelectorAll<HTMLElement>(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});
