import { useRecoilState } from 'recoil';
import { authState } from '../components/Auth/recoil/authState';

//custom hook means RE-USABLE LOGIC 

const useAuth = () => {
  const [authStateValue, setAuthState] = useRecoilState(authState);

  //RECOIL is a lightweight state management library.

  const login = (token) => {
    setAuthState({ isAuthenticated: true, token }); 
  };

  const logout = () => {   
    setAuthState({ isAuthenticated: false, token: null }); 
  };

  return {
    ...authStateValue, 
    login,
    logout,
  };
};

export default useAuth;
