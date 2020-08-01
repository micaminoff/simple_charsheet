export interface hp {
    max: number;
    current: number;
};

export interface abilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};

export interface skills {
    // 0 = not proficient
    // 1 = proficient
    // 2 = expert
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    acrobatics: number;
    animal_handling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleight_of_hand: number;
    stealth: number;
    survival: number;
};

export interface hit_dice {
    max: number;
    dice: string;
    remaining: number;
};

export interface death_saves {
    successes: number;
    failures: number;
};

export interface character {
    name: string;
    level: number;
    race: string;
    dnd_class: string;
    inspiration: number;
    background: string;
    alignment: string;
    xp: number;
    proficiency_bonus: number;
    ac: number;
    speed: number;
    hp: hp;
    abilities: abilities;
    skills: skills;
    hit_dice: hit_dice;
    death_saves: death_saves;
    languages: string[];
    initiative: number;
    features: string[];         // Race & Class
    feats: string[];            // Feats
    equipment: string[];
    inventory: string[];
    atk_bonus: number;
    dmg_bonus: number;
    dmg_die: string;
    age: number;
    size: string;
}