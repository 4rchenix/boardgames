for (let entry of Object.entries(checkboxes)) {
    let div = document.createElement("div");
    div.classList.add("dicegroup");
    entry[1].forEach(dice => {
        for(c=1; c < 5; c++){
            for(j=1; j < 7; j++){
                div.innerHTML = div.innerHTML + `
                <div class = "singledice" id="checkbox_${dice}_${c}_${j}">
                    <img src="images/${entry[0]}/${dice}/dice0${c}-${j}.png" alt="Dice" class="diceimg base">
                </div>
                `;
    
            }
        }
    })
    document.getElementById("dices").appendChild(div);
}