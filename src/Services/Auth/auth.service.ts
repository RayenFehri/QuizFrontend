export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const userData = JSON.parse(userStr);
      console.log("Current user data:", userData);
      return userData;
    }
  
    return null;
  };