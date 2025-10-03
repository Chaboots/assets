const ITEMS = {
    // Helmets
    'basic_helmet': {
        id: 'basic_helmet',
        name: 'Basic Helmet',
        type: 'helmet',
        width: 2,
        height: 2,
        icon: '🪖',
        description: 'Basic protective headgear'
    },
    'tactical_helmet': {
        id: 'tactical_helmet',
        name: 'Tactical Helmet',
        type: 'helmet',
        width: 2,
        height: 2,
        icon: '⛑️',
        description: 'Advanced combat helmet'
    },
    
    // Upper Body
    'vest': {
        id: 'vest',
        name: 'Tactical Vest',
        type: 'upper_body',
        width: 3,
        height: 3,
        icon: '🦺',
        description: 'Light tactical vest'
    },
    'plate_carrier': {
        id: 'plate_carrier',
        name: 'Plate Carrier',
        type: 'upper_body',
        width: 3,
        height: 3,
        icon: '🛡️',
        description: 'Heavy armor with plate inserts'
    },
    
    // Lower Body
    'cargo_pants': {
        id: 'cargo_pants',
        name: 'Cargo Pants',
        type: 'lower_body',
        width: 2,
        height: 3,
        icon: '👖',
        description: 'Pants with extra pockets'
    },
    
    // Boots
    'combat_boots': {
        id: 'combat_boots',
        name: 'Combat Boots',
        type: 'boots',
        width: 2,
        height: 2,
        icon: '🥾',
        description: 'Sturdy military boots'
    },
    
    // Backpacks
    'small_backpack': {
        id: 'small_backpack',
        name: 'Small Backpack',
        type: 'backpack',
        width: 2,
        height: 3,
        gridSize: [4, 4],
        icon: '🎒',
        description: '4x4 storage space'
    },
    'medium_backpack': {
        id: 'medium_backpack',
        name: 'Medium Backpack',
        type: 'backpack',
        width: 2,
        height: 3,
        gridSize: [6, 6],
        icon: '🎒',
        description: '6x6 storage space'
    },
    'large_backpack': {
        id: 'large_backpack',
        name: 'Large Backpack',
        type: 'backpack',
        width: 3,
        height: 4,
        gridSize: [8, 8],
        icon: '🎒',
        description: '8x8 storage space'
    },
        // Weapon items
	'axe': {
		id: 'axe',
		name: 'Axe',
		type: 'tool',
		width: 1,
		height: 3,
		icon: '🪓',
		description: 'Chop trees and gather wood',
		damage: 15,
		durability: 100
	},
	
    // Inventory items
    'medkit': {
        id: 'medkit',
        name: 'Medkit',
        type: 'consumable',
        width: 1,
        height: 1,
        icon: '💊',
        description: 'Restores health',
        stackable: true,
        maxStack: 5
    },
    'water_bottle': {
        id: 'water_bottle',
        name: 'Water Bottle',
        type: 'consumable',
        width: 1,
        height: 2,
        icon: '💧',
        description: 'Restores hydration',
        stackable: true,
        maxStack: 3
    },
    'ammo_box': {
        id: 'ammo_box',
        name: 'Ammo Box',
        type: 'resource',
        width: 2,
        height: 1,
        icon: '📦',
        description: 'Contains ammunition',
        stackable: true,
        maxStack: 10
    }
};
