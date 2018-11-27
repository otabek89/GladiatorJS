function Gladiator (name, weapon) {
    this.name = name;
    this.weapon = weapon;
};
if (weapon === "Spear" || weapon === "Trident" || weapon === "Club") 
{ this.weapon = weapon } 
else { throw "Invalid Weapon" }
this.name = name;
}


//1.
var max = new Gladiator("Maximus", "Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
