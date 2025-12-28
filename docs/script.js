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
