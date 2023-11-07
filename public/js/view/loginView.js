export class LoginView {
    formElement;
    usuarioInput;
    contrasenaInput;
    constructor() {
        this.formElement = document.getElementById("login-form");
        this.usuarioInput = document.getElementById("usuario");
        this.contrasenaInput = document.getElementById("contrasena");
    }
    getUsuario() {
        return this.usuarioInput.value;
    }
    getContrasena() {
        return this.contrasenaInput.value;
    }
    mostrarMensaje(mensaje) {
        const mensajeElement = document.createElement("p");
        mensajeElement.textContent = mensaje;
        this.formElement.appendChild(mensajeElement);
    }
    limpiarMensaje() {
        const mensajeElement = this.formElement.querySelector("p");
        if (mensajeElement) {
            this.formElement.removeChild(mensajeElement);
        }
    }
    limpiarCampos() {
        this.usuarioInput.value = "";
        this.contrasenaInput.value = "";
    }
    onFormSubmit(callback) {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            callback(event);
        });
    }
}
