import {User} from "./User.js";
import {Cliente} from "./Cliente.js";
import {Administrador} from "./Administrador.js";

export class UserFactory {
    static createAdministrador(email: string, username: string, password: string): User {
        return new Administrador(email, username, password);
    }

    static createCliente(email: string, username: string, password: string): User {
        return new Cliente(email, username, password);
    }

}
