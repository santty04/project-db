const TypeUser = require("../../models/typeUser");

function createTypeUsers() {
  TypeUser.bulkCreate([
    {
      idTypeUser: null,
      typeUser: "Admin",
    },
    {
      idTypeUser: null,
      typeUser: "Moderator",
    },
    {
      idTypeUser: null,
      typeUser: "User",
    },
  ]);
}

module.exports = {
    createTypeUsers
}
