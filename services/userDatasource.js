// services/userDatasource.js
const fs = require("node:fs/promises");
const path = require("node:path");

const userDatasource = {
  filePath: path.resolve(__dirname, "../models/users.json"),

  async load() {
    const jsonUsers = await fs.readFile(this.filePath, "utf-8");
    const users = JSON.parse(jsonUsers);
    return users;
  },
  
  async save(data) {
    const jsonData = JSON.stringify(data, null, 2); // Indentación para mejor legibilidad
    await fs.writeFile(this.filePath, jsonData, "utf-8");
  }
};

module.exports = userDatasource;