import {Usuario} from "./Usuario.js";

export class Cliente implements Usuario {
    // @ts-ignore
    private _apellido: string;
    // @ts-ignore
    private _correo: string;
    // @ts-ignore
    private _nombre: string;
    // @ts-ignore
    private _nombreDeUsuario: string;
    // @ts-ignore
    private _password: string;
    // @ts-ignore
    private _tipo: string = "cliente";

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    get correo(): string {
        return this._correo;
    }

    set correo(value: string) {
        this._correo = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get nombreDeUsuario(): string {
        return this._nombreDeUsuario;
    }

    set nombreDeUsuario(value: string) {
        this._nombreDeUsuario = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

}
