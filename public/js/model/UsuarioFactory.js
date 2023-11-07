import { Cliente } from "./Cliente.js";
import { Administrador } from "./Administrador.js";
export default class UsuarioFactory {
    crearUsuario(tipo) {
        if (tipo === "cliente") {
            return new Cliente();
        }
        else if (tipo === "admin") {
            return new Administrador();
        }
        return null;
    }
}
