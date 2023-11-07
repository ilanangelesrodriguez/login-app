import {LoginController} from "./controller/LoginController.js";
import UsuarioFactory from "./model/UsuarioFactory.js";
import {Administrador} from "./model/Administrador.js";
import {Cliente} from "./model/Cliente.js";
import {LoginView} from "./view/LoginView.js";
import {LoginModel} from "./model/LoginModel.js";


const loginModel = new LoginModel();
const loginView = new LoginView();
const usuarioFactory = new UsuarioFactory();


const loginController = new LoginController(loginModel, loginView);

const cliente = new Cliente();
cliente.nombreDeUsuario = "cliente1";
cliente.password = "clave1";
loginModel.registrarUsuario(cliente);

const administrador = new Administrador();
administrador.nombreDeUsuario = "admin1";
administrador.password = "adminclave";
loginModel.registrarUsuario(administrador);

