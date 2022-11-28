import { Navigate, Outlet } from 'react-router-dom';
import { getStoredAuthToken } from 'shared/utils/authToken';

const ProtectRoute = () => {
	const token = getStoredAuthToken();

	if (token) {
		return <Outlet />;
	}

	return <Navigate to={'/auth/login'} replace />;
};

export default ProtectRoute;
