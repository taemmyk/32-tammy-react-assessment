import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UserHomeSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(res.data);
      } catch (error) {
        setError("Fetching failed");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex-col space-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-lime-950">
        Generation Thailand <br />
        React Assessment -{" "}
        <span className="text-lime-600 font-semibold">User Section</span>
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
      <div className="flex justify-center">
        {loading && <p className="text-lime-950">Loading...</p>}
        {error && <p className="text-lime-950">{error}</p>}
        <table className="border-collapse border border-lime-800 mt-4">
          <thead>
            <tr className="bg-lime-700 text-lime-100">
              <th className="border border-lime-800 px-4 py-2 w-1/3">Name</th>
              <th className="border border-lime-800 px-4 py-2 w-1/3">
                Last Name
              </th>
              <th className="border border-lime-800 px-4 py-2 w-1/3">
                Position
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0
              ? users.map((user) => (
                  <tr key={user.id} className="text-lime-900 bg-lime-100">
                    <td className="border border-lime-800 px-4 py-2">
                      {user.name}
                    </td>
                    <td className="border border-lime-800 px-4 py-2">
                      {user.lastname}
                    </td>
                    <td className="border border-lime-800 px-4 py-2">
                      {user.position}
                    </td>
                  </tr>
                ))
              : !loading && (
                  <tr>
                    <td colSpan="3" className="text-center text-lime-800">
                      No users found.
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHomeSection;
