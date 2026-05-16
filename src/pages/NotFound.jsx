import {
  Link,
} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="text-center">

        <h1 className="text-[120px] font-bold text-blue-600 leading-none">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mt-4 max-w-md mx-auto">
          Sorry, the page you are
          looking for does not
          exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-lg font-semibold px-8 py-4 rounded-2xl"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;