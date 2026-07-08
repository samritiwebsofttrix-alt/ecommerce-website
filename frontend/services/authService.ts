import api from "@/lib/axios";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const register = async (data: RegisterData) => {
  return api.post("/register", data);
};

export const login = async (data: {
  email: string;
  password: string;
}) => {
  return api.post("/login", data);
};