import express from 'express';
import router from './routes';
import { connectBD } from './config/db';

const PORT = 3000;
const app = express();

app.use(express.json()); // Middleware para procesar JSON en las solicitudes
app.use('/', router); // Configuración de rutas

connectBD().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
});

export default app;
