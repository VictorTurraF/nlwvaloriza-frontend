import { createContext, useEffect, useState } from "react";
import { LoginCredentials } from "../http/auth";
import * as authClient from "../http/auth";
import Spinner from "../components/Spinner";
import { HTMLElement } from "../types/components";
import { message } from "antd";

interface AuthContextData {
  user: object | null;
  isLogged: boolean;
  signIn: (credentials: LoginCredentials) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>(null!);

function AuthProvider({ children }: HTMLElement) {
  const [user, setUser] = useState<Object | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  async function signIn(credentials: LoginCredentials) {
    await authClient.getCSRF();
    
    const user = await authClient.signIn(credentials, {
      onInvalidLogin: (response) => {
        message.error(response.data.message);
      },
    });

    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }

    return false;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
