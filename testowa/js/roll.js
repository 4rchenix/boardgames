		function roll() {
			document.getElementById("lower").style.display = "block";
			document.getElementById("reroll").style.display = "inline-block";
			//Clear the board
			//Fetch all dice sets based on constant in file checkboxes.js
			for(i=0; i < checkboxes.length; i++){
				for(c=1; c < 5; c++){
					for (j = 1; j < 7; j++) {
						document.getElementById("checkbox_" + checkboxes[i] + "_" + c +"_" + j).style.display = "none";
					}
				}
				
			}

			//Fetch all dice sets based on constant in file checkboxes.js
			for(i=0; i < checkboxes.length; i++){
				if (document.getElementById(checkboxes[i]).checked){
					for (j = 1; j < 5; j++) {
						dice = Math.floor(Math.random() * 6) + 1;
						console.log("checkbox_" + checkboxes[i] + "_" + j +"_" + dice);
						document.getElementById("checkbox_" + checkboxes[i] + "_" + j +"_" + dice).style.display = "block";
					}
				}
			}
		}
