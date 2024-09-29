import express from "express";
import userRoutes from "./user/v1/user.routes";

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas de usuarios
app.use("/users", userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
