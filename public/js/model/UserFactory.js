import { Cliente } from "./Cliente.js";
import { Administrador } from "./Administrador.js";
export class UserFactory {
    static createAdministrador(email, username, password) {
        return new Administrador(email, username, password);
    }
    static createCliente(email, username, password) {
        return new Cliente(email, username, password);
    }
}
