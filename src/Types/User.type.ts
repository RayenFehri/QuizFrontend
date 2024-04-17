import { UUID } from "crypto"

export interface User {
    id: string
    email?: string
    phone?: string
    password?:UUID
    profile: {
      joiningdate: string
      groupe: string
      idprofile: string
      firstname: string
      lastname: string
      birthdate: string | null
      address: string | null
      profilepicture:string 
      // Ajoutez d'autres champs de profil si nécessaire
    }
  }
  