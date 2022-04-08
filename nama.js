const fs = require("fs");
const os = require("os");

const createPerson = function (data) {
  fs.writeFileSync("./nama.json", JSON.stringify(data));
};

createPerson({
  Nama: "Mikael Vito",
  Umur: 22,
  Alamat: "Indonesia",
});
