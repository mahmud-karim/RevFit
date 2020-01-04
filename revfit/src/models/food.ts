// The User model keeps track of users information.
export class Food {
    FoodId: number; // primary key
    foodName: string; // not null, unique
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    fiber: number;
    constructor(FoodId: number, foodName: string, calories: number, carbs: number, fat: number, protein: number, fiber: number) {
        this.FoodId = FoodId;
        this.foodName = foodName;
        this.calories = calories;
        this.carbs = carbs;
        this.fat = fat;
        this.protein = protein;
        this.fiber = fiber;
    }
}