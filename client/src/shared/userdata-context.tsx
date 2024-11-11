// context/UserContext.js
import { createContext, useContext, ReactNode } from "react";
import useGet from "./api/hooks/use-get";

// Define the structure of the user data (this is optional, but good practice for TypeScript)
interface UserData {
  username: string;
  email: string;
  avatar: string;
  _id: string;
  phoneNumber: number;
  role: string;
}

interface UserContextType {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetchUser: any;
}

// Create a context with the default value set to null (or a suitable default)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Provider component that wraps your app and provides user data
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: userData,
    loading,
    error,
    refetch: refetchUser,
  } = useGet("/users/userdata"); // Assuming the endpoint is '/api/user'

  return (
    <UserContext.Provider value={{ userData, loading, error, refetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
