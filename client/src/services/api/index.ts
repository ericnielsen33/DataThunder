import axios from "axios";
import { LoginRequestDTO } from "../../../../shared/src/modules/auth/DTOs/login.request.dto";
import { LoginResponseDTO } from "../../../../shared/src/modules/auth/DTOs/login.response.dto";

const AUTH_URL = "http://localhost:5000/api/auth";
export async function login(data: LoginRequestDTO): Promise<LoginResponseDTO> {
  const response = await axios.post(`${AUTH_URL}/login`, data);
  return response.data;
}

export async function registerNewUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const response = await axios.post(`${AUTH_URL}/register`, {
    newUser: {
      email,
      firstName,
      lastName,
      password
    }
  });

  const token = response.headers.authorization;
  const user = response.data;
  return { token, user };
}
