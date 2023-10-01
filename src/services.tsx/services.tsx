import UserType from "../Types/UserType";

export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const users: UserType[] = await response.json();
  return users;
}

export async function getUserById(id: number) {
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const response = await fetch(url);
  const user: UserType = await response.json();
  return user;
}
