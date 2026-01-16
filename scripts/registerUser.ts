import axios from "axios";

export type UserData = {
  fullName: string;
  email: string;
  password?: string | null;
  gender?: string;
  role: string;
  phone?: number;
  photoURL?: string;
};

const registerUser = async (userData: UserData) => {
  try {
    const response = await axios.post("/api/register", userData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
    throw new Error("An unexpected error occurred");
  }
};

export default registerUser;

