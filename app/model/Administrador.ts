import {User} from "./User.js";

export class Administrador implements User {
    // @ts-ignore
    private _lastname: string;
    // @ts-ignore
    private _email: string;
    // @ts-ignore
    private _name: string;
    // @ts-ignore
    private _username: string;
    // @ts-ignore
    private _password: string;
    // @ts-ignore
    private _type: string = "admin";


    constructor(email: string, username: string, password: string) {
        this._email = email;
        this._username = username;
        this._password = password;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }


}
