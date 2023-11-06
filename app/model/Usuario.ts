import {Estado} from "./Estado.js";
import {Cliente} from "./Cliente.js";
import {Estrategia} from "./Estrategia.js";

export class Usuario {
    nombreDeUsuario: string;
    nombre: string | undefined;
    apellido: string | undefined;
    correo: string | undefined;
    esAdministrador: boolean = false;

    constructor(nombreDeUsuario: string) {
        this.nombreDeUsuario = nombreDeUsuario;
    }

    // Métodos para establecer los atributos adicionales
    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setApellido(apellido: string) {
        this.apellido = apellido;
    }

    setCorreo(correo: string) {
        this.correo = correo;
    }

    activar() {
        console.log(`${this.nombreDeUsuario} ha sido activado.`);
    }

    bloquear() {
        console.log(`${this.nombreDeUsuario} ha sido bloqueado.`);
    }
}