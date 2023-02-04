import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        setAuthToken(user);
      })
      .catch(err => console.error(err));
  }
    return (
      <div>
        <p className="text-center font-bold mb-3">Social Login</p>
        <p className="text-center">
          <button onClick={handleGoogleSignIn} className="btn btn-ghost bg-amber-400">Google</button>
        </p>
      </div>
    );
};

export default SocialLogin;