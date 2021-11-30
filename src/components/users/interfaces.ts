interface iNewUser {
  email: string;
  password: string;
}

interface iUser extends iNewUser {
  id: string;
}

export { iNewUser, iUser };
