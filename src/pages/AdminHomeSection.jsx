import { Link } from "react-router-dom";

const AdminHomeSection = () => {
  return (
    <div className="flex-col space-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-lime-950">
        Generation Thailand <br />
        React Assessment - <span className="text-lime-600 font-semibold">Admin Section</span>
      </h1>
      <div className="flex space-x-4 justify-center items-center">
        <Link to="/user-home">
          <button className="px-4 py-2 bg-lime-600 font-semibold text-lime-100 rounded-2xl hover:text-amber-400 hover:bg-lime-900">
            User Home Section
          </button>
        </Link>
        <Link to="/admin-home">
          <button className="px-4 py-2 bg-lime-600 font-semibold text-lime-100 rounded-2xl hover:text-amber-400 hover:bg-lime-900">
            Admin Home Section
          </button>
        </Link>
      </div>
      <h2>🔑 Admin Home Section</h2>
    </div>
  );
};

export default AdminHomeSection;
