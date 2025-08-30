let items = [
    {
        "name": "Shield",
        "enchantments": [
            {
                "name": "Mending",
                "max-level": 1
            },
            {
                "name": "Unbreaking",
                "max-level": 3
            },
            {
                "name": "Curse of Vanishing",
                "max-level": 1
            }
        ]
    },
    {
        "name": "Fishing rod",
        "enchantments": [
            {
                "name": "Mending",
                "max-level": 1
            },
            {
                "name": "Unbreaking",
                "max-level": 3
            },
            {
                "name": "Curse of Vanishing",
                "max-level": 1
            }
        ]
    }
];


for (let i = 0; i < items.length; i++) {
    console.log(items[i].name);
    let enchantments = items[i].enchantments;
    for (let j = 0; j < enchantments.length; j++) {
        console.log(enchantments[j].name);
        console.log(enchantments[j]["max-level"])
    }
}