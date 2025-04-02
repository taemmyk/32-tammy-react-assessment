const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-col space-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-lime-950">
        Generation Thailand <br />
        React Assessment
      </h1>
      <div className="flex space-x-4 justify-center items-center">
        <Link to="/user-home">
          <button className="px-4 py-2 bg-lime-600 font-semibold text-lime-100 rounded-2xl hover:text-amber-400 hover:bg-lime-900">User Home Section</button>
        </Link>
        <Link to="/admin-home">
          <button className="px-4 py-2 bg-lime-600 font-semibold text-lime-100 rounded-2xl hover:text-amber-400 hover:bg-lime-900">Admin Home Section</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
