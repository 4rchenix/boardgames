<<<<<<< HEAD
const checkboxes = {
	"base": ["base"],
	"arcade": ["galactic-invaders", "pluck-man", "rainbow", "tetromino"],
	"blazing-red": ["lava", "meteor"],
	"deep-blue": ["lake", "river"],
	"eldritch": ["investigation", "portal", "ritual", "tentacles"],
=======

const checkboxes = {
	'base': ['base'],
	"arcade": ["galactic-invaders",
		"pluck-man",
		"rainbow",
		"tetromino",
	],
	"blazing-red": ["lava", "meteor"],
	"deep-blue": ["lake", "river"],
	"eldritch": ["investigation",
		"portal",
		"ritual",
		"tentacles",
	],
>>>>>>> 898d94caf0420d6408ff6c25a3511c34c5475c88
	"electricity": ["power-grid", "street-lamps"],
	"engineer": ["construction", "renovation", "separation", "special"],
	"futuristic": ["alien-farmer", "city-builder", "superconnection"],
	"lush-green": ["forest", "trails"],
	"shining-yellow": ["canyon", "desert"],
	"sky": ["airport", "weather"],
	"underground": ["underground"],
}
for (var entry of Object.entries(checkboxes)) {
	div = document.getElementById("checkboxes");
	div.innerHTML = div.innerHTML + `
		<div>
			<h3 class="toggle-title">${entry[0]}</h3>
			${dice(entry[1])}
		</div>	
	`
}

function dice(dices) {
	return dices.map(dice => (`<label class="toggle" for="${dice}">
	<input type="checkbox" class="toggle__input" id="${dice}" />
	<span class="toggle-track">
		<span class="toggle-indicator">
			<!-- 	This check mark is optional	 -->
			<span class="checkMark">
				<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
					<path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
				</svg>
			</span>
		</span>
	</span>
	${dice}
</label>`)).join('')
}
