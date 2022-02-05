import { createContext, useEffect, useState } from "react";
import { LoginCredentials } from "../http/auth";
import { HTMLElement } from "../types/components";
import { message } from "antd";

import Spinner from "../components/Spinner";

import * as authClient from "../http/auth";
import * as userClient from "../http/users";

interface AuthContextData {
  user: any;
  isLogged: boolean;
  signIn: (credentials: LoginCredentials) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>(null!);

function AuthProvider({ children }: HTMLElement) {
  const [user, setUser] = useState<any>(null);
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
      localStorage.setItem("user_id", user.id);
      return true;
    }

    return false;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("user_id");
  }

  useEffect(() => {
    async function fecthUser() {
      const storagedUserId = localStorage.getItem("user_id");

      if (!storagedUserId) {
        signOut();
        setIsLoading(false);
        return;
      }

      const { data: loggedUser } = await userClient.showUser(storagedUserId);

      if (loggedUser) {
        setUser(loggedUser);
      } else {
        signOut();
      }

      setIsLoading(false);
    }

    fecthUser();
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
