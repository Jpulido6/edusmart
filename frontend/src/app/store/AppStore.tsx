import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum UserRole {
  ADMIN = "admin",
  TEACHER = "teacher",
  STUDENT = "student",
}
export interface User {
  token: string;
  name: string;
  role: UserRole;
}
interface AppState {
  user: User | undefined;
  isLogged: boolean;
  token: string | undefined;
  login: (user: User) => void;
  logout: () => void;
}
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: undefined,
      isLogged: false,
      token:'',
      login: (user: User) => {
        set({ user, isLogged: true, token: user.token });
      },
      logout: () => {
        set({ user: undefined, isLogged: false,token: undefined });
      },
    }),
    {
      name: "edusmart",
    }
  )
);
