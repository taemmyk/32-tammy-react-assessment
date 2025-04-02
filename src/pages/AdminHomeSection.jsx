import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Heading";

const AdminHomeSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

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
  }, [users]);

  const handleAddUsers = async () => {
    let validName = name.replace(/\s+/g, " ").trim();
    let validLastName = lastName.replace(/\s+/g, " ").trim();
    let validPosition = position.replace(/\s+/g, " ").trim();

    if (!validName || !validLastName || !validPosition) {
      alert("Name, last name and position cannot be left empty.");
      return;
    }

    try {
      const res = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        {
          name: validName,
          lastname: validLastName,
          position: validPosition,
        }
      );
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: res.data.id,
          name: validName,
          lastName: validLastName,
          position: validPosition,
        },
      ]);
      setName("");
      setLastName("");
      setPosition("");
      // alert(`${validName} has been added to database.`);
    } catch (error) {
      console.error("Error adding users", error);
    }
  };

  const handleRemoveUsers = async (id) => {
    const targetUser = users.find((user) => user.id === id);
    if (!targetUser) return;
    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // update on ui instantly while letting backend deleting entry.
      // alert(`${targetUser.name} has been deleted.`);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="flex-col space-y-6 justify-center items-center">
      <Heading section="Admin Section" />
      <div className="flex-col bg-emerald-300 p-4 rounded-2xl">
        <h2 className="text-lg font-bold">Create User Here</h2>
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border border-lime-800 bg-lime-100 px-4 py-2 rounded-xl"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border border-lime-800 bg-lime-100 px-4 py-2 rounded-xl"
            />
            <input
              type="text"
              placeholder="Position"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              value={position}
              className="border border-lime-800 bg-lime-100 px-4 py-2 rounded-xl"
            />
            <button
              className="px-4 py-2 bg-lime-600 font-semibold text-lime-100 rounded-2xl hover:text-amber-400 hover:bg-lime-900"
              onClick={handleAddUsers}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {loading && <p className="text-lime-950 text-center">Loading...</p>}
      {error && <p className="text-lime-950 text-center">{error}</p>}
      <div className="flex justify-center">
        <table className="border-collapse border border-lime-800 mt-4">
          <thead>
            <tr className="bg-lime-700 text-lime-100 h-8">
              <th className="border border-lime-800 px-4 py-2 w-1/3">Name</th>
              <th className="border border-lime-800 px-4 py-2 w-1/3">
                Last Name
              </th>
              <th className="border border-lime-800 px-4 py-2 w-1/3">
                Position
              </th>
              <th className="border border-lime-800 px-4 py-2 w-1/3">Action</th>
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
                    <td className="border border-lime-800 px-4 py-2">
                      <button
                        onClick={() => handleRemoveUsers(user.id)}
                        className="px-2 py-1 bg-pink-600 text-pink-100 rounded-xl hover:bg-pink-800"
                      >
                        Delete
                      </button>
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

export default AdminHomeSection;
