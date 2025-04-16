import { UserRole } from "@/app/store/AppStore";

export interface LoginResponse {
  access_token: string;
  user:{
    name:string;
    role: UserRole
  }
}
