const fs = require("node:fs/promises");
const path = require("node:path");

const datasource = {
  filePath: path.resolve(__dirname, "../database/models/products.js"),

  async load() {
    const jsonDrones = await fs.readFile(this.filePath, "utf-8");
    const drones = JSON.parse(jsonDrones);
    return drones;
  },
  async save(data) {
    const jsonData = JSON.stringify(data, null, 2); // Indentación para mejor legibilidad
    await fs.writeFile(this.filePath, jsonData, "utf-8");
  },

  async removeFile(filePath) {
    const file = path.join(__dirname, "../public/img/productsImg", filePath);
    try {
      await fs.unlink(file);
      console.log(`file ${filePath} has been deleted.`);
    } catch (err) {
      console.error(err.message);
    }
  },
};

module.exports = datasource;
