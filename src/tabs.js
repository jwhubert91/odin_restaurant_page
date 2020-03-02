// create tab section
const createTabs = () => {
	const tabDivEl = document.createElement("div");
	tabDivEl.setAttribute("id", "tab-container");
	tabDivEl.innerHTML = `
		<span class="section-tab">Info</span>
		<span class="section-tab">Menu</span>
		<span class="section-tab">Contact</span>
	`;
	return tabDivEl;
}

// style tab links
const styleTabLinks = () => {
	const tabNodes = document.querySelectorAll(".section-tab");
	const selectedTabName = document.querySelector(".tab-div").getAttribute('data-name');
	tabNodes.forEach(node => {
		node.classList.remove('active');
		if (node.innerText.toLowerCase().includes(selectedTabName)) {
			node.classList.add('active');
		}
	})
}

// create info tab
const infoTab = () => {
	const infoTabEl = document.createElement("div");
	infoTabEl.classList.add("tab-div");
	infoTabEl.classList.add("info-tab");
	infoTabEl.setAttribute('data-name',"info");
	infoTabEl.innerHTML = `
		<p>
			In una giornata d’inverno, rientrando a casa, mia madre, vedendomi infreddolito, mi propose di prendere,
			contrariamente alla mia abitudine, un po’ di tè. Rifiutai dapprima, e poi, non so perché, mutai d’avviso. Ella mandò a
			prendere uno di quei biscotti pienotti e corti chiamati Petites Madeleines, che paiono aver avuto come stampo la valva
			scanalata d’una conchiglia di San Giacomo.
			<br><br>
			Ed ecco macchinalmente oppresso dalla giornata grigia e dalla previsione d’un triste domani, portai alle labbra un
			cucchiaino di tè, in cui avevo inzuppato un pezzetto di Madeleine. Ma, nel momento stesso che quel sorso misto a
			briciole di biscotto toccò il mio palato, <em>trasalii</em>, attento a quanto avveniva in me di straordinario <em>Un
				piacere delizioso m’aveva invaso</em>, isolato, senza nozione della sua causa. <em>M’aveva subito resi indifferenti
				le vicissitudini della vita</em>, le sue calamità, la sua brevità illusoria, nel modo stesso in cui agisce l’amore,
			colmandomi d’un’essenza preziosa o meglio, <em>quell’essenza non era dentro di me, IO ero quell’essenza</em>.
		</p>
	`;
	return infoTabEl;
}

// create menu tab
const menuTab = () => {
	const menuTabEl = document.createElement("div");
	menuTabEl.classList.add("tab-div");
	menuTabEl.classList.add("menu-tab");
	menuTabEl.setAttribute('data-name', "menu");
	menuTabEl.innerHTML = `
			<p>Pizza - $20</p>
			<p>Pasta - $15</p>
			<p>Sausage n peppas - $12</p>
			<p>Gabagool - $5</p>
			<p>Breadsticks - $5</p>
			<p>Olives - $3</p>
		`;
	return menuTabEl;
}

// create contact tab
const contactTab = () => {
	const contactTabEl = document.createElement("div");
	contactTabEl.classList.add("tab-div");
	contactTabEl.classList.add("contact-tab");
	contactTabEl.setAttribute('data-name', "contact");
	contactTabEl.innerHTML = `
			<p>Chef Boyardee</p>
			<p>123 Fake Street</p>
			<p>Rome, Italy</p>
		`;
	return contactTabEl;
}

export { createTabs, infoTab, menuTab, contactTab, styleTabLinks };