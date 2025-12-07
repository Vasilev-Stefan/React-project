import { useNavigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export function Logout() {
  const { logout } = useUser();
  const { request } = useFetch()
  const navigate = useNavigate();

  useEffect(() => {
      request('users/logout')
      .then(logout())
      .finally(navigate('/'))
  }, [])
  
}
