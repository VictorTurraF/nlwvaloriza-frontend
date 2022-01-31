import React, { createContext, useEffect, useState } from "react";
import { Credentials } from "../http/auth";
import * as authClient from "../http/auth";
import Spinner from "../components/Spinner";
import { HTMLElement } from "../types/components";

interface AuthContextProps {
  user: Object;
  isLogged: boolean;
  signIn: Promise<boolean>;
  signOut: Promise<void>;
}

const AuthContext = createContext<AuthContextProps | {}>({});

function AuthProvider({ children }: HTMLElement) {
  const [user, setUser] = useState<Object | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signIn(credentials: Credentials) {
    const user = await authClient.newLogin(credentials);

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
