// import statements
import onLoadHero from './onload.js';
import { createTabs, infoTab, menuTab, contactTab, styleTabLinks } from './tabs.js';

// selectors
const contentEl = document.querySelector("#content");

// on load functions
contentEl.append(onLoadHero());
contentEl.append(createTabs());
contentEl.append(infoTab());

styleTabLinks();

// switch tabs functionality
contentEl.addEventListener('click', (e) => {
	e.preventDefault();
	if (!e.target.classList.contains('active')) {
		if (e.target.classList.contains('section-tab')) {
			// 1 - remove all content
			const currentTab = document.querySelector('.tab-div');
			e.target.parentElement.parentElement.removeChild(currentTab);
			// 2 - activate new tab
			if (e.target.innerText === "Info") {
				contentEl.append(infoTab());
			}
			if (e.target.innerText === "Menu") {
				contentEl.append(menuTab());
			}
			if (e.target.innerText === "Contact") {
				contentEl.append(contactTab());
			}
		}
		styleTabLinks();
	}
});