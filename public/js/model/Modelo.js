export default class Modelo {
    mensaje;
    constructor() {
        this.mensaje = '';
    }
    obtenerMensaje() {
        return this.mensaje;
    }
    actualizarMensaje(mensaje) {
        this.mensaje = mensaje;
    }
}
