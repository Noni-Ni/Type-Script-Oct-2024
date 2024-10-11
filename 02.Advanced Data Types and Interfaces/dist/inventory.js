function inventory(data) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
        printHero() {
            return `Hero: ${this.name}` + "\n" + `level => ${this.level}` + "\n" + `items => ${this.items.join(', ')}`;
        }
    }
    let result = [];
    data.map(str => {
        let [name, level, items] = str.split('/');
        let hero = new Hero(name, Number(level), items.split(', '));
        result.push(hero);
    });
    return result.reverse().map(el => el.printHero()).join('\n');
}
console.log(inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log(inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]));
//# sourceMappingURL=inventory.js.map