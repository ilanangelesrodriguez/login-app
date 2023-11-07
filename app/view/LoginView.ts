export class LoginView {
    formElement: HTMLFormElement;
    private usernameInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;

    constructor() {
        this.formElement = document.getElementById("login-form") as HTMLFormElement;
        this.usernameInput = document.getElementById("usuario") as HTMLInputElement;
        this.passwordInput = document.getElementById("contrasena") as HTMLInputElement;

        this.formElement.addEventListener("submit", this.onSubmit.bind(this));
    }

    getUsuario(): string {
        return this.usernameInput.value;
    }

    getContrasena(): string {
        return this.passwordInput.value;
    }

    mostrarMensaje(mensaje: string) {
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

    onSubmit(event: Event) {
        event.preventDefault();
    }

}