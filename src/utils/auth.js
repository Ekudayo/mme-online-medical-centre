// export const isAuthenticated = () => {
//   return localStorage.getItem("auth") === "true";
// }
// export const login = () => {
//   localStorage.setItem("auth","true")
// }
// export const logout = () => {
//   localStorage.setItem("auth")
// }
export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export const login = () => {
  localStorage.setItem("auth", "true");
};

export const logout = () => {
  localStorage.removeItem("auth"); // Correct way to remove the item
};