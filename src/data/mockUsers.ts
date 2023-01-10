const users = [
  {
    email: "abdallah@ld.com",
    password: "secret",
  },
  {
    email: "ismail@ld.com",
    password: "secret",
  },
];

const login = (email: string, password: string) => {
  return (
    users.filter(
      (user) => user.email === email && user.password === password
    ) || "404"
  );
};

export { users, login };
