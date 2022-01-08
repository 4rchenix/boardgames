
for(i=0; i < checkboxes.length; i++){
    var div = document.createElement("div");
    div.classList.add("dicegroup");
    for(c=1; c < 5; c++){
        for(j=1; j < 7; j++){
            div.innerHTML = div.innerHTML + `
            <div class = "singledice" id="checkbox_${checkboxes[i]}_${c}_${j}">
                <img src="images/${checkboxes[i]}/dice0${c}-${j}.png" alt="Dice" class="diceimg base">
            </div>
            `;

        }
    }
    document.getElementById("dices").appendChild(div);
}