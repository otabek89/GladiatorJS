function Arena(name, gladiators) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
    this.addGladiator = function(gladiator) {
        this.gladiators.push(gladiator);
    }
}

// 1. An arena has a name
var colosseum = new Arena("megalopolis")
console.log(colosseum.name) // => Megalopolis

// 2. The name should be capitalized
var colosseum = new Arena("megalopolis")
console.log(colosseum.name) // => Megalopolis

// 3. An arena can have gladiators
var colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators) // => []

// 4. You can add a gladiator to the arena
var max = new Gladiator("Maximus", "Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator]

// 5. The arena should never have more than 2 gladiators in it at a time
var max = new Gladiator("Maximus", "Trident")
var titus = new Gladiator("Titus", "Spear")
var andronicus = new Gladiator("Andronicus", "Club")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length) 

// 6. If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.
var max = new Gladiator("Maximus", "Trident")
var titus = new Gladiator("Titus", "Spear")
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.entertained();
colosseum.fight()
console.log(colosseum.gladiators) // => [max]