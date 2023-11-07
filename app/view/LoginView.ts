export class LoginView {
    formElement: HTMLFormElement;
    private usernameInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;
    messageElement: HTMLElement;

    constructor() {
        this.formElement = document.getElementById("login-form") as HTMLFormElement;
        this.usernameInput = document.getElementById("usuario") as HTMLInputElement;
        this.passwordInput = document.getElementById("contrasena") as HTMLInputElement;
        this.messageElement = document.getElementById("mensaje") as HTMLElement;
        this.formElement.addEventListener("submit", this.onSubmit.bind(this));
    }

    getUsuario(): string {
        return this.usernameInput.value;
    }

    getContrasena(): string {
        return this.passwordInput.value;
    }

    mostrarMensaje(mensaje: string) {
        this.formElement.style.display = "none";
        // @ts-ignore
        document.getElementById("main-message").style.display= "flex";
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

    onSubmit(event: Event) {
        event.preventDefault();
    }

}