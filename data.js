let items = [
     {
        "name": "Axe",
        "enchantments": [
            {
                "name": "Bane of Athropods",
                "max-level": 5
            },
            {
                "name": "Curse of Vanishing",
                "max-level": 1
            },
            {
                "name": "Efficiency",
                "max-level": 5
            },
            {
                "name": "Fortune",
                "max-level": 3
            },
            {
                "name": "Mending",
                "max-level": 1
            },
            {
                "name": "Sharpness",
                "max-level": 5
            },
            {
                "name": "Silk Touch",
                "max-level": 1
            },  
            {
                "name": "Smite",
                "max-level": 5
            },
            {
                "name": "Unbreaking",
                "max-level": 3
            },
        ]
    },
    {
        "name": "Book",
        "enchantments": [
            {
                "name": "Aqua Affinity",
                "max-level": 1
            },
            {
                "name": "Bane of Athropods",
                "max-level": 5
            },
            {
                "name": "Blast Protection",
                "max-level": 4
            },
            {
                "name": "Breach",
                "max-level": 4
            },
            {
                "name": "Channeling",
                "max-level": 1
            },
            {
                "name": "Curse of Binding",
                "max-level": 1
            },
            {
                "name": "Curse of Vanishing",
                "max-level": 1
            },
            {
                "name": "Depth Strider",
                "max-level": 3
            },
            {
                "name": "Density",
                "max-level": 5
            },
            {
                "name": "Efficiency",
                "max-level": 5
            },
            {
                "name": "Feather Falling",
                "max-level": 4 
            },
            {
                "name": "Fire Aspect",
                "max-level": 2
            },
            {
                "name": "Fire Protection",
                "max-level": 4 
            },
            {
                "name": "Flame",
                "max-level": 1
            },
            {
                "name": "Fortune",
                "max-level": 3
            },
            {
                "name": "Frost Walker",
                "max-level": 2
            },
            {
                "name": "Impaling",
                "max-level": 5
            },
            {
                "name": "Infinity",
                "max-level": 1
            },
            {
                "name": "Knockback",
                "max-level": 2
            },
            {
                "name": "Looting",
                "max-level": 3
            },
            {
                "name": "Loyalty",
                "max-level": 3
            },
            {
                "name": "Luck of the Sea",
                "max-level": 3
            },
            {
                "name": "Lure",
                "max-level": 3 
            },
            {
                "name": "Mending",
                "max-level": 1
            },
            {
                "name": "Multishot",
                "max-level": 1
            },
            {
                "name": "Piercing",
                "max-level": 4
            },
            {
                "name": "Power",
                "max-level": 5 
            },
            {
                "name": "Projectile Protection",
                "max-level": 4
            },
            {
                "name": "Protection",
                "max-level": 4
            },
            {
                "name": "Punch",
                "max-level": 2
            },
            {
                "name": "Quick Charge",
                "max-level": 3
            },
            {
                "name": "Respiration",
                "max-level": 3
            },
            {
                "name": "Riptide",
                "max-level": 3
            },
            {
                "name": "Sharpness",
                "max-level": 5
            },
            {
                "name": "Silk Touch",
                "max-level": 1
            },  
            {
                "name": "Smite",
                "max-level": 5
            },
            {
                "name": "Soul Speed",
                "max-level": 3
            },
            {
                "name": "Swift Sneak",
                "max-level": 3
            },
            {
                "name": "Thorns",
                "max-level": 3
            },
            {
                "name": "Unbreaking",
                "max-level": 3
            },
            {
                "name": "Wind Burst",
                "max-level": 3
            }
        ]
    },
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
                "name": "Luck of the Sea",
                "max-level": 3
            },
            {
                "name": "Lure",
                "max-level": 3
            },
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