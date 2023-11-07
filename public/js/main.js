import { LoginController } from "./controller/LoginController.js";
import { LoginView } from "./view/LoginView.js";
import { LoginModel } from "./model/LoginModel.js";
const loginModel = new LoginModel();
const loginView = new LoginView();
const loginController = new LoginController(loginModel, loginView);
