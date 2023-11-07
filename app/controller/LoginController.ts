import {LoginView} from "../view/LoginView.js";
import {LoginModel} from "../model/LoginModel";

export class LoginController {
    private loginModel: LoginModel;
    private loginView: LoginView;

    constructor(loginModel: LoginModel, loginView: LoginView) {
        this.loginModel = loginModel;
        this.loginView = loginView;

        this.loginView.onFormSubmit(this.iniciarSesion.bind(this));
    }

    iniciarSesion(event: Event) {
        event.preventDefault();

        const usuario = this.loginView.getUsuario();
        const contrasena = this.loginView.getContrasena();

        const usuarioLogeado = this.loginModel.iniciarSesion(usuario, contrasena);

        if (usuarioLogeado) {
            this.loginView.limpiarMensaje();
            this.loginView.limpiarCampos();
            this.loginView.mostrarMensaje(`Bienvenido, ${usuarioLogeado.nombreDeUsuario} (${usuarioLogeado.tipo})`);
        } else {
            this.loginView.limpiarMensaje();
            this.loginView.mostrarMensaje("Credenciales inválidas. No se pudo iniciar sesión.");
        }
    }
}