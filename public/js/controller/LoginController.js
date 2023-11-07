export class LoginController {
    loginModel;
    loginView;
    constructor(loginModel, loginView) {
        this.loginModel = loginModel;
        this.loginView = loginView;
        this.loginView.onFormSubmit(this.iniciarSesion.bind(this));
    }
    iniciarSesion(event) {
        event.preventDefault();
        const usuario = this.loginView.getUsuario();
        const contrasena = this.loginView.getContrasena();
        const usuarioLogeado = this.loginModel.iniciarSesion(usuario, contrasena);
        if (usuarioLogeado) {
            this.loginView.limpiarMensaje();
            this.loginView.limpiarCampos();
            this.loginView.mostrarMensaje(`Bienvenido, ${usuarioLogeado.nombreDeUsuario} (${usuarioLogeado.tipo})`);
        }
        else {
            this.loginView.limpiarMensaje();
            this.loginView.mostrarMensaje("Credenciales inválidas. No se pudo iniciar sesión.");
        }
    }
}
