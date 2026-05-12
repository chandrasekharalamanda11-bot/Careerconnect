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

const Login = () => {
  const navigate =
    useNavigate();

  const { login } =
    useContext(
      AuthContext
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

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const validateField =
    (name, value) => {
      let error = "";

      // Email Validation
      if (
        name === "email"
      ) {
        if (
          !value.trim()
        ) {
          error =
            "*Email is required";
        } else if (
          !/\S+@\S+\.\S+/.test(
            value
          )
        ) {
          error =
            "*Enter a valid email address";
        }
      }

      // Password Validation
      if (
        name ===
        "password"
      ) {
        if (
          !value.trim()
        ) {
          error =
            "*Password is required";
        } else if (
          !passwordRegex.test(
            value
          )
        ) {
          error =
            "*Use 8+ characters with uppercase, lowercase, number & symbol";
        }
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

      validateField(
        "email",
        email
      );

      validateField(
        "password",
        password
      );

      const validEmail =
        /\S+@\S+\.\S+/.test(
          email
        );

      const validPassword =
        passwordRegex.test(
          password
        );

      if (
        validEmail &&
        validPassword
      ) {
        login();

        navigate(
          "/dashboard"
        );
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-[30px] p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
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
            <label className="block mb-2 font-medium text-gray-700">
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
              className={`w-full p-4 rounded-2xl border outline-none transition ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-blue-400"
              }`}
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
            <label className="block mb-2 font-medium text-gray-700">
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
                className={`w-full p-4 rounded-2xl border outline-none transition pr-12 ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-300"
                    : "border-gray-300 focus:ring-2 focus:ring-blue-400"
                }`}
              />

              {/* Eye Icon */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
              >
                {showPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
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

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl transition duration-300 cursor-pointer font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;