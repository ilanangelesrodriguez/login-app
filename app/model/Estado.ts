// @ts-ignore
import {Usuario} from "./Usuario.js";

export interface Estado {
    activar(usuario: Usuario): void;
    bloquear(usuario: Usuario): void;
}