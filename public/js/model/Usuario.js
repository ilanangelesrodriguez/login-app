export class Usuario {
    nombreDeUsuario;
    nombre;
    apellido;
    correo;
    esAdministrador = false;
    constructor(nombreDeUsuario) {
        this.nombreDeUsuario = nombreDeUsuario;
    }
    // Métodos para establecer los atributos adicionales
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    activar() {
        console.log(`${this.nombreDeUsuario} ha sido activado.`);
    }
    bloquear() {
        console.log(`${this.nombreDeUsuario} ha sido bloqueado.`);
    }
}
