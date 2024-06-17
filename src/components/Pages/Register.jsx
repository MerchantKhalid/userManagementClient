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

const Register = () => {
  library.add(faGoogle, faFacebook, faGithub, faPinterest, faLinkedin);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, user, createUser, googleSignin } = useContext(AuthContext);
  const [data, setData] = useState('');
  const { location } = useLocation();
  const navigate = useNavigate();

  // Login with Google

  const handleGoogle = () => {
    googleSignin();
    navigate(location?.state ? location?.state : '/');
  };

  const handleRegister = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User created Successfully');
        saveUser(data.name, data.email);
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/');
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-center tect-3xl font-bold text-blue-900">
            Please Register
          </h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700">Name</span>
              </label>

              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Name"
                className="input  border border-indigo-800"
                required
              />
              {errors.name && <p role="alert">{errors.name.message} </p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700">Email</span>
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                })}
                type="email"
                placeholder="Email"
                className="input border border-indigo-800"
                required
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email.message}{' '}
                </p>
              )}
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
              </div>
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password.message}{' '}
                </p>
              )}
            </div>
            <div className="form-control mt-2">
              <PrimaryButton>Register</PrimaryButton>
            </div>
            <label className="label">
              <Link to="/signin" className="label-text-alt link link-hover">
                Have an account? Please Login
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
  );
};

export default Register;
