import logMessage from "./logger.js";


/* Here The CalorieTracker Class has Two Responsibilities
1.To track the calories
2.To log the surplus
But the class should have a single responsibility to be able to modify


*/

class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories =0;
        this.exceededCalories = 0;
    }
    trackCalories(calorieCount){
        this.currentCalories+=calorieCount;
        if(this.currentCalories> this.maxCalories){
            this.exceededCalories=this.currentCalories-this.maxCalories;

            logMessage('max calories Exceeded' , this.exceededCalories)
        }
    }

    // logCalorieSurplus(){
    //     console.log('max calories exceeded')
    // }
}

const tracker = new CalorieTracker(2000);

tracker.trackCalories(3000);
