import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGoogle,
  faFacebook,
  faGithub,
  faPinterest,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import PrimaryButton from '../../Shared/PrimaryButton';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProviders';

const Signin = () => {
  library.add(faGoogle, faFacebook, faGithub, faPinterest, faLinkedin);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState('');
  const [loginError, setLoginError] = useState('');
  const { signIn, user, googleSignin } = useContext(AuthContext);

  const { location } = useLocation();
  const navigate = useNavigate();

  // Login with Google

  const handleGoogle = () => {
    googleSignin();
    navigate(location?.state ? location?.state : '/');
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  return (
    <section className="h-[800px]">
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center tect-3xl font-bold text-blue-900">
              Please Login
            </h1>

            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700">Email</span>
                </label>

                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  placeholder="email"
                  className="input  border border-indigo-800"
                  required
                />
                {errors.email && <p role="alert">{errors.email.message} </p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-700">Password</span>
                </label>
                <input
                  {...register('password', {
                    minLength: { value: 6, message: 'Password is too short' },
                  })}
                  type="password"
                  placeholder="password"
                  className="input border border-indigo-800"
                  required
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password.message}{' '}
                  </p>
                )}
                <label className="label">
                  <Link
                    to="#"
                    className="label-text-alt link link-hover text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <PrimaryButton>Login</PrimaryButton>
              </div>
              <div>
                {loginError && <p className="text-red-500">{loginError} </p>}
              </div>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account? Please Register
                </Link>
              </label>
              <div className="divider text-blue-700">Continue with</div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  onClick={handleGoogle}
                  icon={['fab', 'google']}
                  size="md"
                  className="text-red-500 mx-2 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  size="md"
                  className="text-blue-600 mx-2"
                />
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  size="md"
                  className="text-gray-800 mx-2"
                />
                <FontAwesomeIcon
                  icon={['fab', 'pinterest']}
                  size="md"
                  className="text-red-600 mx-2"
                />
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  size="md"
                  className="text-blue-700 mx-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
