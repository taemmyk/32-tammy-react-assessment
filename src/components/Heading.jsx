import { Link } from "react-router-dom";

export default function Heading({ section }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-lime-950">
        Generation Thailand <br />
        React Assessment
        {section && (
          <span className="text-lime-600 font-semibold"> {section}</span>
        )}
      </h1>
      <br />
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
    </>
  );
}
