const express = require('express');
const app = express();
const puerto = 3000;

// Este es el "Endpoint" (La ruta que exponemos)
app.get('/api/consultar-saldo/:cuenta', (req, res) => {
    const numeroCuenta = req.params.cuenta;

    // Aquí es donde, en la vida real, te conectarías al AS400.
    // Simulamos el log del sistema:
    // console.log(`[INTEGRACIÓN] Recibida petición web para la cuenta: ${numeroCuenta}`);
    // console.log(`[AS400-BRIDGE] Ejecutando CALL PGM(GETSALDO) PARM('${numeroCuenta}') en DB2...`);
    // console.log(`[AS400-BRIDGE] Respuesta recibida del AS400 con éxito.`);

    // Devolvemos la respuesta al usuario web en formato JSON
    res.json({
        sistema_origen: "IBM i - AS400",
        programa_ejecutado: "GETSALDO.RPGLE",
        cuenta: numeroCuenta,
        saldo_disponible: 15420.50,
        estado: "ACTIVO"
    });
});

app.listen(puerto, () => {
    console.log(`Microservicio de Integración RPG encendido y escuchando en el puerto ${puerto}`);
});