 export const handleLogout = (setUser: (user: null) => void) => {
    sessionStorage.removeItem("intelis_user");
    setUser(null);
  };
