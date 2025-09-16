export const toggleMenuBar = () => {
  const button = document.querySelector(".menu-toggle") as HTMLElement;
  const navLinks = document.querySelector(".nav-links") as HTMLElement;

  button.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
};


// Navigation control
export function smoothNavigation() {

    document.querySelectorAll<HTMLAnchorElement>(".nav-links a").forEach((link) => {
      link.addEventListener("click", async () => {
        // e.preventDefault(); // stop full reload
    
        const url = link.getAttribute("href");
        if (!url) return;
    
        // Fetch new page
        const res = await fetch(url);
        const text = await res.text();
    
        // Extract <main> content only
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const newContent = doc.querySelector("#content");
    
        if (newContent) {
          document.querySelector("#content")!.innerHTML = newContent.innerHTML;
          history.pushState({}, "", url); // update URL
        }
      });
    });
    // Handle back/forward buttons
    window.addEventListener("popstate", async () => {
      const res = await fetch(location.pathname);
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "text/html");
      const newContent = doc.querySelector("#content");
      if (newContent) {
        document.querySelector("#content")!.innerHTML = newContent.innerHTML;
      }
    });
}

// chat bot
export function loadChatbot() {
  const script = document.createElement("script")
  script.src =
    "https://cdn.jotfor.ms/agent/embedjs/019951a1fd0c7220bdc72d89988f2d1c571a/embed.js";
  script.async = true
  script.defer = true
  document.body.appendChild(script)
}

export async function loadComponent(id: string, file: string) {
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      const el = document.querySelector(id);
      if (el) {
        el.innerHTML = data;
      }
    })
    .catch((error) => console.error("error loading component: " + error));
}



// Filter functionality
export function showCaseFilterFunction() {
  const filterButtons =
    document.querySelectorAll<HTMLButtonElement>(".showcase-btn");
  const projectCards = document.querySelectorAll<HTMLElement>(".showcase-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          const category = card.getAttribute("data-category");
          if (category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });

  // Smooth scrolling
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
}

