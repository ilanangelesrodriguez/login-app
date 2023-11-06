import {Usuario} from "./Usuario.js";
import {Estado} from "./Estado.js";

export class Administrador implements Estado {
    activar(usuario: Usuario) {
        console.log(`${usuario.nombre} (Administrador) ha sido activado.`);
    }

    bloquear(usuario: Usuario) {
        console.log(`${usuario.nombre} (Administrador) ha sido bloqueado.`);
    }
}