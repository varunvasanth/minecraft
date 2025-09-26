

function calucate() {
    let targetLevel;
    let selectedTarget;
    let enchantmentCosts = 0;
    let multiplierFrom;
    console.log(selectedEnchantmentValuessacrifice.length);
    if(selectedItemsacrifice != "Book"){
        multiplierFrom = "Item"
    } else{
        multiplierFrom = "Book"
    }
    for (let i = 0; i < selectedEnchantmentValuessacrifice.length; i++) {
        let selectedEnchantmentNamesacrifice = selectedEnchantmentValuessacrifice[i].slice(2, -2)
        let sacrificeLevel = parseInt(selectedEnchantmentValuessacrifice[i]);
        let index = findInArray(selectedEnchantmentValuestarget, selectedEnchantmentNamesacrifice, 2, -2);
        if(index === -1){
            continue;
        }
        targetLevel = parseInt(selectedEnchantmentValuestarget[index]);
        selectedTarget = selectedEnchantmentValuestarget[index];
        if (sacrificeLevel === 0 && (targetLevel === 0 || targetLevel === undefined)) {
            continue;
        }

        for (let j = 0; j < multipliers.length; j++) {
            if (selectedEnchantmentValuessacrifice[i].slice(2, -2) === multipliers[j].name) {
                console.log(targetLevel)
                let finalLevel = findFinalLevel(targetLevel, sacrificeLevel, selectedTarget);
                console.log("found the multiplyer for the sac");
                console.log(finalLevel - targetLevel)

                enchantmentCosts += eval("(multipliers[j].multiplierFrom" + multiplierFrom + " * (finalLevel - targetLevel))");
                //enchantmentCosts += priorWorkPenaltyTarget + priorWorkPenaltySacrifice;
                console.log(enchantmentCosts);
            }
        }

        targetLevel = 0;
    }
    console.log(priorWorkPenaltySacrifice)
    console.log(priorWorkPenaltyTarget)
    enchantmentCosts += priorWorkPenaltyTarget + priorWorkPenaltySacrifice;
    console.log(enchantmentCosts);
    document.getElementById("display").innerText = "Combining these 2 items costs " + enchantmentCosts + " levels.";

}

function findInArray(array, item, slice1, slice2) {
    for (let i = 0; i < array.length; i++) {
            if (array[i].slice(slice1, slice2) === item) {
                return i;
            } 
    }
    console.log(`breaking bc ${item} dont exist in target`)
    return -1;
}

function findFinalLevel(target, sacrifice, currentSelectedTarget) {
    console.log(parseInt(currentSelectedTarget.slice(-1)) > target);
    console.log(parseInt(currentSelectedTarget.slice(-1)))
    console.log(typeof currentSelectedTarget.slice(-1))
    console.log(currentSelectedTarget.slice(-1))
    console.log(target)
    console.log(target === sacrifice && parseInt(currentSelectedTarget.slice(-1)) > target && target != 0)
    if (target === sacrifice && parseInt(currentSelectedTarget.slice(-1)) > target && target != 0) {
        return (target + 1);
    } else {
        return Math.max(target, sacrifice);
    }
}









console.log();