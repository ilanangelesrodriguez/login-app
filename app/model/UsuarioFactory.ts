import {Usuario} from "./Usuario.js";
import {Cliente} from "./Cliente.js";
import {Administrador} from "./Administrador.js";

export class UsuarioFactory {
    crearUsuario(tipo: string): Usuario | null {
        if(tipo === "cliente") {
            return new Cliente();
        } else if (tipo === "admin") {
            return new Administrador();
        }

        return null;
    }
}
