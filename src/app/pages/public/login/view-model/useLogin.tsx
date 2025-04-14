import { useAppStore } from "@/app/store/AppStore";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAppStore((state) => state.login);
  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target!.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setPassword(e.target.value);
  };
  const handleLogin = () => {
    const user = {
      name: "Carlos Jose",
      email,
      password,
    };

    login(user);
    navigate("/home");
  };

  return {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  };
}
