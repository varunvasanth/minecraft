let enchantmentsDiv = document.getElementById("enchantments");
let dropdownElement = document.getElementById("target-item-selector");



dropdownElement.innerHTML = "<option value=''>Choose your enchantment</option>";

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    dropdownElement.innerHTML +=
        "<option value='" + item.name + "'>" + item.name + "</option>";
}

function createEnchantment(enchantment, enchantmentNumber) {
    let maxLevel = enchantment["max-level"];
    enchantmentsDiv.innerHTML += enchantment.name;
    for (let j = 0; j < maxLevel; j++) {

        enchantmentsDiv.innerHTML +=
            `<input type='radio' name='group-number-${enchantmentNumber}' id='1.${j}' value='${enchantmentNumber}.${j + 1}'/>${j}`;
    }
    enchantmentsDiv.innerHTML += "<br/>"
}




function onItemSelected(itemName) {

    let selectedItem = items.find(item => item.name == itemName);
    enchantmentsDiv.innerHTML = "";

    if (selectedItem) {
        for (let k = 0; k < selectedItem.enchantments.length; k++) {
            let enchantment = selectedItem.enchantments[k];
            createEnchantment(enchantment, k);
        }
    }

}



