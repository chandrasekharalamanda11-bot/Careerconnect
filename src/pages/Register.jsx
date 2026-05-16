import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const navigate =
    useNavigate();

  const [name,
    setName] =
    useState("");

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
        if (
          name ===
          "name"
        ) {
          error =
            "*Name is required";
        }

        if (
          name ===
          "email"
        ) {
          error =
            "*Email is required";
        }

        if (
          name ===
          "password"
        ) {
          error =
            "*Password is required";
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
        "name",
        name
      );

      validateField(
        "email",
        email
      );

      validateField(
        "password",
        password
      );

      if (
        !name ||
        !email ||
        !password
      )
        return;

      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          )
        ) || [];

      const exists =
        users.find(
          (user) =>
            user.email ===
            email
        );

      if (
        exists
      ) {
        setErrors({
          email:
            "Email already registered",
        });
        return;
      }

      const newUser = {
        name,
        email,
        password,
      };

      users.push(
        newUser
      );

      localStorage.setItem(
        "users",
        JSON.stringify(
          users
        )
      );

      navigate(
        "/login"
      );
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-[30px] p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 text-base mb-6">
          Register to continue
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-lg mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              onBlur={(e) =>
                validateField(
                  "name",
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-[18px] px-4 py-3 text-base outline-none focus:border-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.name
                }
              </p>
            )}
          </div>

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
                placeholder="Create password"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
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

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold py-3 rounded-[18px]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;