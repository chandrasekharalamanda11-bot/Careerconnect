import {
  Link,
} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h1 className="text-4xl font-bold">
  <span className="text-blue-600">
    Career
  </span>

  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    Connect
  </span>
</h1>

            <p className="text-gray-400 mt-4 leading-7">
              Helping students and
              freshers find internships
              and jobs from top
              companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/jobs"
                className="hover:text-blue-400 transition duration-300"
              >
                Jobs
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition duration-300"
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                className="hover:text-blue-400 transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>

              <Link
                to="/privacy"
                className="hover:text-blue-400 transition duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 CareerConnect.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;