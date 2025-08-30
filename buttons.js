for (let i = 0; i < items.length; i++) {
    let item = items[i];
    document.getElementById("target-item-selector").innerHTML +=
        "<option>" + item.name + "</option>";
}