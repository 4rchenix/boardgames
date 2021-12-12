		function roll() {

			for (i = 1; i < 5; i++) {
				for (j = 1; j < 7; j++) {
					document.getElementById("b" + i + "" + j).style.display = "none";
					document.getElementById("a" + i + "" + j).style.display = "none";
					document.getElementById("br" + i + "" + j).style.display = "none";
					document.getElementById("db" + i + "" + j).style.display = "none";
					document.getElementById("e" + i + "" + j).style.display = "none";
					document.getElementById("ec" + i + "" + j).style.display = "none";
					document.getElementById("eg" + i + "" + j).style.display = "none";
					document.getElementById("fu" + i + "" + j).style.display = "none";
					document.getElementById("lg" + i + "" + j).style.display = "none";
					document.getElementById("sy" + i + "" + j).style.display = "none";
					document.getElementById("sk" + i + "" + j).style.display = "none";
					document.getElementById("un" + i + "" + j).style.display = "none";
				}
			}

			var base = document.getElementById("base").checked;
			var arcade = document.getElementById("arcade").checked;
			var blazing_red = document.getElementById("blazing-red").checked;
			var deep_blue = document.getElementById("deep-blue").checked;
			var eldritch = document.getElementById("eldritch").checked;
			var electricity = document.getElementById("electricity").checked;
			var engineer = document.getElementById("engineer").checked;
			var futuristic = document.getElementById("futuristic").checked;
			var lush_green = document.getElementById("lush-green").checked;
			var shining_yellow = document.getElementById("shining-yellow").checked;
			var sky = document.getElementById("sky").checked;
			var underground = document.getElementById("underground").checked;

			if (base == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) + 1;
					document.getElementById("b" + i + "" + dice).style.display = "block";
				}
			}

			if (arcade == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) + 1;
					document.getElementById("a" + i + "" + dice).style.display = "block";
				}
			}
			if (blazing_red == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) + 1;
					document.getElementById("br" + i + "" + dice).style.display = "block";
				}
			}
			if (deep_blue == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("db" + i + "" + dice).style.display = "block";
				}
			}
			if (eldritch == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("e" + i + "" + dice).style.display = "block";
				}
			}
			if (electricity == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("ec" + i + "" + dice).style.display = "block";
				}
			}
			if (engineer == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("eg" + i + "" + dice).style.display = "block";
				}
			}
			if (futuristic == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("fu" + i + "" + dice).style.display = "block";
				}
			}
			if (lush_green == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("lg" + i + "" + dice).style.display = "block";
				}
			}
			if (shining_yellow == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("sy" + i + "" + dice).style.display = "block";
				}
			}
			if (sky == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("sk" + i + "" + dice).style.display = "block";
				}
			}
			if (underground == true) {
				for (i = 1; i < 5; i++) {
					dice = Math.floor(Math.random() * 6) +1;
					document.getElementById("un" + i + "" + dice).style.display = "block";
				}
			}
		}
