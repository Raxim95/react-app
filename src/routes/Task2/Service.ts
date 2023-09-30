export function isLoggedIn() {
  const user = localStorage.getItem("routerUser");
  if (user) return true;
  else return false;
}

export function setLogin(isLogged: boolean) {
  isLogged
    ? localStorage.setItem("routerUser", "abcd")
    : localStorage.setItem("routerUser", "");
}
