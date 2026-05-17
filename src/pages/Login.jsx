import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import {
  AuthContext,
} from "../context/AuthContextSetup";

import {
  JobContext,
} from "../context/JobContext";

const Login = () => {
  const navigate =
    useNavigate();

  const {
    login,
  } = useContext(
    AuthContext
  );

  const {
    loadUserData,
  } = useContext(
    JobContext
  );

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [errors,
    setErrors] =
    useState({});

  const validateField =
    (name, value) => {
      let error = "";

      if (
        !value.trim()
      ) {
        error =
          name === "email"
            ? "*Email is required"
            : "*Password is required";
      }

      setErrors(
        (prev) => ({
          ...prev,
          [name]: error,
        })
      );
    };

  const handleSubmit =
    (e) => {
      e.preventDefault();

      setErrors({});

      validateField(
        "email",
        email
      );

      validateField(
        "password",
        password
      );

      if (
        !email.trim() ||
        !password.trim()
      ) {
        return;
      }

      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          )
        ) || [];

      const user =
        users.find(
          (u) =>
            u.email ===
            email
        );

      // Account not found
      if (!user) {
        setErrors({
          email:
            "*Account not found",
        });

        return;
      }

      // Wrong password
      if (
        user.password !==
        password
      ) {
        setErrors({
          password:
            "*Incorrect password",
        });

        return;
      }

      // Save current user
      localStorage.setItem(
        "currentUser",
        JSON.stringify(
          user
        )
      );

      // Login
      login();

      // Load current user dashboard
      loadUserData();

      // Navigate
      navigate(
        "/dashboard"
      );
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-[30px] p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 text-base mb-6">
          Login to continue
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-lg mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              onBlur={(e) =>
                validateField(
                  "email",
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-[18px] px-4 py-3 text-base outline-none focus:border-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.email
                }
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={
                  password
                }
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                onBlur={(e) =>
                  validateField(
                    "password",
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-[18px] px-4 py-3 text-base outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.password
                }
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold py-3 rounded-[18px]"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;