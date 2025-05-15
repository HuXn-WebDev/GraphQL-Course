import { users, db } from "../db/db.js";

const Mutation = {
  addUser: (_, { input }) => {
    const { first_name, last_name, email, password } = input;

    if (users.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: db.idCounter++,
      first_name,
      last_name,
      email,
      password,
    };

    users.push(newUser);
    return newUser;
  },

  deleteUser: (_, { id }) => {
    const userIndex = users.findIndex((user) => String(user.id) === String(id));

    if (userIndex === -1) {
      throw new Error("User not found");
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    return deletedUser;
  },

  updateUser: (_, { id, input }) => {
    const user = users.find((user) => String(user.id) === String(id));

    if (!user) {
      throw new Error("User not found");
    }

    Object.assign(user, input);
    return user;
  },
};

export default Mutation;
