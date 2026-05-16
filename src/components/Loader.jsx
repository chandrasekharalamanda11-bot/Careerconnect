const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="mt-5 text-2xl font-bold">
          <span className="text-blue-600">
            Career
          </span>

          <span className="text-indigo-500">
            Connect
          </span>
        </h2>

        <p className="text-gray-400 mt-2">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;