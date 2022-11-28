import { Navigate, Outlet } from "react-router-dom";
import { getStoredAuthToken } from "shared/utils/authToken";

export default function CheckIsLogged() {
  const token = getStoredAuthToken()

	if (token) {
    return <Navigate to={'/'} replace />;
	}
  
  return <Outlet />;
}