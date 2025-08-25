import { LoginData } from "@/app/api/signin/route";

export const signinMock = async (
  email: string,
  password: string,
): Promise< LoginData | null> => {
  if (email === "test@test.com" && password === "1234") {
    return {name:"Nombre de prueba"}
  } else {
    return null;
  }
};
