import { create } from "zustand";
import { persist } from "zustand/middleware";



interface User {
  name: string;
  email: string;
  password: string;
}
interface AppState {
  user: User | undefined;
  isLogged: boolean;
  login: (user: User) => void;
  logout: () => void;

}
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: undefined,
      isLogged: false,
      login: (user: User) => {
        set({ user, isLogged: true });
      },
      logout: () => {
        set({ user: undefined, isLogged: false });
      },
    }),
    {
      name: "manage-school",
    }
  )
)
