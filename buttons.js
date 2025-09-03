
function createItemDropdown(targetOrSacrifice) {
    let dropdownElement = document.getElementById(targetOrSacrifice + "-item-selector");
    dropdownElement.innerHTML = "<option value=''>Choose your enchantment</option>";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        dropdownElement.innerHTML +=
            "<option value='" + item.name + "'>" + item.name + "</option>";
    }
}
function createEnchantment(enchantment, enchantmentNumber, targetOrSacrifice) {
    let maxLevel = enchantment["max-level"];
    let tableRowStructure = "";
    tableRowStructure += "<tr><td>" + enchantment.name + "</td>";
    for (let j = 0; j < maxLevel + 1; j++) {
        if (j === 0) {
            tableRowStructure +=
                `<td>
                    <input type='radio'
                        name='${targetOrSacrifice}-group-number-${enchantmentNumber}'
                        id='${targetOrSacrifice}-${enchantmentNumber}.${j}'
                        value='${j}'
                        checked />
                    ${j}
                </td>`;
        } else {
            tableRowStructure +=
                `<td>
                    <input type='radio'
                        name='${targetOrSacrifice}-group-number-${enchantmentNumber}'
                        id='${targetOrSacrifice}-${enchantmentNumber}.${j}'
                        value='${j}'/>
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
            enchantmentsTable.innerHTML += createEnchantment(enchantment, k + 1, targetOrSacrifice);
        }
    }

}


function getSelectedButtons(targetOrSacrifice) {
    let selectedEnchantmentValuesTarget = [];
    let selectedItemName = document.getElementById(targetOrSacrifice + "-item-selector").value;
    let selectedItem = items.find(item => item.name == selectedItemName);
    let amountOfEnchantments = selectedItem.enchantments.length

    for (let l = 0; l < amountOfEnchantments; l++) {
        let valueElements = Array.from(document.getElementsByName(`${targetOrSacrifice}-group-number-${l+1}`));
        
        let checkedValueElement = valueElements.find(function(valueElement){
            return valueElement.checked;
        });
        selectedEnchantmentValuesTarget.push(checkedValueElement.value);
        console.log(selectedEnchantmentValuesTarget);
    }
    
}





createItemDropdown('target');
createItemDropdown('sacrifice');

