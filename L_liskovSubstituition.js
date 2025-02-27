/*
Liskov Substituiton states that , all the child classes 
which are inherited from the parent class , should work same as if
parent is implementing the task
*/

/*But this continious seperation of classes and implementing inheritence 
would make the code less readable ,so we can compose different  features for a single
class
*/

class FlyingBird{
    fly(){
        console.log('I can Fly');
    }
}

class SwimmingBird {
 swim(){
    console.log('I can swim');

 }
}

class Duck extends FlyingBird{
    quack(){
        console.log('I can quack');
    }
}

class penguin extends SwimmingBird{

}

function makeFlyingBirdFly(bird) {
    bird.fly();
}

function makeSwimmingBirdSwim(bird) {
    bird.swim();
}

const duck = new Duck();
const penguin1 = new penguin();


