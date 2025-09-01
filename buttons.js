
function createItemDropdown(targetOrSacrifice) {
    let dropdownElement = document.getElementById(targetOrSacrifice + "-item-selector");
    dropdownElement.innerHTML = "<option value=''>Choose your enchantment</option>";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        dropdownElement.innerHTML +=
            "<option value='" + item.name + "'>" + item.name + "</option>";
    }
}
function createEnchantment(enchantment, enchantmentNumber) {
    let maxLevel = enchantment["max-level"];
    let tableRowStructure = "";
    tableRowStructure += "<tr><td>" + enchantment.name + "</td>";
    for (let j = 0; j < maxLevel + 1; j++) {
        if (j === 0) {
            tableRowStructure +=
                `<td>
                    <input type='radio'
                        name='group-number-${enchantmentNumber}'
                        id='1.${j}'
                        value='${enchantmentNumber}.${j}'
                        checked />
                    ${j}
                </td>`;
        } else {
            tableRowStructure +=
                `<td>
                    <input type='radio'
                        name='group-number-${enchantmentNumber}'
                        id='1.${j}'
                        value='${enchantmentNumber}.${j}'/>
                    ${j}
                </td>`;
        }
    }
    tableRowStructure += "</tr>";
    return tableRowStructure;
}




function onItemSelected(itemName, targetOrSacrifice) {
    let enchantmentsTable = document.getElementById(targetOrSacrifice + "-table");
    let selectedItem = items.find(item => item.name == itemName);
    enchantmentsTable.innerHTML = "";

    if (selectedItem) {
        for (let k = 0; k < selectedItem.enchantments.length; k++) {
            let enchantment = selectedItem.enchantments[k];
            enchantmentsTable.innerHTML += createEnchantment(enchantment, k + 1);
        }
    }

}


function getSelectedButtons(targetOrSacrifice){
    let selectedItemName = document.getElementById(targetOrSacrifice + "-item-selector").value;
    let selectedItem = items.find(item => item.name == selectedItemName);
    let amountOfEnchantmens = selectedItem.enchantments.length
    
    for(let l = 0; l < amountOfEnchantmens; l++){
        console.log("cats are kinda cute, but dogs are better")
    }

}





createItemDropdown('target');
createItemDropdown('sacrifice');

