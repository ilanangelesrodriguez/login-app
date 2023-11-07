// Controlador
export default class Controlador {
    modelo;
    vista;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    saludar() {
        const mensaje = '¡Hola, Mundo!';
        this.modelo.actualizarMensaje(mensaje);
    }
}
