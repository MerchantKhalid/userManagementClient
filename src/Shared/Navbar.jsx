import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Providers/AuthProviders';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrimaryButton from './PrimaryButton';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="border ml-2 border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={'/events'}
                  className="ml-2 border border-indigo-800 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 hover:border-indigo-900"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to={'/dashboard'}
                  className="ml-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={'/signin'}
                  className="ml-2  bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-10 rounded-md">
            <PrimaryButton>
              <Link to="/">BookieT</Link>
            </PrimaryButton>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex flex-between">
              <div className="flex mt-5">
                <li>
                  <Link
                    to={'/'}
                    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to={'/about'}
                    className="ml-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/events'}
                    className="ml-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/dashboard'}
                    className="ml-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Dashboard
                  </Link>
                </li>
              </div>

              {/* user profile */}
              <div>
                <div className="ml-8 mt-2 w-full">
                  {user ? (
                    <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md shadow-lg">
                      <div className="flex flex-col">
                        <p className="text-white text-sm">{user.displayName}</p>
                        <p className="text-white text-xs">{user.email}</p>
                      </div>
                      <div className="avatar">
                        <div className="w-6 h-6 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-1">
                          <img src={user.photoURL} alt="User Avatar" />
                        </div>
                      </div>
                      <button
                        className="btn bg-red-500 hover:bg-red-600 text-white  py-1 px-2 rounded-full shadow-md transition duration-300 ease-in-out text-xs"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className=" flex justify-center items-center">
                      <Link
                        to={'/signin'}
                        className="flex items-center space-x-1 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg"
                      >
                        <FontAwesomeIcon
                          className="text-2xl text-white"
                          icon={faUser}
                        />
                        <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-full shadow-md transition duration-300 ease-in-out text-xs">
                          Login
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
