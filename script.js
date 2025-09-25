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

// ------------ Projects ------------

const projects = [
	{
		title: "Plant Watering App",
		cover: "#",
		meta: "Vanilla JS, HTML, CSS",
		description: "A reminder to water your plants",
		github: "#",
		demo: "#"
	},
	{
		title: "Cozy Notes App",
		cover: "assets/imgs/Cozy-Notes-App.png",
		meta: "React, CSS, LocalStorage",
		description: "Minimal notes app with a cozy interface and offline storage.",
		github: "https://github.com/Daniela-Padilha/cozy-notes-app",
		demo: "https://cozy-notes-app-one.vercel.app/"
	},
	{
		title: "Bookish Coffee Shop",
		cover: "assets/imgs/Bookish-Coffee-Shop.png",
		meta: "HTML, CSS",
		description: "A cozy book-themed coffee shop where users can browse the menu, customize their order, and interact with a styled form that captures their preferences.",
		github: "https://github.com/Daniela-Padilha/Bookish-Coffee-Shop",
		demo: "https://daniela-padilha.github.io/Bookish-Coffee-Shop/"
	}
];


//Create new html elements
function createBookCard (project) {
	const card = document.createElement("div");
	card.className = "book-card";

	const cover = document.createElement("img");
	cover.className = "book-cover";
	cover.src = project.cover;
	cover.alt = project.title + " cover";
	card.appendChild(cover);

	const title = document.createElement("div");
	title.className = "book-title";
	title.textContent = project.title;
	card.appendChild(title);

	const meta = document.createElement("div");
	meta.className = "book-meta";
	meta.textContent = project.meta;
	card.appendChild(meta);

	card.addEventListener("click", () => {
		showBookDetails(project);
	});

	return card;
};

//Create popup for details
function showBookDetails(project) {
	let popup = document.getElementById("book-popup");
	if (!popup) {
		popup = document.createElement("div");
		popup.id = "book-popup";
		popup.style.position = "fixed";
		popup.style.top = 0;
		popup.style.left = 0;
		popup.style.width = "100vw";
		popup.style.height = "100vh";
		popup.style.background = "rgba(60,40,20,0.28)";
		popup.style.display = "flex";
		popup.style.alignItems = "center";
		popup.style.justifyContent = "center";
		popup.style.zIndex = 1000;
		document.body.appendChild(popup);
	}
	popup.innerHTML = `
		<div style="
			background: #fffbe6;
			padding: 2rem 1.5rem;
			border-radius: 12px;
			max-width: 370px;
			box-shadow: 0 12px 36px rgba(60,40,20,0.16);
			position: relative;
			text-align: center;
		">
			<button id="close-popup" style="
				position: absolute; top: 0.5rem; right: 0.7rem;
				background: none; border: none; color: #795548;
				font-size: 1.7rem; cursor: pointer;
			">&times;</button>
			<img src="${project.cover}" alt="${project.title} cover" style="width: 70%; border-radius: 4px; margin-bottom: 1rem;">
			<h3 style="font-family: Georgia, serif; color: #5e4129;">${project.title}</h3>
			<div style="color: #7b5e46; margin-bottom: 0.8rem">${project.meta}</div>
			<p style="margin-bottom: 1.1rem;">${project.description}</p>
			<a href="${project.github}" target="_blank" style="margin-right: 1.2rem; color: #4e342e; font-weight: bold;">Github</a>
			${project.demo && project.demo !== "#" ? `<a href="${project.demo}" target="_blank" style="color: #795548; font-weight: bold;">Live Demo</a>` : ""}
		</div>
	`;
	popup.onclick = e => {
		if (e.target === popup || e.target.id === "close-popup") {
			popup.remove();
		}
	};
};

//Populate Bookshelf container 
function renderBookshelf() {
	const shelf = document.getElementById("bookshelf");
	shelf.innerHTML = "";
	projects.forEach(project => {
		shelf.appendChild(createBookCard(project));
	});
};

// ------------ Form ------------

//Prevent submission for now
document.getElementById("contact-form").addEventListener("submit", function(event) {
	event.preventDefault();
	alert("Thanks for your message! (Demo only)");
});

// ------------ Init ------------

renderBookshelf();