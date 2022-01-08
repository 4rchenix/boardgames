
const checkboxes = [
	"bloodborne"
]

for(i=0; i < checkboxes.length; i++){
	div = document.getElementById("checkboxes");
	div.innerHTML = div.innerHTML + `
	<label class="toggle" for="${checkboxes[i]}">
		<input type="checkbox" class="toggle__input" id="${checkboxes[i]}" />
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
		${checkboxes[i]}
	</label>
`;
}
