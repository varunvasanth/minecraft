
let selectedEnchantmentValuestarget = [];
let selectedEnchantmentValuessacrifice = [];
let selectedItemsacrifice;
let selectedItemtarget;

function createItemDropdown(targetOrSacrifice, currentSelectedItem) {
    let dropdownElement = document.getElementById(targetOrSacrifice + "-item-selector");
    dropdownElement.innerHTML = "";
    let set = true;
    let refresh = false;
    if (currentSelectedItem) {
        if (selectedItemsacrifice === undefined) {
            dropdownElement.innerHTML += "<option value=''>Choose your enchantment</option>";
            console.log('choose enchan')
            set = false;
        }
        if (currentSelectedItem != "Book" && selectedItemsacrifice != "Book") {
            console.log("itsnt books")
            dropdownElement.innerHTML +=
                `<option value='${currentSelectedItem}'>${currentSelectedItem}</option>`
            dropdownElement.innerHTML +=
                `<option value='Book'>Book</option>`
            refresh = true;
        }else if (currentSelectedItem === "Book" && selectedItemsacrifice != "Book") {
            console.log("its books")
            dropdownElement.innerHTML +=
                `<option value='Book'>Book</option>`
            refresh = true;
        }else if(currentSelectedItem != "Book" && selectedItemsacrifice === "Book"){
            dropdownElement.innerHTML +=
                `<option value='${currentSelectedItem}'>${currentSelectedItem}</option>`
            dropdownElement.innerHTML +=
                `<option value='Book' selected=true>Book</option>`
        }else if(currentSelectedItem === "Book" && selectedItemsacrifice === "Book"){
            dropdownElement.innerHTML +=
                `<option value='Book'>Book</option>`
        }
        if(selectedItemsacrifice === currentSelectedItem){
            refresh = false;
        }
        if(refresh && set){
            onItemSelected(currentSelectedItem, "sacrifice")
        }
    } else {
        dropdownElement.innerHTML += "<option value=''>Choose your enchantment</option>";
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            dropdownElement.innerHTML +=
                `<option value='${item.name}'>${item.name}</option>`;
        }
        
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
                    <label for='${targetOrSacrifice}-${enchantmentNumber}.${j}'>${j}</label>
                </td>`;
        } else {
            tableRowStructure +=
                `<td>
                    <input type='radio'
                        name='${targetOrSacrifice}-group-number-${enchantmentNumber}'
                        id='${targetOrSacrifice}-${enchantmentNumber}.${j}'
                        value='${j}'/>
                    <label for='${targetOrSacrifice}-${enchantmentNumber}.${j}'>${j}</label>
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
    if (targetOrSacrifice === "target") {
        selectedItemtarget = itemName;
        createItemDropdown("sacrifice", itemName);
    } else {
       selectedItemsacrifice = itemName;
    }
    if (selectedItem) {
        for (let k = 0; k < selectedItem.enchantments.length; k++) {
            let enchantment = selectedItem.enchantments[k];
            enchantmentsTable.innerHTML += createEnchantment(enchantment, k + 1, targetOrSacrifice);
        }
    }

}

function onSubmit() {
    getSelectedButtons("target")
    getSelectedButtons("sacrifice")
    calucate();
}

function getSelectedButtons(targetOrSacrifice) {
    let selectedItemName = document.getElementById(targetOrSacrifice + "-item-selector").value;
    let selectedItem = items.find(item => item.name == selectedItemName);
    if (selectedItem != undefined) {
        let amountOfEnchantments = selectedItem.enchantments.length;
        eval("selectedEnchantmentValues" + targetOrSacrifice + "=[];")
        let selectedEnchantmentValues = eval("selectedEnchantmentValues" + targetOrSacrifice);
        for (let l = 0; l < amountOfEnchantments; l++) {
            let valueElements = Array.from(document.getElementsByName(`${targetOrSacrifice}-group-number-${l + 1}`));

            let checkedValueElement = valueElements.find(function (valueElement) {
                return valueElement.checked;
            });
            console.log(l);
            console.log(selectedItem.enchantments[l]);
            selectedEnchantmentValues.push(checkedValueElement.value + "." + selectedItem.enchantments[l].name + "." + selectedItem.enchantments[l]["max-level"]);
            console.log(selectedEnchantmentValues);
        }
    }
}
createItemDropdown('target');
createItemDropdown('sacrifice');