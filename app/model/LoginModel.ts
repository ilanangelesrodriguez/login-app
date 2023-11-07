import {Usuario} from "./Usuario.js";

export class LoginModel {
    private validUsername: string = "usuario";
    private validPassword: string = "contrasena";


    isCredentialsValid(username: string, password: string): boolean {
        return username === this.validUsername && password === this.validPassword;
    }
/*
    private users: User[] = [];

    constructor() {
        // Agrega usuarios válidos en el constructor si es necesario.
        this.users.push(new User("usuario", "contrasena", "usuario@example.com"));
        // Agrega más usuarios si es necesario.
    }

    isCredentialsValid(username: string, password: string): boolean {
        const user = this.users.find((user) => user.username === username && user.password === password);
        return !!user; // Devuelve true si se encuentra un usuario válido, de lo contrario, false
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users;
    } */
}