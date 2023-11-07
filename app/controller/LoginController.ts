import {LoginView} from "../view/LoginView.js";
import {LoginModel} from "../model/LoginModel.js";

export class LoginController {
    private model: LoginModel;
    private view: LoginView;

    constructor(model: LoginModel, view: LoginView) {
        this.model = model;
        this.view = view;

        this.view.formElement.addEventListener("submit", this.onSubmit.bind(this));
    }

    onSubmit(event: Event) {
        event.preventDefault();

        const username = this.view.getUsuario();
        const password = this.view.getContrasena();

        if (this.model.isCredentialsValid(username, password)) {
            this.view.limpiarMensaje();
            this.view.mostrarMensaje("Inicio de sesión exitoso.");
            this.view.limpiarCampos();
        } else {
            this.view.limpiarMensaje();
            this.view.mostrarMensaje("Nombre de usuario o contraseña incorrectos.");
        }
    }
}