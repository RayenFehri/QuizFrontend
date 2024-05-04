import axios from 'axios';

const API_URL = "http://localhost:3000/auth/";



export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL + "signin", {
      email,
      password,
    });

    if (response.data.accessToken) {
      const userData = {
        authenticationData: response.data.authenticationData,
        profile: response.data.profile,
        accessToken: response.data.accessToken
      };

      localStorage.setItem("user", JSON.stringify(userData)); // Stockez les données de l'utilisateur dans le stockage local
    }

    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; 
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload(); 
};



export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    const userData = JSON.parse(userStr);
    return userData;
  }
  return null;
};


 export const getCurrentUserId = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    const userData = JSON.parse(userStr);
    return userData && userData.profile && userData.profile.idprofile ? userData.profile.idprofile : null;
  }
  return null;
};

export const getCurrentUserGroup = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    const userData = JSON.parse(userStr);
    return userData && userData.profile && userData.profile.groupe ? userData.profile.groupe : null;
  }
  return null;
};

