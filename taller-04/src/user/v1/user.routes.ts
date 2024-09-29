import { Router } from "express";
import { getUsersByHobby, userExists, getExperience, getUsersByFaction, registerUser } from "./user.controller";

const router = Router();

// Endpoint para registrar un nuevo usuario
router.post("/", registerUser);

// Endpoint para obtener usuarios por hobby
router.get("/hobby", getUsersByHobby);

// Endpoint para verificar si un usuario existe
router.get("/exists", userExists);

// Endpoint para obtener la experiencia total del equipo de pilotos enviado
router.get("/team-experience", getExperience);

// Endpoint para obtener usuarios por facción
router.get("/by-faction", getUsersByFaction);

export default router;
