import {User} from "./User.js";
import {UserFactory} from "./UserFactory.js";

export class LoginModel {

    private users: User[] = [];

    constructor() {
        this.users.push(UserFactory.createAdministrador("admin@example.com","admin1", "admin"));
        this.users.push(UserFactory.createCliente("client@example.com","client1", "client"));

        console.log(UserFactory.createAdministrador("admin@example.com","admin1", "admin"))
    }

    isCredentialsValid(username: string, password: string): boolean {
        const user = this.users.find((user) => user.username === username && user.password === password);
        return !!user;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users;
    }
}