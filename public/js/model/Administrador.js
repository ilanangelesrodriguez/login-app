export class Administrador {
    // @ts-ignore
    _lastname;
    // @ts-ignore
    _email;
    // @ts-ignore
    _name;
    // @ts-ignore
    _username;
    // @ts-ignore
    _password;
    // @ts-ignore
    _type = "admin";
    /*constructor(lastname: string, name: string, username: string, password: string) {
        this._lastname = lastname;
        this._name = name;
        this._username = username;
        this._password = password;
    }*/
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
