// The User model keeps track of users information.
export class User {
    userId: number; // primary key
    username: string; // not null, unique
    password: string; // not null
    firstName: string; // not null
    lastName: string; // not null
    weight: number; // not null
    height: number;
    gender: string;
    startingWeight: number;
    goalWeight: number;
    constructor(userId: number, username: string, password: string, firstName: string, lastName: string, weight: number, height: number, gender: string, startingWeight: number, goalWeight: number) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.startingWeight = startingWeight;
        this.goalWeight = goalWeight;
    }
}