import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export function PrivateRoute({ path, ...props }) {
  const { token } = useAuthContext();

  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
