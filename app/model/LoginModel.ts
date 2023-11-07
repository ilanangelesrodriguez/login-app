import {Usuario} from "./Usuario.js";

export class LoginModel {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    registrarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
        console.log({usuario}, "creado");
    }

    iniciarSesion(nombreUsuario: string, password: string): Usuario | null {
        const usuario = this.usuarios.find((u) => u.nombreDeUsuario === nombreUsuario);

        if (usuario && usuario.password === password) {
            return usuario;
        }

        return null;
    }
}