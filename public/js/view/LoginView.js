export class LoginView {
    formElement;
    usernameInput;
    passwordInput;
    constructor() {
        this.formElement = document.getElementById("login-form");
        this.usernameInput = document.getElementById("usuario");
        this.passwordInput = document.getElementById("contrasena");
        this.formElement.addEventListener("submit", this.onSubmit.bind(this));
    }
    getUsuario() {
        return this.usernameInput.value;
    }
    getContrasena() {
        return this.passwordInput.value;
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
        this.usernameInput.value = "";
        this.passwordInput.value = "";
    }
    onSubmit(event) {
        event.preventDefault();
    }
}
