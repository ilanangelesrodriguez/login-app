export class LoginView {
    formElement;
    usernameInput;
    passwordInput;
    messageElement;
    constructor() {
        this.formElement = document.getElementById("login-form");
        this.usernameInput = document.getElementById("usuario");
        this.passwordInput = document.getElementById("contrasena");
        this.messageElement = document.getElementById("mensaje");
        this.formElement.addEventListener("submit", this.onSubmit.bind(this));
    }
    getUsuario() {
        return this.usernameInput.value;
    }
    getContrasena() {
        return this.passwordInput.value;
    }
    mostrarMensaje(mensaje) {
        this.formElement.style.display = "none";
        // @ts-ignore
        document.getElementById("main-message").style.display = "flex";
        this.messageElement.textContent = mensaje;
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
