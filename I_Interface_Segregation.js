/* Generally there are no Interfaces in JavaScript , 
Also with the help of Classes ,this principle helps in understanding the Interface Segregation principle
In a large Interface ,  there are a lot of features to be implemented ,
if a class implements the interface it needs to define all the features in interface 
 , if the unknown methods return null also that doesn't solve the problem

 So , we will be dividing the Big class into individual classes which are like smaller interfaces
*/
class Entity {
    constructor(name) {
        this.name = name
    }
}
const mover ={
    move(){
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage}
            damage`)
        targetEntity.takeDamage(this.attackDamage)
        
    }
}

const hasHealth ={
    takeDamage(amount){
        this.health -=amount
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Character extends Entity {
    constructor(name ,attackDamage ,health){
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

//Here we are attaching the respective features to the class

Object.assign(Character.prototype , mover);
Object.assign(Character.prototype , attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
    constructor(name , health){
        super(name)
        this.health = health
    }
}

Object.assign(Wall.prototype , hasHealth);

class Turret extends Entity {
    constructor(name , attackDamage){
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret('Machine Gun' , 5);
const character = new Character('Adam' , 3 , 100)
const wall = new Wall('Wall' , 200)

turret.attack(character);
character.move();
character.attack(wall);
