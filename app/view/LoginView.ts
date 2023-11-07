export class LoginView {
    private formElement: HTMLFormElement;
    private usuarioInput: HTMLInputElement;
    private contrasenaInput: HTMLInputElement;

    constructor() {
        this.formElement = document.getElementById("login-form") as HTMLFormElement;
        this.usuarioInput = document.getElementById("usuario") as HTMLInputElement;
        this.contrasenaInput = document.getElementById("contrasena") as HTMLInputElement;
    }

    getUsuario(): string {
        return this.usuarioInput.value;
    }

    getContrasena(): string {
        return this.contrasenaInput.value;
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
        this.usuarioInput.value = "";
        this.contrasenaInput.value = "";
    }

    onFormSubmit(callback: (event: Event) => void) {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            callback(event);
        });
    }

}