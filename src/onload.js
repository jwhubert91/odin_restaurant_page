// create hero section
const onLoadHero = () => {
	const heroEl = document.createElement("div");
	heroEl.setAttribute("id", "hero-container");
	heroEl.innerHTML = `
		<img src="/fabrizio-magoni-boaDpmC-_Xo-unsplash.jpg" alt="guy cooking" class="hero-image">
		<div class="hero-centered-text-div"><span class="hero-centered-text">Fancy Pizzapasta</span></div>
	`;
	return heroEl;
}

export default onLoadHero;