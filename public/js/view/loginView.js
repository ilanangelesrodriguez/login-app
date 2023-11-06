export default class LoginView {
    usernameInput;
    passwordInput;
    submitButton;
    constructor() {
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.submitButton = document.getElementById('submit');
    }
    render() {
        // Puedes personalizar la estructura HTML según tus necesidades
        const loginForm = document.createElement('form');
        loginForm.innerHTML = `
            <h2>Login</h2>
            <label for="username">Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="password" id="password" />
            <button id="submit" type="submit">Login</button>
        `;
        // Agregar el formulario al elemento contenedor en tu página HTML
        const container = document.getElementById('login-container');
        if (container) {
            container.appendChild(loginForm);
        }
    }
}
