import { promises as fs } from "fs";
import path from "path";
import { User } from "./user.model";

const jsonfile = "../../../datos.json";

async function pushUser(newUser: User): Promise<User[]> {
  try {
    const filePath = path.resolve(__dirname, jsonfile);

    const data = await fs.readFile(filePath, "utf8");

    const users: User[] = JSON.parse(data);

    users.push(newUser);

    const updatedData = JSON.stringify(users, null, 2);
    await fs.writeFile(filePath, updatedData, "utf8");

    return users;
  } catch (error) {
    throw new Error(`Error al procesar el archivo de usuarios: ${error}`);
  }
}

export default pushUser;
