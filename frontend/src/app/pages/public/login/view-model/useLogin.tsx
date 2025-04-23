import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { onLogin } from "./services/login.services";
import { ROUTES } from "@/app/routes/routesConfig";
import { useAppStore, User } from "@/app/store/AppStore";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function useLogin() {
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const login = useAppStore((state) => state.login);
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: onLogin,
    onSuccess: (data) => {
      const { access_token, user } = data;
      localStorage.setItem('token',access_token)

      const userLogin: User = {
        token: access_token,
        name: user.name,
        role: user.role,
      };
      login(userLogin);
      navigate(ROUTES.PRIVATE.DASHBOARD, { replace: true });
    },
    onError: (error) => {
      toast.toast({
        title: "Error",
        description: `Error al iniciar sesión ${error.message}`,
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return {
    form,
    onSubmit,
    isPending,
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const login = useAppStore((state) => state.login);
  // const navigate = useNavigate();

  // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setEmail(e.target!.value);
  // };

  // const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   setPassword(e.target.value);
  // };

  // const onSubmit = () => {
  //   console.log('llego');

  //   mutate({ email, password });
  // };

  // return {
  //   email,
  //   password,
  //   handleChangeEmail,
  //   handleChangePassword,
  //   error,
  //   isPending,
  //   data,
  //   onSubmit,
  // };
}
