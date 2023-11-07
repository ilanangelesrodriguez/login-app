import { UserFactory } from "./UserFactory.js";
export class LoginModel {
    users = [];
    constructor() {
        this.users.push(UserFactory.createAdministrador("admin@example.com", "admin1", "admin"));
        this.users.push(UserFactory.createCliente("client@example.com", "client1", "client"));
        console.log(UserFactory.createAdministrador("admin@example.com", "admin1", "admin"));
    }
    isCredentialsValid(username, password) {
        const user = this.users.find((user) => user.username === username && user.password === password);
        return !!user;
    }
    addUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
}
