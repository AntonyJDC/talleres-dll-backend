import fs from "fs";
import path from "path";
import { User } from "./user.model";

const jsonfile = "../../../datos.json";

async function readUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, jsonfile);

    // Leer el archivo JSON
    fs.readFile(filePath, "utf8", (err, data) => {
      
      if (err) {
        reject("Error al leer el archivo de usuarios: " + err);
      } else {
        try {
          const users: User[] = JSON.parse(data);
          resolve(users);
        } catch (parseError) {
          reject("Error al parsear el archivo JSON: " + parseError);
        }
      }
    });
  });
}

export default readUsers;
