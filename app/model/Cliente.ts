import {Usuario} from "./Usuario.js";
import {Estado} from "./Estado.js";

export class Cliente implements Estado {
    activar(usuario: Usuario) {
        console.log(`${usuario.nombre} (Cliente) ha sido activado.`);
    }

    bloquear(usuario: Usuario) {
        console.log(`${usuario.nombre} (Cliente) ha sido bloqueado.`);
    }
}