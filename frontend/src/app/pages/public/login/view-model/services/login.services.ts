import { api } from "@/app/utils/api";
import { ENDPOINT } from "@/config/endpoint/endpoint";
import { LoginDTO } from "../../domain/dto/login.dto";
import { LoginResponse } from "../../domain/response/login.response";

export const onLogin = async (data: LoginDTO) => {
  const response = await api.post<LoginResponse>(ENDPOINT.AUTH.LOGIN, data);

  return response.data;
};
