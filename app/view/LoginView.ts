export default class LoginView {
    private usernameInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;
    private submitButton: HTMLButtonElement;

    constructor() {
        this.usernameInput = document.getElementById('username') as HTMLInputElement;
        this.passwordInput = document.getElementById('password') as HTMLInputElement;
        this.submitButton = document.getElementById('submit') as HTMLButtonElement;

    }

    render():void {
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