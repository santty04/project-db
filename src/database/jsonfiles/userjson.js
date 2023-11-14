const User = require("../../models/user");

function createTypeUsers() {
  User.bulkCreate([
        {
          "idUser": null,
          "nameUser": "John",
          "lastNameUser": "Doe",
          "emailUser": "john.doe@example.com",
          "phoneUser": "123-456-7890",
          "addressUser": "123 Main St",
          "identifierUser": "john123",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Jane",
          "lastNameUser": "Doe",
          "emailUser": "jane.doe@example.com",
          "phoneUser": "987-654-3210",
          "addressUser": "456 Oak St",
          "identifierUser": "jane456",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Alex",
          "lastNameUser": "Smith",
          "emailUser": "alex.smith@example.com",
          "phoneUser": "555-123-4567",
          "addressUser": "789 Elm St",
          "identifierUser": "alex789",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Emily",
          "lastNameUser": "Johnson",
          "emailUser": "emily.j@example.com",
          "phoneUser": "789-456-1230",
          "addressUser": "101 Pine St",
          "identifierUser": "emily101",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Chris",
          "lastNameUser": "Williams",
          "emailUser": "chris.w@example.com",
          "phoneUser": "222-333-4444",
          "addressUser": "202 Maple St",
          "identifierUser": "chris202",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Mia",
          "lastNameUser": "Brown",
          "emailUser": "mia.b@example.com",
          "phoneUser": "777-888-9999",
          "addressUser": "303 Birch St",
          "identifierUser": "mia303",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Daniel",
          "lastNameUser": "Taylor",
          "emailUser": "daniel.t@example.com",
          "phoneUser": "444-555-6666",
          "addressUser": "404 Cedar St",
          "identifierUser": "daniel404",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Olivia",
          "lastNameUser": "Miller",
          "emailUser": "olivia.m@example.com",
          "phoneUser": "999-111-2222",
          "addressUser": "505 Oak St",
          "identifierUser": "olivia505",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Ethan",
          "lastNameUser": "Moore",
          "emailUser": "ethan.m@example.com",
          "phoneUser": "111-222-3333",
          "addressUser": "606 Pine St",
          "identifierUser": "ethan606",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Ava",
          "lastNameUser": "Jackson",
          "emailUser": "ava.j@example.com",
          "phoneUser": "333-444-5555",
          "addressUser": "707 Maple St",
          "identifierUser": "ava707",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Matthew",
          "lastNameUser": "Anderson",
          "emailUser": "matthew.a@example.com",
          "phoneUser": "444-555-6666",
          "addressUser": "808 Elm St",
          "identifierUser": "matthew808",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Sophia",
          "lastNameUser": "Harris",
          "emailUser": "sophia.h@example.com",
          "phoneUser": "555-666-7777",
          "addressUser": "909 Birch St",
          "identifierUser": "sophia909",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Liam",
          "lastNameUser": "Carter",
          "emailUser": "liam.c@example.com",
          "phoneUser": "666-777-8888",
          "addressUser": "1010 Cedar St",
          "identifierUser": "liam1010",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Isabella",
          "lastNameUser": "Fisher",
          "emailUser": "isabella.f@example.com",
          "phoneUser": "777-888-9999",
          "addressUser": "1111 Oak St",
          "identifierUser": "isabella1111",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Noah",
          "lastNameUser": "Ward",
          "emailUser": "noah.w@example.com",
          "phoneUser": "888-999-0000",
          "addressUser": "1212 Pine St",
          "identifierUser": "noah1212",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Emma",
          "lastNameUser": "Perry",
          "emailUser": "emma.p@example.com",
          "phoneUser": "999-000-1111",
          "addressUser": "1313 Maple St",
          "identifierUser": "emma1313",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Jackson",
          "lastNameUser": "Barnes",
          "emailUser": "jackson.b@example.com",
          "phoneUser": "000-111-2222",
          "addressUser": "1414 Elm St",
          "identifierUser": "jackson1414",
          "idTypeUser": 2
        },
        {
          "idUser": null,
          "nameUser": "Aria",
          "lastNameUser": "Cole",
          "emailUser": "aria.c@example.com",
          "phoneUser": "111-222-3333",
          "addressUser": "1515 Cedar St",
          "identifierUser": "aria1515",
          "idTypeUser": 3
        },
        {
          "idUser": null,
          "nameUser": "Lucas",
          "lastNameUser": "Barker",
          "emailUser": "lucas.b@example.com",
          "phoneUser": "222-333-4444",
          "addressUser": "1616 Birch St",
          "identifierUser": "lucas1616",
          "idTypeUser": 1
        },
        {
          "idUser": null,
          "nameUser": "Chloe",
          "lastNameUser": "Spencer",
          "emailUser": "chloe.s@example.com",
          "phoneUser": "333-444-5555",
          "addressUser": "1717 Oak St",
          "identifierUser": "chloe1717",
          "idTypeUser": 2
        }
    
    
  ]);
}

module.exports = {
    createTypeUsers
}
