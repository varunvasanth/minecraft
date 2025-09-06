

function calucate(){
    let enchantmentCosts = 0;
    console.log(selectedEnchantmentValuessacrifice.length);
    for(let i = 0; i < selectedEnchantmentValuessacrifice.length; i++){
        let targetLevel = parseInt(selectedEnchantmentValuestarget[i]);
        let sacrificeLevel = parseInt(selectedEnchantmentValuessacrifice[i]);
        console.log("hiii");
        for(let j = 0; j < multipliers.length; j++){
            if(selectedEnchantmentValuessacrifice[i].slice(2,-2) === multipliers[j].name){
                let finalLevel = findFinalLevel(targetLevel, sacrificeLevel, i);
                console.log("its trueee");
                console.log(finalLevel - targetLevel)
                enchantmentCosts += (multipliers[j].multiplier * 
                    (finalLevel - targetLevel))
            }
            console.log(enchantmentCosts);
        }
    }

    document.getElementById("display").innerText = enchantmentCosts;

}

function findFinalLevel(target, sacrifice, enchantmentNumber){
    console.log( parseInt(selectedEnchantmentValuestarget[enchantmentNumber].slice(-1))>target);
    if(target === sacrifice && parseInt(selectedEnchantmentValuestarget[enchantmentNumber].slice(-1))>target && target != 0){    
        return (target+1);
    } else {
        return Math.max(target, sacrifice);
    }
}









console.log();