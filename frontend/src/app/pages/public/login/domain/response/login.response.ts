import { UserRole } from "@/app/store/AppStore";

export interface LoginResponse {
  accessToken: string;
  user:{
    name:string;
    role: UserRole
  }
}
