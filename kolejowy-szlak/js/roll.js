function roll() {
	document.getElementById("lower").style.display = "block";
	document.getElementById("reroll").style.display = "inline-block";
	//Clear the board
	//Fetch all dice sets based on constant in file checkboxes.js
	for (let entry of Object.entries(checkboxes)) {
		entry[1].forEach(dice => {
			for (c = 1; c < 5; c++) {
				for (j = 1; j < 7; j++) {
					document.getElementById("checkbox_" + dice + "_" + c + "_" + j).style.display = "none";
				}
			}
		})

	}

	//Fetch all dice sets based on constant in file checkboxes.js
	for (let entry of Object.entries(checkboxes)) {
		entry[1].forEach(dice => {
			if (document.getElementById(dice).checked) {
				for (j = 1; j < 5; j++) {
					diceRand = Math.floor(Math.random() * 6) + 1;
					document.getElementById("checkbox_" + dice + "_" + j + "_" + diceRand).style.display = "block";
				}
			}
		})
	}
}
