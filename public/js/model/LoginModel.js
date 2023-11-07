export class LoginModel {
    usuarios;
    constructor() {
        this.usuarios = [];
    }
    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log({ usuario }, "creado");
    }
    iniciarSesion(nombreUsuario, password) {
        const usuario = this.usuarios.find((u) => u.nombreDeUsuario === nombreUsuario);
        if (usuario && usuario.password === password) {
            return usuario;
        }
        return null;
    }
}
