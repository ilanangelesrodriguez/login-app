export class LoginModel {
    validUsername = "usuario";
    validPassword = "contrasena";
    isCredentialsValid(username, password) {
        return username === this.validUsername && password === this.validPassword;
    }
}
