export const signinMock = async (
  email: string,
  password: string,
) => {
  if (email === "test@test.com" && password === "1234") {
    return true;
  } else {
    return false;
  }
};
