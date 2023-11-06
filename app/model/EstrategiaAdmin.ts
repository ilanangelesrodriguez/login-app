// @ts-ignore
import {Usuario} from "./Usuario.js";
import {Administrador} from "./Administrador.js";
import {Estrategia} from "./Estrategia.js";

export class EstrategiaAdmin implements Estrategia {
    activar(usuario: Usuario) {
    }

    bloquear(usuario: Usuario) {
    }
}