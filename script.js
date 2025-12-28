// ------------ Mobile Menu ------------

const menuToggle = document.getElementById("menu-toggle") ;
const navList = document.querySelector("nav ul");

//Open menu when button is clicked
menuToggle.addEventListener("click", () => {
	navList.classList.toggle("open");
});

//Close menu when link is clicked
navList.querySelectorAll("a").forEach(link => {
	link.addEventListener("click", () => {
		navList.classList.remove("open");
	})
});

// ------------ Skill bars load ------------

const skillLevels = document.querySelectorAll('.levels');

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;
        const bars = entry.target.children;

        for (let i = 0; i < level; i++) {
          bars[i].classList.add('active');
        }

        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillLevels.forEach(level => skillObserver.observe(level));

// ------------ Project cards load ------------

const cards = document.querySelectorAll('.project-card, .other-project-card');

const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => cardObserver.observe(card));

// ------------ Copy email ------------

const emailLink = document.getElementById("email-link");
const feedback = document.getElementById("copy-feedback");
const email = "danielasofiapadilha@gmail.com";

emailLink.addEventListener("click", (e) => {
  // On normal click: open mail client
  // On Ctrl/Cmd + click or mobile, mailto still works

  if (!e.metaKey && !e.ctrlKey) {
    e.preventDefault(); // prevent opening mail client
    navigator.clipboard.writeText(email)
      .then(() => {
        feedback.textContent = "Email copied!";
        setTimeout(() => feedback.textContent = "", 2000);
      })
      .catch(() => {
        feedback.textContent = "Failed to copy, please copy manually.";
      });
  }
});

