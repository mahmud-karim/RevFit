// The User model keeps track of users information.
export class User {
    userId: number; // primary key
    username: string; // not null, unique
    password: string; // not null
    firstName: string; // not null
    lastName: string; // not null
    email: string; // not null
    constructor(userId: number, username: string, password: string, firstName: string, lastName: string, email: string) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}