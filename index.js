const server = require('./src/server');
const conn = require('./src/db');
const port = 3000;

conn.then(() => {
    console.log("\x1b[36m", `>> Conectado a la base de datos`);
    server.listen(port, () => {
        console.log("\x1b[36m", `>> App escuchando en el puerto ${port}`);
    })
}, () => {
    console.log("\x1b[31m", `No se pudo iniciar el servidor.`)
})
