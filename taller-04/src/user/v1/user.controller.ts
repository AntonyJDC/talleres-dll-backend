import { Request, Response } from "express";
import readUsers from "./read.user.action";
import pushUser from "./save.user.action";
import { User } from "./user.model";


// Obtener usuarios por hobby

export async function getUsersByHobby(req: Request, res: Response): Promise<void> {
  try {
    const hobby = req.query.hobby as string;

    if (!hobby) {
      res.status(400).json({ error: "El parámetro 'hobby' es requerido" });
      return;
    }

    const users = await readUsers();

    const filteredUsers = users.filter(user => user.hobbies.includes(hobby));

    res.json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
}

// Verificar si un usuario existe

export async function userExists(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.query.id as string, 10);

    if (isNaN(id)) {
      res.status(400).json({ error: "El parámetro 'id' debe ser un número válido" });
      return;
    }

    const users = await readUsers();

    const user = users.find(user => user.id === id);

    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al verificar la existencia del usuario" });
  }
}

// experiencia total del equipo de pilotos enviado

export async function getExperience(req: Request, res: Response): Promise<void> {
  try {
    const users = await readUsers();

    const totalExperience = users.reduce((acc, user) => acc + user.years, 0);

    res.json({ experiencia: totalExperience });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la experiencia del equipo de pilotos" });
  }
}

// Obtener usuarios por facción

export async function getUsersByFaction(req: Request, res: Response): Promise<void> {
  try {
    const faction = req.query.faction as string;

    if (!faction) {
      res.status(400).json({ error: "El parámetro faction es requerido" });
      return;
    }

    const users = await readUsers();

    const filteredUsers = users.filter(user => user.faction.includes(faction));

    res.json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
}

// Registrar un nuevo usuario
export async function registerUser(req: Request, res: Response): Promise<void> {
  try {
    const { id, name, hobbies, years, team, faction } = req.body;

    if (!id || !name || !years || !team || !faction) {
      res.status(400).json({ error: "Todos los campos son requeridos" });
      return;
    }

    const users = await readUsers();

    // Verificar si el usuario ya existe
    const existingUser = users.find(user => user.id === id);
    if (existingUser) {
      res.status(400).json({ error: "El usuario ya existe" });
      return;
    }

    const newUser: User = {
      id,
      name,
      hobbies: hobbies || [],
      years,
      team,
      faction
    };

    const updatedUsers = await pushUser(newUser);

    res.status(201).json({ message: "Usuario registrado exitosamente"});
  } catch (error) {
    res.status(500).json({message: "Error al registrar el usuario"});
  }
}
