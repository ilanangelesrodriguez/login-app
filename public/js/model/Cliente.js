export class Cliente {
    activar(usuario) {
        console.log(`${usuario.nombre} (Cliente) ha sido activado.`);
    }
    bloquear(usuario) {
        console.log(`${usuario.nombre} (Cliente) ha sido bloqueado.`);
    }
}
