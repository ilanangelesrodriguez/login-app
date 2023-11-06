import {Usuario} from "./Usuario.js";

export interface Estrategia {
    activar(usuario: Usuario): void;
    bloquear(usuario: Usuario): void;
}