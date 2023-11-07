export class Cliente {
    // @ts-ignore
    _apellido;
    // @ts-ignore
    _correo;
    // @ts-ignore
    _nombre;
    // @ts-ignore
    _nombreDeUsuario;
    // @ts-ignore
    _password;
    // @ts-ignore
    _tipo = "cliente";
    get apellido() {
        return this._apellido;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get correo() {
        return this._correo;
    }
    set correo(value) {
        this._correo = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombreDeUsuario() {
        return this._nombreDeUsuario;
    }
    set nombreDeUsuario(value) {
        this._nombreDeUsuario = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
}
