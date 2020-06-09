class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
  }

  createUser = (user) => {
    this.id++;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

  getAllUsers = () => {
    let users = [];
    for (let value of this.users.values()) {
      users.push(value);
    }
    return users;
  }

  updateUser = (id, rest) => {
    const user = this.users.get(Number(id));
    this.users.set(Number(id), { ...user, ...rest });
    return this.users.get(Number(id));
  }

  deleteUser = (id) => {
    this.users.delete(Number(id));
    return id;
  }
}

export default new User();
