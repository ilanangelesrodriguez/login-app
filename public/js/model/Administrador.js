export class Administrador {
    activar(usuario) {
        console.log(`${usuario.nombre} (Administrador) ha sido activado.`);
    }
    bloquear(usuario) {
        console.log(`${usuario.nombre} (Administrador) ha sido bloqueado.`);
    }
}
