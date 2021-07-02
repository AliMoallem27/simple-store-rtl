import { useContext } from "react";
import { AuthContext, SetAuthContext } from "../providers/AuthProvider";
import netlifyIdentity from "netlify-identity-widget";

export default function useAuth() {
  const authData = useContext(AuthContext);
  const setAuthData = useContext(SetAuthContext);

  function open() {
    netlifyIdentity.open();
  }

  function logout() {
    netlifyIdentity.logout();
  }

  return { authData, setAuthData, open, logout };
}
