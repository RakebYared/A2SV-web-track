import { Navigate } from 'react-router-dom';
import { tokenUtils, userUtils } from '../utils/api';

const ProtectedRoute = ({ children }) => {
  const token = tokenUtils.getToken();
  const user = userUtils.getUser();

  if (!token || !user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute; 